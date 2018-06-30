// const chai = require('chai');
// const chaiHttp = require('chai-http');

// const expect = chai.expect;

// const {app, runServer, closeServer} = require('./server');

// chai.use(chaiHttp);

// describe('Blog Posts', function() {
//     before(function() {
//         return runServer();
//     });

//     after(function() {
//         return closeServer();
//     });

//     it.skip('should list items on GET', function() {
//         return chai.request(app)
//         .get('/posts')
//         .then(function(res) {
//             expect(res).to.have.status(200);
//             expect(res).to.be.json;
//             expect(res.body).to.be.a('array');
//             expect(res.body.length).to.be.above(0);
//             res.body.forEach(function(item) {
//                 expect(item).to.be.a('object');
//                 expect(item).to.have.all.keys(
//                     'id', 'title', 'content', 'author', 'publishDate');
//             });
//         });
//     });

//     it.skip('should add a blog post on POST', function() {
//         const newPost = { title: "Shonen in 2010s", content: "Checkout Dragonball Super, My Hero Academia, and One Punch Man", author: "Proud Saiyan"};
//         const expectedKeys = ['id', 'publishDate'].concat(Object.keys(newPost));
//         return chai.request(app)
//             .post('/posts')
//             .send(newPost)
//             .then(function(res) {
//                 expect(res).to.have.status(201);
//                 expect(res).to.be.json;
//                 expect(res.body).to.be.a('object');
//                 expect(res.body).to.have.all.keys(expectedKeys);
//                 expect(res.body.title).to.equal(newPost.title);
//                 expect(res.body.content).to.equal(newPost.content);
//                 expect(res.body.author).to.equal(newPost.author);
//             });
//     });

//     it.skip('should error if POST missing expected values', function() {
//         const badRequestData = {};
//         return chai.request(app)
//             .post('/posts')
//             .send(badRequestData)
//             .then(function(res) {
//                 expect(res).to.have.status(400);
//             });
//     });

//     it.skip('should update blog posts on PUT', function() {
//         return chai.request(app)
//             .get('/posts')
//             .then(function(res) {
//                 const updatedPost = Object.assign(res.body[0], {
//                     title: 'Nostalgia Shonen',
//                     content: 'Fist of the North Star, Saint Seiya, Dragon ball Z'
//                 });
//                 return chai.request(app)
//                 .put(`/posts/${res.body[0].id}`)
//                 .send(updatedPost)
//                 .then(function(res) {
//                     expect(res).to.have.status(204);
//                 });
//             });
//     });

//     it.skip("should delete items on DELETE", function() {
//         return chai.request(app)
//             .get('/posts')
//             .then(function(res) {
//                 return chai.request(app)
//                 .delete(`/blog-posts/${res.body[0].id}`)
//                 .then(function(res) {
//                     expect(res).to.have.status(204);
//                 });
//             });
//         });
// });