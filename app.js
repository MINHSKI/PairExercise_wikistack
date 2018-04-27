const express = require('express');
const morgan = require('morgan');
const bodyparser = require('body-parser')
//const routes = require('./routes');
const addPage = require('./views/addPage');
const editPage = require('./views/editPage');
const index = require('./views/index');
const layout = require('./views/layout');
const main = require('./views/main');
const userList = require('./views/userList');
const userPages = require('./views/userPages');
const wikipage = require('./views/wikipage');

const app = express();

app.use(bodyparser.urlencoded({ extended: false}));
app.use(bodyparser.json());

app.use(morgan('dev'));
app.use(express.static(__dirname + '/public'));
app.use(layout);
//1337app.use(routes);

app.get('/', (req, res) => {

  res.send(layout(" "));
  //res.send('hello World');
});



const PORT = 8080;

app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
});




