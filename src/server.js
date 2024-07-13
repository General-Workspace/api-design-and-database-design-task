import http from "node:http";
import app from "./app.js";


const port = process.env["PORT"] || 1234;

const server = http.createServer(app);

const start = () => {
    server.listen(port, () => {
        console.log("Server has started.");
    });
}

start();
