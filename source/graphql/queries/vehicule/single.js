import {
  GraphQLID,
  GraphQLNonNull
} from 'graphql'
import { vehiculeType } from '../../types/vehicule'
import VehiculeModel from '../../../models/vehicule'

export default {
  type: vehiculeType,
  args: {
    id: {
      name: 'ID',
      type: new GraphQLNonNull(GraphQLID)
    }
  },
  resolve(root, params) {
    return VehiculeModel
      .findById(params.id)
      .catch(() => {
        throw new Error('Error while fetching vehicules...')
      })
  }
}
