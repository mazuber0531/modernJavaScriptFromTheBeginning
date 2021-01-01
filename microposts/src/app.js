import { http } from "./http";
import { ui } from "./ui";

//get posts on DOM load
document.addEventListener("DOMContentLoaded", getPosts);

//listen for add posts
document.querySelector(".post-submit").addEventListener("click", submitPost);

//listen for delete
document.querySelector("#posts"), addEventListener("click", deletePost);

//listen for edit state
document.querySelector("#posts").addEventListener("click", enableEdit);

//listen for cancel
document.querySelector(".card-form").addEventListener("click", cancelEdit);

function getPosts() {
  http
    .get("http://localhost:3000/posts")
    .then((data) => ui.showPosts(data))
    .catch((err) => console.log(err));
}

function submitPost() {
  const title = document.querySelector("#title").value;
  const body = document.querySelector("#body").value;
  const id = document.querySelector("#id").value;

  const data = {
    title,
    body,
  };

  if (title === "" || body === "") {
    ui.showAlert("Please say anything, wtf Mary?", "alert alert-danger");
  } else {
    if (id === "") {
      http
        .post("http://localhost:3000/posts", data)
        .then((data) => {
          ui.showAlert("Post Added", "alert alert-success");
          ui.clearFields();
          getPosts();
        })
        .catch((err) => console.log(err));
    } else {
      http
        .put(`http://localhost:3000/posts/${id}`, data)
        .then((data) => {
          ui.showAlert("Post Updated", "alert alert-success");
          ui.changeFormState("add");
          getPosts();
        })
        .catch((err) => console.log(err));
    }

    //create post
  }
}

//delete post
function deletePost(e) {
  if (e.target.parentElement.classList.contains("delete")) {
    const id = e.target.parentElement.dataset.id;
    if (confirm("are you sure, bitch?")) {
      http
        .delete(`http://localhost:3000/posts/${id}`)
        .then((data) => {
          ui.showAlert("Post Removed", "alert alert-success");
          getPosts();
        })
        .catch((err) => console.log(err));
    }
  }
  e.preventDefault();
}

//enable edit state
function enableEdit(e) {
  if (e.target.parentElement.classList.contains("edit")) {
    const id = e.target.parentElement.dataset.id;
    const title =
      e.target.parentElement.previousElementSibling.previousElementSibling
        .textContent;
    const body = e.target.parentElement.previousElementSibling.textContent;

    const data = {
      id,
      title,
      body,
    };

    //fill form with current post
    ui.fillForm(data);
  }
}

//cancel edit
function cancelEdit(e) {
  if (e.target.classList.contains("post-cancel")) {
    ui.changeFormState("add");
  }

  e.preventDefault();
}
