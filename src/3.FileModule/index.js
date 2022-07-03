const fs = require('fs');

const testFsModule = () => {
    fs.readdir('./', (err, data) => {
        if (err) console.log('Error', err)
        else console.log("data",data)
    })
    const files = fs.readdirSync('./');
    console.log('files', files)

}
module.exports.testFsModule = testFsModule