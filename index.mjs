import express  from "express";
const app = express();
import http  from 'http';
const server = http.createServer(app);
import { Server } from 'socket.io';
const io = new Server(server);

const __dirname = './'


app.get('/', (req, res) => {
    res.sendFile('./index.html', {root : __dirname});
  });

io.on('connection', (socket) => {
   socket.on('chat message', (msg) => {
    io.emit('chat message', msg)
    console.log(msg)
   })
})
server.listen(3000, ()=> {
    console.log('server')
})

