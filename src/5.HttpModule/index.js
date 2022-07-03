const http = require('http');

function testHttpModule() {
    const server = http.createServer((req, res) => {
        if (req.url === "/") {
            res.write("Hello World")
            res.end()
        }
        if (req.url === "/api/courses") {
            res.write(JSON.stringify([1, 2, 3]))
            res.end()
        }
    });
    server.listen(8848)
    console.log("listening on http://localhost:8848")
}
module.exports = testHttpModule