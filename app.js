const express = require('express');
const morgan = require('morgan');
const bodyparser = require('body-parser');
const addPage = require('./views/addPage');
const editPage = require('./views/editPage');
const index = require('./views/index');
const layout = require('./views/layout');
const main = require('./views/main');
const userList = require('./views/userList');
const userPages = require('./views/userPages');
const wikipage = require('./views/wikipage');
const PORT = 8080;

const app = express();

const { db } = require('./models');
db.authenticate().
then(() => {
  console.log('connected to the database');
});

// const init = async () => {
  // try{
  //   await db.sync
  // } catch (error){next(error)};
//   app.listen(PORT, () => {
//     console.log(`App listening in port ${PORT}`);
//   });
// };

const init = async () => {
  await db.User.sync();
  await db.Page.sync();
// try{
//     await db.User.sync();
//     await db.Page.sync();
//   } catch (error) {
//     console.error('DB Sync problem');
//   }
  app.listen(PORT, () => {
    console.log(`App listening in port ${PORT}`);
  });
};

init();

app.use(bodyparser.urlencoded({ extended: false}));
app.use(bodyparser.json());

app.use(morgan('dev'));
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.send(layout("Hello World from all of us"));
});

  app.listen(PORT, () => {
    console.log(`App listening in port ${PORT}`);
  });
