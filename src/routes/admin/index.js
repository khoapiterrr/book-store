const express = require('express');
const router = express.Router();

const homeRoute = require('./home.route');
const booksRoute = require('./books.route');

router.get('/status', (req, res) => res.send('admin OK'));

router.use('/', homeRoute);
router.use('/books', booksRoute);

module.exports = router;
