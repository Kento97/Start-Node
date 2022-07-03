const { testPathModule } = require('./src/1.PathModule/index');
const { testOSModule } = require('./src/2.OSModule/index');
const { testFsModule } = require('./src/3.FileModule');
const { Logger, EVENTNAME } = require('./src/4.EventModule');
const testHttpModule = require('./src/5.HttpModule');
// testPathModule()
// testOSModule()
// testFsModule()

// const logger = new Logger()
// logger.on(EVENTNAME, (args) => {
//     console.log('args', args)
// })
// logger.Log("我带你们打")

testHttpModule()