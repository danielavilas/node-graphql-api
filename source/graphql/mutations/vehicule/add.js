import {
  GraphQLNonNull
} from 'graphql'

import { vehiculeType, vehiculeInputType } from '../../types/vehicule'
import VehiculeModel from '../../../models/vehicule'

export default {
  type: vehiculeType,
  args: {
    data: {
      name: 'data',
      type: new GraphQLNonNull(vehiculeInputType)
    }
  },
  resolve(root, params) {
    const vehicule = new VehiculeModel(params.data)
    const newVehicule = vehicule.save()

    if (!newVehicule) throw new Error('Error adding vehicule')

    return newVehicule
  }
}
