const express = require('express');
const app = express();
const pool = require('./models/bd');

var createError = require('http-errors');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users')

app.get('/empleados', async (req,res)=>{
  try {
    const rows = await pool.query("SELECT * FROM empleados");

    console.log("Empleados:");
    console.log(rows);

    res.json(rows);

  } catch(err) {
    console.log(err);
    res.status(500).send(err);
  }
});



app.get('/empleados', async (req,res)=>{
  try {
    const rows = await pool.query("SELECT * FROM empleados");
    res.json(rows);
  } catch(err) {
    res.status(500).send(err);
  }
});

app.get('/insertar-juan', async (req,res)=>{
  try {
    await pool.query(
      "INSERT INTO empleados (nombre,apellido,salario,trabajo,email) VALUES (?,?,?,?,?)",
      ["Juan","Perez",10000,"Programador","juanperez@gmail.com"]
    );

    res.send("Juan insertado");
      } catch(err) {
    console.log(err);
    res.status(500).send(err);
  }
});



// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());

app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
