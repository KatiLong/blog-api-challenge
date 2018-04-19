//GET and POST requests should go to /blog-posts.
//DELETE and PUT requests should go to /blog-posts/:id.


//Use Express router and modularize routes to /blog-posts.
//Meaning make separate files and app.use

const app = express();

const blogPosts = require('./blogPosts');

//logs the HTTP layer
app.use(morgan('common'));

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
})
//routing requests to express router instances that were imported above
app.use('/blog-posts', blogPosts);


app.listen(process.env.PORT || 8080, () => {
    console.log(`Your app is listening on port ${process.env.PORT || 8080}`);
});
