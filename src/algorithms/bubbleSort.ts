export const bubbleSort = (array: number[]) => {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[j] > array[j + 1]) { // if the next item is bigger than the current item...
        let tmp = array[j];          // save the current item as a temporary variable
        array[j] = array[j + 1];     // set the current item equal to the next item
        array[j + 1] = tmp;          // set the next item equal to the current item
      }
    }
  }
  return array;
};
