const Post = require("./post");

class Author {
  constructor(name) {
    this.name = name;
    this.posts = [];
  }
  newPost(title, content) {
    const post = new Post(title, content, this);
    this.posts.push(post);

    return post;
  }
}

module.exports = Author;
