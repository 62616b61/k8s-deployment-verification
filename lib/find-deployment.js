const list = require('./github/deployment/list')

module.exports = async (repo, environment, sha) => {
  try {
    let endReached = false
    let deployment = null
    let page = 0

    while (!endReached && !deployment) {
      const deployments = await list(repo, environment, page)

      if (!deployments.data || !deployments.data.length) {

        endReached = true

      } else {

        deployment = deployments.data.find(deployment => deployment.sha === sha)

      }

      page += 1
    }

    return deployment
  } catch (error) {
    if (error.status === 404) {
      throw new Error('Error while getting deployments: NOT FOUND')
    }

    throw new Error(`Error while getting deployments: ${error}`) 
  }
}
