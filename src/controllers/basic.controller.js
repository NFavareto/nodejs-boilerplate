exports.hello =  function hello(req, res, next) {
  try {
    res.render('basic-view')
  } catch (err) {
    next(err)
  }
}
