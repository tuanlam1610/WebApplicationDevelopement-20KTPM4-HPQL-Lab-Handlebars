const controller = {};
const {categories, products } = require('../models/data');


controller.showList = (req, res) =>{
    let category = req.query.category;
    let selectedProducts = category ? products.filter(item => item.category == category) : products;
    console.log(selectedProducts)
    res.locals.footer = 'Copyright &copy; 2022 by 20127677 - Ha Tuan Lam';
    res.render('task3', {title:'TV Sales', categories, products: selectedProducts});
}
module.exports = controller;