import {
  GraphQLList
} from 'graphql'
import { vehiculeType } from '../../types/vehicule'
import VehiculeModel from '../../../models/vehicule'

export default {
  type: new GraphQLList(vehiculeType),
  resolve() {
    const vehicules = VehiculeModel.find().exec()

    if (!vehicules) throw new Error('Error while fetching vehicules...')

    return vehicules
  }
}
