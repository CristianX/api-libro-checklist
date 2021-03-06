const http = require('http');

const app = require('./server');
const config = require('./server/config');

const { port } = config.server;

const server = http.createServer(app);

server.listen(port, () => {
    console.log(`Server is running at port: ${port}`);
});