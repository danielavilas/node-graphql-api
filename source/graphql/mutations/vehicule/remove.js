import {
  GraphQLNonNull,
  GraphQLID
} from 'graphql'

import { vehiculeType } from '../../types/vehicule'
import VehiculeModel from '../../../models/vehicule'

export default {
  type: vehiculeType,
  args: {
    id: {
      name: 'id',
      type: new GraphQLNonNull(GraphQLID)
    }
  },
  resolve(root, params) {
    const removedVehicule = VehiculeModel.findByIdAndRemove(params.id).exec()

    if (!removedVehicule) throw new Error('Error removing vehicule')

    return removedVehicule
  }
}
