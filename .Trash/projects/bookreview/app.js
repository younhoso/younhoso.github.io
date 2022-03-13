const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
require('dotenv').config();

//MongoDB 접속
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const db = mongoose.connection;
db.on('error', console.error);
db.once('open', function(){
    console.log('mongodb connect');
});

//라우터 경로를 가져온다.
const routes = require('./routes/index');

const app = express();

const { PORT, MONGO_URI } = process.env;
mongoose
.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log('Successfully connected to mongodb'))
.catch(e => console.error(e));

// 확장자가 ejs 로 끈나는 뷰 엔진을 추가한다.
app.set('views', path.join(__dirname, 'templates'));
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: false }));

// Routing 미들웨어
app.use('/', routes);

app.listen(`${PORT}`, () => {
  console.log(`Example app listening on port! http://localhost:${PORT}`);
});