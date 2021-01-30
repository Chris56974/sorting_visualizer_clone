const { bubbleSort } = require('../algorithms/bubbleSort')
const { selectionSort } = require('../algorithms/selectionSort')

test('It sorts the array', () => {
  const unsorted = [7, 6, 1, 8, 10]
  const sorted =   [1, 6, 7, 8, 10]

  expect(bubbleSort(unsorted)).toEqual(sorted)
  expect(selectionSort(unsorted)).toEqual(sorted)

})