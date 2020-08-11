const express = require('express');
const router = express.Router();

const homeRoute = require('./home.route');
const booksRoute = require('./books.route');

router.get('/', homeRoute);
router.get('/books', booksRoute);

module.exports = router;
