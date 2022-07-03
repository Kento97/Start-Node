const os = require('os');

const testOSModule = () => {
    const totalMemory = os.totalmem()
    const freeMemory = os.freemem()
    console.log('totalMemory', totalMemory)
    console.log('freeMemory', freeMemory)
}

module.exports.testOSModule = testOSModule