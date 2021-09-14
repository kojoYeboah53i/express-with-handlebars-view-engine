const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const exphbs = require('express-handlebars');

const port = process.env.PORT || 4000;

// body parser 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.use(cors());


// handlebars config
app.set("view engine", "hbs")
app.engine('hbs', exphbs({
    extname: 'hbs',
    defaultLayout: 'index',
    layoutsDir: __dirname + '/views/layouts/',
    partialsDir: __dirname + '/views/partials/'
}));



// app.use(express.static(__dirname + '/public'));

    const user = {
        name : 'John',
        age : '25',
        job: 'dev'
    }
    const license = {
        name: 'kojo',
        age : 27,
        location: 'Accra'
    }
// Landing page
app.get('/', (req, res) => {

    // res.send('handle bars view engine begins')
    res.render('main',{
        title: 'Hanblebars',
        user,
        license 
    })
    // res.sendFile(__dirname + '/public/index.html');

})

// start server
app.listen(port, () => {
      console.log(`Server listening on port ${port}`);
    //   console.log(user)
});