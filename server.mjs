'use strict'

import express from 'express'
import bodyParser from 'body-parser'

const app = express()
const PORT = 8000

app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send('Server is running!')
})

app.listen(PORT, () => console.log(`App listening on port ${PORT}!`))
