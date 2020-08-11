const express = require('express');
const router = express.Router();
const usersRoute = require('./users.route');
const booksRoute = require('./books.route');
const transactionsRoute = require('./transactions.route');
const homeRoute = require('./home.route');

router.get('/status', (req, res) => res.send('OK'));

router.use('/', homeRoute);
router.use('/books', booksRoute);
// router.use('/transactions', transactionsRoute);

module.exports = router;
