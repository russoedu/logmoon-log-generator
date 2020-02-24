const crypto = require('crypto')
const randCrypto = require('random-seed').create('Seed for pages')

const methodsArray = []
for (let index = 0; index < 100; index++) {
  if (index < 90) {
    methodsArray[index] = 'GET'
  } else if (index < 96) {
    methodsArray[index] = 'POST'
  } else if (index < 98) {
    methodsArray[index] = 'PUT'
  } else {
    methodsArray[index] = 'DELETE'
  }
}

const statusesArray = []
for (let index = 0; index < 100; index++) {
  if (index < 90) {
    statusesArray[index] = '200'
  } else if (index < 96) {
    statusesArray[index] = '400'
  } else if (index < 98) {
    statusesArray[index] = '501'
  } else {
    statusesArray[index] = '500'
  }
}

const pagesArray = []
for (let index = 0; index < 300; index++) {
  const r = crypto.randomBytes(randCrypto.range(16) + 4).toString('hex')
  if (index < 130) {
    pagesArray[index] = `user/${r}`
  } else if (index < 260) {
    pagesArray[index] = `profile/${r}`
  } else if (index < 280) {
    pagesArray[index] = `messages/${r}`
  } else if (index < 295) {
    pagesArray[index] = `help/${r}`
  } else {
    pagesArray[index] = 'not-found'
  }
}
module.exports = {
  outputFile: '/tmp/access.log',
  pages: pagesArray,
  methods: methodsArray,
  statuses: statusesArray,
  // Probability to generate a log
  probability: 0.00003,
  generation: function (time) {
    return (Math.sin(time)) + 0.3
  }
}
