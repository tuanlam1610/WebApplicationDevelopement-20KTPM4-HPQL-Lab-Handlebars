const controller = {}
const { zodiacs } = require('../models/data')
const title = 'Zodiac Characteristics'

controller.showList = (req, res) => {
    res.locals.footer = 'Copyright &copy; 2022 by 20127594 - Nguyen Thien Phu'
    res.render('task4', {title, zodiacs})
}

controller.showDetails = (req, res) => {
    let name = req.params.name
    let selectedZodiacs = zodiacs.filter(item => item.name == name)
    res.render('task4-details', {title, selectedZodiacs})
}

module.exports = controller