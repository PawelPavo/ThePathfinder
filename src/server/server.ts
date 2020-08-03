import * as path from 'path'
import * as express from 'express';
import apiRouter from './routes';

const app = express();
const server = require("http").Server(app);
const io = require("socket.io")(server);

app.use(express.static('public'));
app.use(apiRouter);
app.get('/*', (req, res) => res.sendFile(path.join(__dirname, '../public/index.html')));
io.on("connection", socket => {
  const { id } = socket.client;
  console.log(`USER - ${id} - connected`);
  socket.on("Chat message", message => {
    // console.log(`${message.username}: ${message.msg} `)
    io.emit("Chat message", message);
  });

  socket.on("disconnect", () => console.log(`USER - ${id} - disconnected`));
});


const port = process.env.PORT || 3000;
server.listen(port, () => console.log(`Server listening on port: ${port}`));


