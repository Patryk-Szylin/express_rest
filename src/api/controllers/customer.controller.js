const httpStatus = require('http-status');
const subscriptionsService = require('../services/subscriptionsProviders');

exports.getAll = async (req, res, next) => {
  try {
    const { list } = await subscriptionsService.chargebee.getAllCustomers();
    res.status(httpStatus.OK);
    return res.json(list);
  } catch (error) {
    // Log the error to our log tracking service along with stack trace
    // Probs also store correlation id and the payload associated with this request
    console.log('handling error.');
    return next(error);
  }
};
