const express = require('express');
const router = express.Router();
const User = require('../../models/users.model');

const cloudinary = require('../../services/cloudinaryService');
const upload = require('../../utils/multer');
const fs = require('fs');
const uploader = async (path) => await cloudinary.uploads(path, 'Avatar');

router.get('/', async (req, res) => {
  const data = await User.find();
  res.render('admin/users/index', {
    users: data,
  });
});

router.get('/create', async (req, res) => {
  res.render('admin/users/create');
});

router.get('/update/:id', async (req, res, next) => {
  try {
    const data = User.getById(req.params.id);
    res.render('admin/users/update', {
      data: data,
    });
  } catch (error) {
    next(error);
  }
});

router.post('/create', upload.single('avatar'), async (req, res, next) => {
  try {
    let url = '';
    if (req.file) {
      const { path } = req.file;
      url = await uploader(path);
      fs.unlinkSync(path);
    }
    req.body.isAdmin = req.body.isAdmin === 'on' ? true : false;
    await new User({
      ...req.body,
      avatar: url.url,
    }).save();

    res.redirect('/admin/users');
  } catch (error) {
    res.render('admin/users/update', {
      data: data,
      error: error,
    });
  }
});

module.exports = router;
