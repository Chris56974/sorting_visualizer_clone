export const randomizeArray = (array: number[], lowerBound: number = 1, upperBound: number = 50) => {
  array = [] // empty it
  for (let i = lowerBound; i <= upperBound; i++) array.push(i); // [1, 2, 3, 4, ...]

  // Omitting (a, b) will convert items into strings (no bueno)
  const randomArray = array.sort((a, b) => Math.random() > 0.5 ? 1 : -1)

  console.log(randomArray)
  return randomArray
}