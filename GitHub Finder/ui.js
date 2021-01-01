class UI {
  constructor() {
    this.profile = document.getElementById("profile");
  }

  showProfile(user) {
    this.profile.innerHTML = `
      <div class="card card-body mb-3">
      <div class="row">
      <div class="col-md3">
      <img src="${user.avatar_url}" alt="" class="img-fluid mb-2" />
      <a
      href="${user.html_url}"
      target="_blank"
      class="btn btn-primary btn-block mb-3"
      >View Profile</a
      >
      </div>
      <div class="col-md-9">
      <span class="badge badge-primary"
      >Public Repos: ${user.public_repos}</span
      >
      <span class="badge badge-secondary"
      >Public Gists: ${user.public_gists}</span
      >
      <span class="badge badge-success"
      >Followers: ${user.followers}</span
      >
      <span class="badge badge-info">Following: ${user.following}</span>
      <br /><br />
      <ui class="list-group">
      <li class="list-group-item">Company: ${user.company}</li>
      <li class="list-group-item">Website/Blog: ${user.blog}</li>
      <li class="list-group-item">Location: ${user.location}</li>
      <li class="list-group-item">
      Member Since: ${user.created_at}
      </li>
      </ui>
      </div>
      </div>
      </div>
      <h3 class="page-heading mb-e">Latest Repos</h3>
      <div id="repos"></div>
      </div>
      `;
  }

  showRepos(repos) {
    let output = "";

    repos.forEach(function (repo) {
      output += `
      <div class="card card-body mb-2">
        <div class="row">
        <div class="col-md-6">
          <a href="" target="_blank">${repo.name}</a>
        </div>
        <span class="badge badge-primary"
        >Stars: ${repo.stargazers_count}</span
        >
        <span class="badge badge-secondary"
        >Watchers: ${repo.watchers_count}</span
        >
        <span class="badge badge-success"
        >Forks: ${repo.forms_count}</span
        >
      </div>
      </div>`;
    });
    document.getElementById("repos").innerHTML = output;
  }

  showAlert(message, className) {
    this.clearAlert();
    const div = document.createElement("div");
    div.className = className;
    div.appendChild(document.createTextNode(message));
    const container = document.querySelector(".searchContainer");
    const search = document.querySelector(".search");
    container.insertBefore(div, search);
    setTimeout(() => {
      this.clearAlert();
    }, 3000);
  }

  clearAlert() {
    const currentAlert = document.querySelector(".alert");
    if (currentAlert) {
      currentAlert.remove();
    }
  }
  clearProfile() {
    this.profile.innerHTML = "";
  }
}
