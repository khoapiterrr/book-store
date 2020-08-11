module.exports.getHomePage = (req, res, next) => {
  res.render('home/index');
};

module.exports.getAboutPage = (req, res, next) => {
  res.render('home/about');
};

module.exports.getFaqPage = (req, res, next) => {
  res.render('home/faq');
};
