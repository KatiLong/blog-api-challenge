//GET and POST requests should go to /blog-posts.
//DELETE and PUT requests should go to /blog-posts/:id.


//Use Express router and modularize routes to /blog-posts.
//Meaning make separate files and


//const app = express();
//
//const shoppingListRouter = require('./shoppingListRouter');
//const recipesRouter = require('./recipesRouter');
//
//// log the http layer
//app.use(morgan('common'));
//
//app.use(express.static('public'));
//
//app.get('/', (req, res) => {
//    res.sendFile(__dirname + '/views/index.html');
//});
//
//
//// when requests come into `/shopping-list` or
//// `/recipes`, we'll route them to the express
//// router instances we've imported. Remember,
//// these router instances act as modular, mini-express apps.
//app.use('/shopping-list', shoppingListRouter);
//app.use('/recipes', recipesRouter);
//
//app.listen(process.env.PORT || 8080, () => {
//    console.log(`Your app is listening on port ${process.env.PORT || 8080}`);
//});


const app = express();

const blogPosts = require('./blogPosts');

//logs the HTTP layer
app.use(morgan('common'));

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
})
