const express = require('express');

const app = express();

app.use('/add-product',(req, res, next) => {
  res.send('<h1>add-product</h1>');
});

app.use('/',(req, res, next) => {
  res.send('<h1>Hello from Express!</h1>');
});
//Testing if i can push 
app.listen(3000);
