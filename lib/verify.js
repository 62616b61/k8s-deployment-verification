const yaml = require('yaml')
const find = require('./find-deployment')

module.exports = async (data) => {
  if (!data) {
    throw new Error('Incoming data is empty')
  }

  const manifest = yaml.parse(data)

  if (!manifest.apiVersion || manifest.apiVersion !== 'apps/v1') {
    throw new Error('Wrong manifest api version provided')
  }

  if (!manifest.kind || manifest.kind !== 'Deployment') {
    throw new Error('Wrong object kind provided')
  }

  if (!manifest.metadata || !manifest.metadata.annotations) {
    throw new Error('Object annotations are missing')
  }

  const repo = manifest.metadata.annotations['github.com/repo'] || ''
  const sha = manifest.metadata.annotations['github.com/sha'] || ''

  const deployment = await find(repo, sha)
  if (!deployment) {
    throw new Error(`Deployment not found for ${repo} with SHA ${sha}`)
  }

  console.log('Found deployment', deployment)
}
