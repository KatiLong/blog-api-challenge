//GET and POST requests should go to /blog-posts.
//DELETE and PUT requests should go to /blog-posts/:id.


//Use Express router and modularize routes to /blog-posts.
//Meaning make separate files and app.use

const express = require('express');

const app = express();

const blogPostsRouter = require('./blogPosts');

app.use(express.static('public'));
//routing requests to express router instances that were imported above
app.use('/blog-posts', blogPostsRouter);


app.listen(process.env.PORT || 8080, () => {
    console.log(`Your app is listening on port ${process.env.PORT || 8080}`);
});
