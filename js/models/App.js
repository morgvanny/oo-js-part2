class App {
  constructor() {
    this.posts = [];
    // this.newPost = this.newPost.bind(this);
    this.postAdapter = new Adapter("posts");
    this.getPosts().then(() => {
      this.renderPosts();
    });
    blogForm.addEventListener("submit", this.newPost);
    document.body.addEventListener("click", this.handleClick);
  }

  getPosts() {
    return this.postAdapter.getIndex().then((data) => {
      this.posts = data.map((post) => {
        return new Post(post);
      });
    });
  }

  renderPosts() {
    const postsDiv = document.querySelector(".posts");
    postsDiv.innerHTML = "";
    this.posts.forEach((post) => {
      postsDiv.innerHTML += post.html();
    });
  }

  newPost = (e) => {
    e.preventDefault();
    const post = new Post({
      title: title.value,
      content: content.value,
      author: author.value,
    });
    this.postAdapter.post(post).then((p) => {
      post.id = p.id;
      this.addPost(post);
      blogForm.reset();
    });
  };

  addPost(post) {
    this.posts.push(post);
    this.renderPosts();
  }

  handleClick = (e) => {
    if (e.target.className == "deletePost") {
      const id = e.target.dataset.id;
      this.postAdapter.delete(id).then(() => {
        this.posts = this.posts.filter((p) => {
          return p.id != id;
        });
        this.renderPosts();
      });
    }
  };
}
