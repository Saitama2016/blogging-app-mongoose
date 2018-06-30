const express = require('express');
const router = express.Router();

// const {BlogPosts} = require('./models');

//Begin get request
router.get('/', (req, res) => {
    // res.json(BlogPosts.get());
    res.send('GET /posts')
});

router.get('/:id', (req,res) => {
    res.send('GET /posts/:id')
});
//Begin post request with create function
router.post('/', (req, res) => {
    res.send('POST /posts')
});

//Begin put request with update function 
router.put('/:id', (req, res) => {
    res.send('PUT /posts/:id')
});

//Begin delete request
router.delete('/:id', (req, res) => {
    res.send('DELETE /posts/:id')
});

module.exports = router;