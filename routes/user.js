const express = require('express');
const router = express.Router();
const userList = require('../views/userList');


router.get('/', async (req, res, next) => {
  let data = null;
  try {
    const baseQuery = "SELECT users.* FROM users\n";

    data = await client.query(baseQuery);
    res.send(userList(data.rows));
  } catch (error) { next(error) };
});

router.get('/#id', (req, res, next) => {
  res.send('got to get /wiki');
});
// 
router.post('/', (req, res, next) => {
  res.send('got to get /wiki');
});

router.put('/#id', (req, res, next) => {
  res.send('got to get /wiki');
});

router.delete('/id', (req, res, next) => {
  res.send('got to get /wiki');
});

module.exports = router;
