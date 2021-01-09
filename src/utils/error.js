const STATUS_BAD_REQUEST = 400;
const STATUS_INTERNAL_SERVER_ERROR = 500;

const makeErrorOperational = (err, status = STATUS_BAD_REQUEST) => {
  err.status = status;
  err.operational = true;
  return err;
};

const asyncErrorDecorator = func => (req, res, next) => {
  func(req, res, next)
    .catch(err => next(makeErrorOperational(err)));
};

module.exports = {
  STATUS_BAD_REQUEST,
  STATUS_INTERNAL_SERVER_ERROR,
  makeErrorOperational,
  asyncErrorDecorator,
}