function getIssues() {
}

function showIssues(json) {
}

function createIssue() {
}

function showResults(json) {
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  const token = getToken()
  fetch('https://api.github.com/learn-co-curriculum/javascript-fetch-lab/forks', {
    method: 'post',
    headers: {
      Authorization: `token ${token}`
    }
  }).then(res => res.json())
  .then(json => showResults(json) );
  //use fetch to fork it!
}

function getToken() {
  const token = '';
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
}
