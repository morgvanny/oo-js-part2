class Adapter {
  constructor(resource) {
    this.resource = resource;
  }

  getIndex() {
    return fetch(`http://localhost:3000/${this.resource}`).then((r) =>
      r.json()
    );
  }

  post(instance) {
    return fetch(`http://localhost:3000/${this.resource}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: instance.json(),
    }).then((r) => r.json());
  }

  delete(id) {
    return fetch(`http://localhost:3000/${this.resource}/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((r) => r.json());
  }
}
