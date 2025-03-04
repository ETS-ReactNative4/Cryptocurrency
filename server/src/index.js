import { GraphQLServer } from 'graphql-yoga'
import { Prisma } from 'prisma-binding'

import Query from './query'
import Mutation from './mutation'

const resolvers = {
  Query,
  Mutation
}

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
  context: req => ({
    ...req,
    db: new Prisma({
      typeDefs: 'src/generated/prisma.graphql',
      endpoint: 'http://localhost:4466/my-app/dev', // the endpoint of the Prisma DB service
      secret: 'mysecret123', // specified in database/prisma.yml
      debug: true // log all GraphQL queryies & mutations
    })
  })
})

server.start(() => console.log('Server is running on http://localhost:4000'))
