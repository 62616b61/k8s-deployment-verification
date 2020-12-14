const { Octokit } = require('@octokit/rest')
const { GITHUB_TOKEN } = process.env

module.exports = new Octokit({
  auth: GITHUB_TOKEN
})
