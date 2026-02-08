require('dotenv').config();

var express = require('express');
var path = require('path');

var cookieParser = require('cookie-parser');
var logger = require('morgan');
const loginRouter = require('./routes/login');
const adminRouter = require('./routes/admin');

var indexRouter = require('./routes/index');

var app = express();   // 👈 ESTO DEBE IR ANTES DE app.use

const session = require('express-session');

app.use(session({
  secret: 'mi_clave_secreta', // cualquier frase secreta
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60 * 60 * 1000 } // 1 hora
}));

// view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// css
app.use(express.static(path.join(__dirname, 'public')));

// rutas
app.use('/', indexRouter);
app.use('/admin', loginRouter);
app.use('/admin', adminRouter);

// ruta raíz
app.get('/', (req,res)=>{
  res.redirect('/admin/login');
});

module.exports = app;