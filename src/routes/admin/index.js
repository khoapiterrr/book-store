const express = require('express');
const router = express.Router();

const homeRoute = require('./home.route');
const booksRoute = require('./books.route');
const usersRoute = require('./users.route');

router.get('/status', (req, res) => res.send('admin OK'));

router.use('/', homeRoute);
router.use('/books', booksRoute);
router.use('/users', usersRoute);

module.exports = router;
