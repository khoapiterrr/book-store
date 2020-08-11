const express = require('express');
const router = express.Router();
const controller = require('../controllers/home.controller');

router.get('/', controller.getHomePage);
router.get('/about.html', controller.getAboutPage);
router.get('/faq.html', controller.getFaqPage);

module.exports = router;
