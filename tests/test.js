const {
    app,
    runServer,
    closeServer
} = require('../server');

var chai = require('chai');

var chaiHttp = require('chai-http');

var blogPost = require('../models.js');

var should = chai.should();

chai.use(chaiHttp);

describe('blog-api-challenge', function () {
    it('Should Get All blog posts', function () {
        return chai.request(app)
            .get('/get')
            .then(function (res) {
                res.should.have.status(201);
            })
            .catch(err => console.log({
                err
            }));
    });
    it('should create a blog post on POST', function () {
        return chai.request(app)
            .post('/create')
            .send({
                "title": "You'll Be Back",
                "content": "You’ll be back, time will tell. You’ ll remember that I served you well. Oceans rise, empires fall, We have seen each other through it all, And when push comes to shove, I will send a fully armed battalion to remind you of my love!",
                "author": "Lin-Manuel Miranda",
                "publishDate": "03-15-2015"
            })
            .then(function (err, res) {
                //should.equal(err, null);
                res.should.have.status(201);
                res.should.be.json;
                res.body.should.be.a('object');
            })
            .catch(err => console.log({
                err
            }));
    });
    it('Should Delete a blog post', function () {

        return chai.request(app)
            .delete('/delete/:id')
            .then(function (res) {
                res.should.have.status(201);
            })
            .catch(err => console.log({
                err
            }));

    });
    it('Should Update a blog post', function () {
        return chai.request(app)
            .put('/update/:id') //<-------????? Put request to '/entry/:id'
            .then(function (res) {
                res.should.have.status(201);
            })
            .catch(err => console.log({
                err
            }));
    });

});
