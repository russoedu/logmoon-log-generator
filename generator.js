const fs = require('fs')
const strftime = require('strftime')
const randOutput = require('random-seed').create("Seed for output decision")
const randPage = require('random-seed').create("Seed for page index")
const randMethod = require('random-seed').create("Seed for method index")
const randStatus = require('random-seed').create("Seed for status index")
const config = require('./config.js')

class Generator {
  static generate() {
    // open log file for writing
    const logFileDescriptor = fs.openSync(config.outputFile, 'w')

    const onInterval = config.toggle.onInterval
    const offInterval = config.toggle.offInterval
    const start = Date.now()

    let generating = true

    // start infinite loop
    while (true) {
      const uptime = (Date.now() - start) / 1000
      generating = (uptime % (onInterval + offInterval)) < onInterval

      // check whether to output
      if (randOutput.random() < config.probability && generating) {
        // roll dice on page, method and status
        const page = config.pages[randPage.range(config.pages.length)]
        const method = config.methods[randMethod.range(config.methods.length)]
        const status = config.statuses[randStatus.range(config.statuses.length)]

        // generate log entry and write to file
        const logEntry = [
            '127.0.0.1',
            'logmoon',
            '-',
            '[' + strftime('%d/%b/%Y:%H:%M:%S %z') + ']',
            '"' + method + ' /' + page + ' HTTP/1.1"',
            status,
            Math.floor(Math.random() * 1000),
            '\n'
        ].join(' ')

        fs.writeSync(logFileDescriptor, logEntry)

        if (config.consoleOutput) {
          console.log(logEntry)
        }
      }
    }
  }
}

module.exports = Generator
