const express = require('express');
const app = express();

const expressHbs = require('express-handlebars');

app.engine('hbs', expressHbs.engine({
    layoutsDir: __dirname + '/views/layouts',
    partialsDir: __dirname + '/views/partials',
    defaultLayout: 'layout',
    extname: 'hbs'
}));

app.set('view engine', 'hbs');

app.use(express.static(__dirname + '/Handlebars-StaticFiles'));


app.get('/', (req, res) =>{
    //res.sendFile(__dirname + '/Handlebars-StaticFiles/index.html');
    res.locals.footer = 'Copyright &copy 2022 by 03';
    res.render('index', {title:'Jeopardize Contest'});
}) 

app.get('/task1', (req, res) =>{
    let { emotions} = require('./models/data');
    
   
    let title =  req.query.title; //return item where item title == title
   //console.log(title);
    let selectedEquotions = emotions.filter(item => item.title == title);
    let quotePath = selectedEquotions.length ? selectedEquotions[0].quotePath : 'images/task1/default.jpg'; 
    
    //res.sendFile(__dirname + '/Handlebars-StaticFiles/index.html');
    //res.locals.title = 'Inspiring Quotes';
    res.locals.emotions = emotions;
    res.locals.quotePath = quotePath;
    res.locals.footer = 'Copyright &copy; 2022 by 20127040 - Truong Gia Huy';
    res.render('task1', {title:'Inspiring Quotes'}/*, {footer:' }*/);
})


/*app.get('/task1/:title', (req, res) => {
    let { emotions} = require('./models/data');
    
   
    let title =  req.params.title; //return item where item title == title
   //console.log(title);
    let selectedEquotions = emotions.filter(item => item.title == title);
    let quotePath = selectedEquotions.length ? selectedEquotions[0].quotePath : 'images/task1/default.jpg'; 
    res.render('task1a', {title, emotions, quotePath});
})*/


app.get('/task2', (req, res) =>{
    res.locals.footer = 'Copyright &copy; 2022 by 20127297 - Nguyen Ngoc Quang';
    res.render('task2', {title:'Jars Saving'}/*, {footer: }*/);
})

app.get('/task3', (req, res) =>{
    res.locals.footer = 'Copyright &copy; 2022 by 20127677 - Ha Tuan Lam';
    res.render('task3', {title:'TV Sales'}/*, {footer: }*/);
})

app.get('/task4', (req, res) =>{
    res.locals.footer = 'Copyright &copy; 2022 by 20127594 - Nguyen Thien Phu';
    res.render('task4', {title:'Zodiac Characteristics'}, /*{footer: }*/);
})

app.get('/task4-details', (req, res) =>{
    res.render('task4-details');
})

  


app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), () =>{
    console.log(`Server is running on port ${app.get('port')}`);
})