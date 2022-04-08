const express = require('express');
const controller = require('../../controllers/customer.controller');

const router = express.Router();

router.route('/').get(controller.getAll);

module.exports = router;
