const express = require('express') // method là một frameword một sắn để làm theo 
const morgan = require('morgan');
const path = require('path'); 
const handlebars = require('express-handlebars');
const app = express(); // đối tượng nhận phương thức 
const routes = require('./resources/routes/index'); 

const port = 3000; 

// static file SET đường dẫn của file tĩnh 
app.use(express.static(path.join(__dirname, 'public'))); // đã vô đến đường dẫn của file tĩnh

// middleware 


app.use(express.json());
app.use(express.urlencoded({
  extended: true 
})); 




// HTTP logger
app.use(morgan('combined'));

// template engine
app.engine('hbs', handlebars.engine({
  extname: ".hbs"
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources\\views'))

routes(app); 


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})