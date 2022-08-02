const express = require('express') // method 
const morgan = require('morgan');
const path = require('path'); 
const handlebars = require('express-handlebars');
const app = express(); // đối tượng nhận phương thức 

const port = 3000; 

// static file
app.use(express.static(path.join(__dirname, 'public'))); // đã vô đến đường dẫn của file tĩnh
console.log(path.join(__dirname, 'public')); 



// HTTP logger
app.use(morgan('combined'));

// template engine
app.engine('hbs', handlebars.engine({
  extname: ".hbs"
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources\\views'))


// routing : lộ trình đi 
app.get('/', (req, res) => {// sử dụng các phương thức của đối tượng / là đường dẫn khi vào trag đầu tiên 

   res.render('home');  

})
app.get('/news', (req, res) => {// sử dụng các phương thức của đối tượng / là đường dẫn khi vào trag đầu tiên 

  res.render('news');  

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})