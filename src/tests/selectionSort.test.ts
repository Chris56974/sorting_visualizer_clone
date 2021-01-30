const { selectionSort: select } = require('../algorithms/selectionSort')

test('It finds the smallest number', () => {
  const array = [66, 1, 9, 999, 1, 0]
  const smallest = 0

  expect(select(array)).toBe(smallest)
})