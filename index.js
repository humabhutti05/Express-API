const express = require('express')
const app = express()
const cors = require('cors')
require('dotenv').config()


const CategoryRouter = require('./api/Category/router')
const AuthorsRouter = require('./api/Authors/router')
const QuotesRouter = require('./api/Quotes/router')
const ProductsRouter = require('./api/Products/router')


const port = process.env.SERVER_PORT || 3200

app.use(express.json())
app.use('/api', AuthorsRouter)
app.use('/api', CategoryRouter)
app.use('/api', QuotesRouter);
app.use('/api', ProductsRouter)



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})