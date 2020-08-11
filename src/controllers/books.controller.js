module.exports.getBooks = (req, res) => {
  // let page = req.query.page ? req.query.page : 1;
  // const pageSize = parseInt(process.env.PAGE_SIZE);
  // const data = db
  //   .get('books')
  //   .drop((page - 1) * pageSize)
  //   .take(pageSize)
  //   .value();
  // res.render('books/index', {
  //   books: data.map((e) => {
  //     return {
  //       id: e.id,
  //       name: e.name.length > 10 ? e.name.slice(0, 10) + '...' : e.name,
  //       desc: e.desc.length > 20 ? e.desc.slice(0, 20) + '...' : e.desc,
  //       image: e.image,
  //     };
  //   }),
  // });
};
