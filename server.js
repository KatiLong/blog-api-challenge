//GET and POST requests should go to /blog-posts.
//DELETE and PUT requests should go to /blog-posts/:id.


//Use Express router and modularize routes to /blog-posts.
//Meaning make separate files and app.use

const express = require('express'); //require build in JS method, express part of node modules

const app = express(); //tells server to connect to express view - connecting controller to view (client)
//app is local object, add methods to it, line 20 runs the app

const blogPostsRouter = require('./blogPosts'); //tells the server to connect to router (server acting like global hub)

app.use(express.static('public')); //client files = static (view files), 'public' = folder name
//routing requests to express router instances that were imported above
app.use('/blog-posts', blogPostsRouter); //address to router, setting router part of URL


app.listen(process.env.PORT || 8080, () => { //"document ready function"
    console.log(`Your app is listening on port ${process.env.PORT || 8080}`);
});

//heroku.com/blog-posts/delete/1
