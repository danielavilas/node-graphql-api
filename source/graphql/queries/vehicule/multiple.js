import {
  GraphQLList
} from 'graphql'
import { vehiculeType } from '../../types/vehicule'
import VehiculeModel from '../../../models/vehicule'

export default {
  type: new GraphQLList(vehiculeType),
  resolve() {
    return VehiculeModel
      .find()
      .catch(() => {
        throw new Error('Error while fetching vehicules...')
      })
  }
}
