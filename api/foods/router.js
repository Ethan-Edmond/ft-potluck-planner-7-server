const router = require('express').Router();
const {
  validateFood,
  validateType
} = require('./middleware');

router.post('/', validateFood, validateType, (req, res, next) => {
  next({
    status: 404,
    message: 'Not implemented'
  });
});

module.exports = router;
