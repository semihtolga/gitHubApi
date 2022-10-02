const APIURL = "https://api.github.com/users/";

const main = document.getElementById("main");
const form = document.getElementById("form");
const search = document.getElementById("search");

async function getUser(username) {
  try {
    const { data } = await axios(APIURL + username);

    createUserCard(data);
  } catch (err) {
    if (err.response.status == 404) {
      createErrorCard("There is no such user");
    }
  }
}

async function getRepos(username) {
  try {
    const { data } = await axios(APIURL + username + "/repos?sort=created");

    console.log(data);
    addReposToCard(data);
  } catch (err) {
    createErrorCard("Problem fetching repository");
  }
}