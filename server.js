import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import graphqlHTTP from 'express-graphql'

import schema from './source/graphql'

import config from './source/config'
import UserController from './source/controllers/User'

const app = express()
const PORT = 8000

mongoose.connect(config.mongodb.uri, {
  useMongoClient: true
})

mongoose.connection
  .on('error', () => console.log('failed to connect to database'))
  .on('open', () => console.log('Connected to DB.'))


// GraphQL API endpoint
app.use('/graphql', graphqlHTTP(() => ({
  schema,
  graphiql: true,
  pretty: true
})))

app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send('Server is running!')
})

app.get('/user', UserController.getUser)

app.listen(PORT, () => console.log(`App listening on port ${PORT}!`))
