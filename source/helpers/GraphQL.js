import { isArray, isObject, head, compact } from 'lodash'

/**
 * Parse GraphQL field nodes to array.
 * @param {array} fieldNodes The GraphQL field nodes.
 * @returns {array} The array of fields ['field1', 'field2', ...]
 */
export function parseNodes(fieldNodes) {
  const node = head(fieldNodes)

  if (!isObject(node)) return []
  if (!isObject(node.selectionSet)) return []
  if (!isArray(node.selectionSet.selections)) return []

  const mapped = node
    .selectionSet
    .selections
    .map(n => {
      try {
        return n.name.value
      } catch (e) {
        return null
      }
    })

  return compact(mapped)
}
