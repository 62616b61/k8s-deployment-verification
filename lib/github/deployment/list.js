const octokit = require('../octokit')

module.exports = async (repo, environment, page = 0) => {
  return octokit.request(`GET /repos/${repo}/deployments`, {
    environment,
    page
  }) 
}
