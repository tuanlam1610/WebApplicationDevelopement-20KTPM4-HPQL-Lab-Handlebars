const controller = {};

// Show from method GET
controller.showDefault = (req, res) =>{
    let salary = parseFloat(req.query.salary) | 0;
    let jar55 = (salary * 0.55).toFixed(2);
    let jar5 = (salary * 0.05).toFixed(2);
    let jar10 = (salary * 0.1).toFixed(2);
    res.locals.footer = 'Copyright &copy; 2022 by 20127297 - Nguyen Ngoc Quang';
    res.render('task2', {title:'Jars Saving', jar55, jar10, jar5});
}

// // Show from method POST
controller.showPost = (req, res) =>{
    let salary = parseFloat(req.body.salary) | 0;
    let jar55 = (salary * 0.55).toFixed(2);
    let jar5 = (salary * 0.05).toFixed(2);
    let jar10 = (salary * 0.1).toFixed(2);
    res.locals.footer = 'Copyright &copy; 2022 by 20127297 - Nguyen Ngoc Quang';
    res.render('task2', {title:'Jars Saving', jar55, jar10, jar5});
}

module.exports = controller;