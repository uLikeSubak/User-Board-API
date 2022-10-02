// 모듈 선언
const express = require('express')
const passport = require('passport')
const cookieParser = require('cookie-parser')
const morgan = require('morgan')
const path = require('path')
const session = require('express-session')
const dotenv = require('dotenv')
const passportConfig = require('./passport')

const { sequelize } = require('./models')

const app = express();
dotenv.config();

app.set('port', process.env.PORT)

sequelize.sync({ force: false })
.then(() => {
    console.log('데이터베이스 연결 성공')
})
.catch((err) => {
    console.log(err)
})


// 미들웨어
app.use(morgan('dev'))
app.use(express.static(path.join(__dirname, 'public')))
app.use('/img', express.static(path.join(__dirname, 'uploads')))
app.use(express.json())
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(session({
  resave: false,
  saveUninitialized: false,
  secret: process.env.COOKIE_SECRET,
  cookie: {
    httpOnly: true,
    secure: false,
  },
}));

app.use(passport.initialize());
app.use(passport.session());


app.listen(app.get('port'), () => {
  console.log(app.get('port'), '번 포트에서 대기중');
  });




