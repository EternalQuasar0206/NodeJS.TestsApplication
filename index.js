const http = require("http");

const defaultListenerHead = {
    statusCode: 200,
    headers: {
        "Content-Type": "text/json"
    }
}

const defaultListener = (req, res) => {
    res.writeHead(defaultListenerHead.statusCode, defaultListenerHead.headers);
    res.write('Hello World!');
    res.end();
};

http.createServer(defaultListener).listen(8080);