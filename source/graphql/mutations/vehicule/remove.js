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
    return VehiculeModel
      .findByIdAndRemove(params.id)
      .catch(() => {
        throw new Error('Error removing vehicule')
      })
  }
}
