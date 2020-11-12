class Post {
  constructor(data) {
    this.title = data.title;
    this.author = data.author;
    this.content = data.content;
    this.id = data.id;
    this.comments = [];
  }

  html() {
    return `<div class="post">
      <h4>${this.title}</h4>
      <h5>Author: ${this.author}</h5>
      <p>${this.content}</p>
      <button class="deletePost" data-id="${this.id}">delete</button>
      <div>`;
  }

  json() {
    return JSON.stringify({
      title: this.title,
      content: this.content,
      author: this.author,
    });
  }
}
