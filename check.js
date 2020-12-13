#!/usr/bin/env node

const verify = require('./lib/verify')

async function main() {
  const stdin = process.openStdin()

  let data = ''

  stdin.on('data', (chunk) => {
    data += chunk
  })

  stdin.on('end', () => verify(data))
}

main()
