const { Router } = require('express');
const controllers = require('../controllers');
const router = Router();

router.get('/', (req, res) => res.send('This is root!'));

router.post('/users', controllers.createUser);

router.put('/users/:id', controllers.updateUser);

router.delete('/users/:id', controllers.deleteUser);

router.get('/users/watchlist', (req, res) =>
  res.send('This is the User Watch List!')
);

module.exports = router;
