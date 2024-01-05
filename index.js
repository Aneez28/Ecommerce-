require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000
const cors = require('cors')
const mongoose = require('mongoose');
const productroutes = require('./routes/productroutes')
const categoryroutes = require('./routes/categoryroutes')
const userroutes = require('./routes/userroutes')


app.use(cors({
  origin: ['https://touchworldtech.postman.co/'],
  credentials: true
}))
app.use(express.json())
app.use('/products', productroutes)
app.use('/categories', categoryroutes)
app.use('/user', userroutes)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

main()
.then(()=> console.log("DB Connected"))
.catch(err => console.log(err));

async function main() {
    const url = process.env.DB_URL
    const password = process.env.DB_PASSWORD
    const url_password = url.replace('<password>', password)  // creating variable for password included url
    
  await mongoose.connect(url_password);
}
