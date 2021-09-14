const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const exphbs = require('express-handlebars');


app.use(cors());

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



const port = process.env.PORT || 6000;



// Landing page
app.get('/', (req, res) => {

    res.send('handle bars view engine begins')
    // res.sendFile(__dirname + '/public/index.html');

})












app.listen(port, () => {
      console.log(`Server listening on port ${port}`);
});