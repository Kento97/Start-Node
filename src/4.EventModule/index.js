const EventEmitter = require('events');
const EVENTNAME = "messageLogged"
const URL = "url"
class Logger extends EventEmitter {
    Log(message) {
        console.log(message)
        this.emit(EVENTNAME, {
            id: 1141514,
            url: URL
        })
    }
}

module.exports = {Logger,EVENTNAME}