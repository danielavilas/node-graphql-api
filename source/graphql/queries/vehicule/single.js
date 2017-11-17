import {
  GraphQLID,
  GraphQLNonNull
} from 'graphql'
import { vehiculeType } from '../../types/vehicule'
import VehiculeModel from '../../../models/vehicule'
import { parseNodes } from '../../../helpers/GraphQL'

export default {
  type: vehiculeType,
  args: {
    id: {
      name: 'ID',
      type: new GraphQLNonNull(GraphQLID)
    }
  },
  resolve(root, params, ast, options) {
    const fields = parseNodes(options.fieldNodes)

    return VehiculeModel
      .findById(params.id)
      .select(fields)
      .catch(() => {
        throw new Error('Error while fetching vehicules...')
      })
  }
}
