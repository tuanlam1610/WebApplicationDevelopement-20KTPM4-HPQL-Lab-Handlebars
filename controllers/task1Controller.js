const controller = {};
const { emotions } = require('../models/data');
const Title =  'Inspiring Quotes'; //return item where item title == title

controller.showDefault = (req, res) =>{
    let title = req.query.title;
     //console.log(title);
    let selectedEquotions = emotions.filter(item => item.title == title);
    let quotePath = selectedEquotions.length ? selectedEquotions[0].quotePath : 'images/task1/default.jpg'; 
    
    //res.sendFile(__dirname + '/Handlebars-StaticFiles/index.html');
    
    res.locals.title = title;
    res.locals.emotions = emotions;
    res.locals.quotePath = quotePath;
    res.locals.footer = 'Copyright &copy; 2022 by 20127040 - Truong Gia Huy';
    res.render('task1', {Title, emotions, quotePath});
}
module.exports = controller;