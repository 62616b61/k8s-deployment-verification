#!/usr/bin/env node

const stdin = process.openStdin()

var data = ''

stdin.on('data', (chunk) => {
  data += chunk
})

stdin.on('end', () => {
  console.log('DATA:\n' + data)
})
