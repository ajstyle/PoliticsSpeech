const express = require('express');
const http = require('http');
const path = require('path');

const app = express();
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));

});

const port = '3001';
app.set('port', port);

const server = http.createServer(app);

server.listen(port, () => console.log('-------------Server is Running------------'));