'use strict'

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const blogPostSchema = mongoose.Schema({
    title: {type: String, required: true},
    content: {},
    author: {
        firstName: String,
        lastName: String
    },
    created: {type: Date, default: Date.now}
});

blogPostSchema.virtual('authorName').get(function() {
    const auth = this.author;
    return `${auth.firstName} ${auth.lastName}`.trim();
});

blogPostSchema.method.serialize = function() {
    return {
        id: this._id,
        title: this.title,
        author: this.authorName,
        content: this.content,
        created: this.created
    };
};

const BlogPost = mongoose.model('BlogPost', blogPostSchema);

module.exports = {BlogPost};