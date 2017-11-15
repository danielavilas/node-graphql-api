import {
  GraphQLNonNull,
  GraphQLID
} from 'graphql'

import { vehiculeType, vehiculeInputType } from '../../types/vehicule'
import VehiculeModel from '../../../models/vehicule'

export default {
  type: vehiculeType,
  args: {
    id: {
      name: 'ID',
      type: new GraphQLNonNull(GraphQLID)
    },
    data: {
      name: 'data',
      type: new GraphQLNonNull(vehiculeInputType)
    }
  },
  resolve(root, params) {
    return VehiculeModel
      .findByIdAndUpdate(params.id, {
        $set: { ...params.data }
      }, { new: true })
      .catch(() => {
        throw new Error('Couldn\'t update vehicule data')
      })
  }
}
