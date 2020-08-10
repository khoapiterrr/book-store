const express = require('express');
require('dotenv').config();
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const routes = require('./routes');

const app = new express();
const PORT = process.env.PORT || 3000;

app.use(express.static(process.cwd() + '/public'));
app.use(express.json());
app.use(cookieParser('5e6321798aa9b35da5795325'));
app.use(bodyParser.json());
app.use('/', routes);

app.set('view engine', 'pug');
app.set('views', __dirname + '/views');
//set secret cookies

// listen for requests :)
app.listen(PORT, () => {
  console.log('Server listening on port ' + PORT);
});
