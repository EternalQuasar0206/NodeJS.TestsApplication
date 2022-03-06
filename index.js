import { createServer } from "http";
import { hello } from "./module.js";

const defaultListenerHead = {
    statusCode: 200,
    headers: {
        "Content-Type": "text/json"
    }
}

const defaultListener = (req, res) => {
    res.writeHead(defaultListenerHead.statusCode, defaultListenerHead.headers);
    res.write(hello);
    res.end();
};

createServer(defaultListener).listen(8080);