const express = require('express');
const router = express.Router();
const Books = require('../../models/books.model');

const cloudinary = require('../../services/cloudinaryService');
const upload = require('../../utils/multer');
const fs = require('fs');
const uploader = async (path) => await cloudinary.uploads(path, 'Books');

router.get('/', async (req, res) => {
  const data = await Books.find();
  res.render('admin/books/index', {
    books: data,
  });
});

router.get('/create', (req, res) => {
  res.render('admin/books/create');
});

router.post('/create', upload.array('photos'), async (req, res, next) => {
  try {
    const urls = [];
    const files = req.files;
    for (const file of files) {
      const { path } = file;
      const newPath = await uploader(path);
      urls.push(newPath);
      fs.unlinkSync(path);
    }
    const newData = Books({
      name: req.body.name,
      description: req.body.description,
      author: req.body.author,
      price: req.body.price,
      sale: req.body.sale === 'on' ? true : false,
      hidden: req.body.hidden === 'on' ? true : false,
      photos: urls.map((x) => x.url),
    });

    newData.save();
    res.redirect('/admin/books');
  } catch (error) {
    next(error);
  }
});
module.exports = router;
