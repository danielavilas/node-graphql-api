import {
  GraphQLList
} from 'graphql'
import { vehiculeType } from '../../types/vehicule'
import VehiculeModel from '../../../models/vehicule'
import { parseNodes } from '../../../helpers/GraphQL'

export default {
  type: new GraphQLList(vehiculeType),
  resolve(root, params, ast, options) {
    const fields = parseNodes(options.fieldNodes)

    return VehiculeModel
      .find()
      .select(fields)
      .catch(() => {
        throw new Error('Error while fetching vehicules...')
      })
  }
}
