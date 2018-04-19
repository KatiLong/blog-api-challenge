//Note that to create a new blog post, you need to supply a title,
// content, an author name, and (optionally) a publication date

const express = require('express');
const router = express.Router();

const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

const {
    BlogPosts
} = require('./models');

//adding entries to BlogPosts data so there's something to look at
//title, content, author, publishDate
BlogPosts.create('The Birds', 'A wealthy San Francisco socialite pursues a potential boyfriend to a small Northern California town that slowly takes a turn for the bizarre when birds of all kinds suddenly begin to attack people.', 'Alfred Hitchcock', '1963');
BlogPosts.create('React Native', 'Small and created by Facebook', 'MPJ', '2017');

//when root of this router is called with GET, return all
//current blogPosts items
router.get('/', (req, res) => {
    res.json(BlogPosts.get());
});
//when new blog post added, ensure it has required fields.
//if not log error and return 400 status with helpful message
//if okay, add new item, and return it with a status 201
router.post('/', jsonParser, (req, res) => {
    const requiredFields = ['title', 'content', 'author'];
    for (let i = 0; i < requiredFields.length; i++) {
        const field = requiredFields[i];
        if (!(field in req.body)) {
            const message = `Missing \'${field}\' in request body`;
            console.error(message);
            return res.status(400).send(message);
        }
    }
    const item = BlogPosts.create(req.body.title, req.body.content, req.body.author, req.body.publishDate);
    res.status(201).json(item);
});

//Delete blog posts by id
router.delete('/:id', (req, res) => {
    BlogPosts.delete(req.params.id);
    console.log(`Deleted blog post item \`${req.params.ID}\``);
    res.status(204).end();
});

// PUT update request, checks for required fields
// if fails, logs error and sends back status code 400
// otherwise call 'Recipes.updateItem' with update Post
//title, content, author, publishDate
router.put('/:id', jsonParser, (req, res) => {
    const requiredFields = ['title', 'content', 'author'];
    for (let i = 0; i < requiredFields.length; i++) {
        const field = requiredFields[i];
        if (!(field in req.body)) {
            const message = `Missing \'${field}\' in request body`;
            console.error(message);
            return res.status(400).send(message);
        }
    }
    if (req.params.id !== req.body.id) {
        const message = (
            `Request path id (${req.params.id}) and request body id `
            `(${req.body.id}) must match`);
        console.error(message);
        return res.status(400).send(message);
    }
    console.log(`Updating blog post \`${req.params.id}\``);
    const updatedItem = BlogPosts.update({
        id: req.params.id,
        title: req.body.title,
        content: req.body.content,
        author: req.body.author,
        publishDate: req.body.publishDate
    });
    res.status(204).end();
});

module.exports = router;
