const Author = require("./author");
const Comment = require("./comment");

class Post {
  constructor(title, content, author) {
    this.title = title;
    this.content = content;
    this.comment = [];
    this.author = author;
  }

  newcomment(comment, name) {
    const newcomment = new Comment(comment, name);

    this.comment.push(newcomment);
  }
}

module.exports = Post;
