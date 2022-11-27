const controller = {};

controller.showDefault = (req, res) =>{
    res.locals.footer = 'Copyright &copy; 2022 by 20127297 - Nguyen Ngoc Quang';
    res.render('task2', {title:'Jars Saving'});
}
module.exports = controller;