const models = require('../models');

exports.main = (req, res) => {
  res.render('index');
};

exports.getCustomers = (req, res) => {
  models.Customer.findAll().then((result) => {
    console.log(result);
    res.render('customer', { customers: result });
  });
};

exports.getOrderlists = (req, res) => {
  models.Orderlist.findAll().then((result) => {
    console.log(result);
    res.render('orderlist', { orderlists: result });
  });
};

exports.deleteCustomer = (req, res) => {
  // /getCustomers 경로에서 특정 유저 삭제 후,
  // /getOrderlists 접속시 연관된 상품 정보 삭제 됨
  models.Customer.destroy({
    where: {
      user_id: req.body.userid,
    },
  }).then(() => {
    res.send(
      `${req.body.userid} 유저 삭제 성공! 전체 주문 목록 페이지로 이동하여 해당 유저에 대한 주문 목록이 삭제됐는지 확인해보세요!!`
    );
  });
};
