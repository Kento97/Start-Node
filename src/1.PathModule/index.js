const path = require('path');

function testPathModule() {
    const pathObj = path.parse(__dirname)
    console.log('pathObj', pathObj)
}

module.exports.testPathModule = testPathModule