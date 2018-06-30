const express = require('express');
const router = express.Router();

const { BlogPost } = require('./models');

//Begin get request
router.get('/posts', (req, res) => {
    // res.json(BlogPosts.get());
    BlogPost
    .find()
    .then(posts => {
        res.json(posts.map(post => post.serialize()));
    })
    .catch(err => {
        console.error(err);
        res.status(500).json({ error: 'done messed up.'});
    });
    // res.send('GET /posts')
});

router.get('/posts/:id', (req,res) => {
    BlogPost
    .findById(req.params.id)
    .then(post => res.json(post.serialize()))
    .catch(err => {
        console.error(err);
        res.status(500).json({ error: 'done messed up.'});
    });
    // res.send('GET /posts/:id')
});
//Begin post request with create function
router.post('/posts', (req, res) => {
    const requiredFields = ['title', 'content', 'author'];
    for (let i=0; i < requiredFields.length; i++){
        const field = requiredFields[i];
        if (!(field in req.body)) {
            const message = `Missing \`${field}\` in request body`;
            console.error(message);
            return res.status(400).send(message);
        }
    }
    // res.send('POST /posts')
    BlogPost
        .create({
            title: req.body.title,
            content: req.body.content,
            author: req.body.author
        })
        .then(blogPost => res.status(201).json(blogPost.serialize()))
        .catch(err => {
            console.error(err);
            res.status(500).json({ error: 'Something went wrong' })
        });

});

//Begin put request with update function 
router.put('/posts/:id', (req, res) => {
    if (!(req.params.id && req.body.id && req.params.id === req.body.id)) {
        res.status(400).json({
            error: 'Request path id and request body id values must match'
        });
    }

    const updated = {};
    const updateableFields = ['title', 'content', 'author'];
    updateableFields.forEach(field => {
        if (field in req.body) {
            updated[field] = req.body[field];
        }
    });

    BlogPost
        .findByIdandRemove(req.params.id)
        .then(() => {
            console.log(`Deleted blog post with id \`${req.params.id}\``);
            res.status(204).end();
        });
    // res.send('PUT /posts/:id')
});

//Begin delete request
router.delete('/posts/:id', (req, res) => {
    BlogPost
        .findByIdandRemove(req.params.id)
        .then(() => {
            console.log(`Deleted blog post with id \`${req.params.id}\``);
            res.status(204).end();
        });
    // res.send('DELETE /posts/:id')
});

router.use('*', function (req, res) {
    res.status(404).json({ message: 'Not Found'});
});

module.exports = router;