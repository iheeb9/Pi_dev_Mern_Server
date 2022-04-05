const express = require("express");
const orders = require('../models/order');
var router = express.Router();

router.post("/api/order", async (req, res) => {
  
        const order = new orders({
         
            address: req.body.address,
            cartItems: req.body.cartItems,
            total: req.body.total,


        });
        const createdOrders = await order.save();
        res
            .send({ message: 'New Order Created', order: createdOrders });
    }
);
router.get('/', async function (req, res, next){
    const order = await orders.find();
    res.send(order);

});
router.get('/get', function (req, res, next) {
    orders.find(
        (error, orders) => {
            console.log(orders);
            console.log("yesss");

            res.json(" : orders :" + orders);


        }
    );

});
router.get("/api/orders", async (req, res) => {
    const order = await orders.find({});
    res.send(order);
});
router.delete("/api/orders/:id", async (req, res) => {
    const order = await orders.findByIdAndDelete(req.params.id);
    res.send(order);
  });
  

module.exports = router;
