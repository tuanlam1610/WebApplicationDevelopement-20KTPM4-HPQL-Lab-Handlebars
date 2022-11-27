const controller = {};


controller.showDefault = (req, res) =>{
    res.locals.footer = 'Copyright &copy; 2022 by 20127677 - Ha Tuan Lam';
    res.render('task3', {title:'TV Sales'});
}
module.exports = controller;