import {
  GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLInt,
  GraphQLFloat,
  GraphQLID,
  GraphQLList
} from 'graphql'

import VehiculeModel from '../../models/vehicule'

export const vehiculeType = new GraphQLObjectType({
  name: 'Vehicle',
  description: 'Vehicle api',
  fields: () => ({
    _id: {
      type: new GraphQLNonNull(GraphQLID)
    },
    brand: {
      type: GraphQLString
    },
    model: {
      type: GraphQLString
    },
    licensePlate: {
      type: GraphQLString
    },
    color: {
      type: GraphQLString
    },
    amount: {
      type: GraphQLFloat
    }
  })
})

export const vehiculeInputType = new GraphQLInputObjectType({
  name: 'VehiculeInput',
  description: 'Inser Vehicule',
  fields: () => ({
    brand: {
      type: GraphQLString
    },
    model: {
      type: GraphQLString
    },
    licensePlate: {
      type: GraphQLString
    },
    color: {
      type: GraphQLString
    },
    amount: {
      type: GraphQLFloat
    }
  })
})