#!/usr/bin/env node

const yargs = require('yargs/yargs')
const verify = require('./lib/verify')

async function main() {
  const stdin = process.openStdin()

  const argv = yargs(process.argv).argv
  if (!argv.env) {
    console.warn('Environment is not provided. Assuming production.')
  }

  let data = ''

  stdin.on('data', (chunk) => {
    data += chunk
  })

  stdin.on('end', () => verify(data, argv.env || 'production'))
}

main().catch(e => console.error(e))
