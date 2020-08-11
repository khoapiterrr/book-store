const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('admin/books/index');
});
router.get('/create', (req, res) => {
  res.render('admin/books/create');
});
module.exports = router;
