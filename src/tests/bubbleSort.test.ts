const { bubbleSort: bubble } = require('../algorithms/bubbleSort')

test('It sorts the array', () => {
  const unsorted = [7, 6, 1, 8, 10]
  const sorted =   [1, 6, 7, 8, 10]

  expect(bubble(unsorted)).toEqual(sorted)
})