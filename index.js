const express = require('express')
const app = express()
const port = 3000
const cors = require('cors')
const productroutes = require('./routes/productroutes')
const categoryroutes = require('./routes/categoryroutes')


app.use(cors())
app.use(express.json())
app.use('/products', productroutes)
app.use('/categories', categoryroutes)



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})