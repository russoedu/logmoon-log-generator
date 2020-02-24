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

const statusesArray = [];
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

module.exports = {
  outputFile: '/tmp/access.log',
  pages: [
    'user/alice',
    'user/bob',
    'user/charles',
    'user/daisy',
    'profile/edit',
    'profile/posts',
    'profile/create',
    'profile/delete',
    'messages/bob',
    'messages/daisy',
    'messages/frank',
    'messages/donna',
    'help',
    'help/faq',
    'not-found'
  ],
  methods: methodsArray,
  statuses: statusesArray,
  // Probability to generate a log
  probability: 0.00003,
  time: new Date(),
  generation: '(0.00001(sin(5x)))+0.000008',
  // Toggle the generator on and off, remaining 'onInterval' seconds on and 'offInterval' seconds off
  toggle: {
    onInterval: 20,
    offInterval: 20
  }
}
