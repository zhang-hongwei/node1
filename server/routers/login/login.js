const Express = require('express');
const { resMsg } = require('../../utils');

const router = Express.Router();

router.use(function(req, res, next) {
  console.log(123);

  next();
});

router.post('/login', function(req, res) {
  res.cookie('_mock_user_', 1, { maxAge: 60 * 1000 });
  // const { userName, password } = req.body;

  // console.log(userName, password);
  res.send(resMsg(1));
});

module.exports = router;
