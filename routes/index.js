const express = require('express');
const controller = require('../controller/Cmain');
const router = express.Router();

// 기본주소: localhost:PORT

// GET / => localhost:PORT/
router.get('/', controller.main);
router.get('/getCustomers', controller.getCustomers);
router.get('/getOrderlists', controller.getOrderlists);
router.get('/getTotal', controller.getTotal);
router.get('/getSql', controller.getSql);

router.delete('/delete/customer', controller.deleteCustomer);

module.exports = router;
