const express = require('express') // method 
const morgan = require('morgan');
const app = express() // đối tượng nhận phương thức 
const port = 3000

app.use(morgan('combined'))

// routing : lộ trình đi 
app.get('/', (req, res) => {// sử dụng các phương thức của đối tượng / là đường dẫn khi vào trag đầu tiên 

   return res.send('hello word!'); 


})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})