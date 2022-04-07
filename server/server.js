require('dotenv').config();
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const express = require('express');
const app = express();

const http = require('http');
const server = http.createServer(app);

const PORT = process.env.PORT || 3001;

const crypto = require('crypto');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'temp.html'));
});

const { Server } = require('socket.io');
const io = new Server(server);

io.on('connection', (socket) => {
  console.log('a user connected');
  socket.emit('newUser', crypto.randomUUID());

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});