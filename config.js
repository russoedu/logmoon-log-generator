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
  append: false,
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
  probability: 0.00003,
  consoleOutput: false,
  toggle: {
    onInterval: 90,
    offInterval: 90
  }
}
