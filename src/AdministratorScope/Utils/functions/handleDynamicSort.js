/**
 * Ordenar un arreglo de objetos según property
 * @param {string || number } property - propiedad de un objeto
 * @returns Array ordenado por propiedad
 */
export const handleDynamicSort = (property) => {
  let sortOrder = 1
  if (property[0] === '-') {
    sortOrder = -1
    property = property.substr(1)
  }
  return (a, b) => {
    const result =
      a[property] < b[property] ? -1 : a[property] > b[property] ? 1 : 0
    return result * sortOrder
  }
}
