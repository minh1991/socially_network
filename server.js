const express = require('express');
const mongoose = require('mongoose');
const db = require('./config/keys').mongoURI;
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const cors = require('cors');
const AuthRouter = require('./routers/authentication.router');
const PostRouter = require('./routers/post.router');
const UserRouter = require('./routers/user.router');
const FriendRouter = require('./routers/friend.router')

const app = express();

//Socket.Io setting
const server = require('http').createServer(app);
const io = require('socket.io').listen(server);
require('./socket/stream')(io);

app.use(cors());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));
app.use(cookieParser());
app.use(morgan('dev'));
app.use('/api/socially', AuthRouter);
app.use('/api/socially/post', PostRouter);
app.use('/api/socially/users', UserRouter);
app.use('/api/socially/friends', FriendRouter)

// DATA BASE
mongoose.Promise = global.Promise;
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => {
    console.log('mongoDb đã chạy');
  })
  .catch(err => {
    console.log(err);
  });

// PORT

app.get('/', (req, res) => {
  return res.send('xin chào');
});
const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log(`server đã chạy ở port ${port}`);
});
