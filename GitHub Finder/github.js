class GitHub {
  constructor() {
    this.client_id = "3795b1d3a018f1b9b85b";
    this.client_secret = "554f09aa3fa694bbac8b2d16b118ce20d0fad13f";
    this.repos_count = 10;
    this.repos_sort = "create: asc";
  }

  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
    );
    const repoResponse = await fetch(
      `https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`
    );
    const profile = await profileResponse.json();
    const repos = await repoResponse.json();

    return {
      profile,
      repos,
    };
  }
}
