# Sorting Algorithm Visualizer

This project is a clone of [Clement Mihailescu's Sorting Visualizer](https://github.com/clementmihailescu/Sorting-Visualizer).

My implementation uses the CanvasAPI for animations, CSS Grid for responsiveness, Jest for algorithms, and [Webpack](https://github.com/Chris56974/Webpack5-TS-Template) for bundling my application.

## Takeaways

### Javascript array.sort() method

The time & space complexity of sort() depends on which browser you're using.

- Mozilla/Firefox uses MergeSort:
  - Time  -> O(n log n)
  - Space -> O(n)

- Chrome uses QuickSort:
  - Time  -> O(n log n) :: (worst case of O(n^2))
  - Space -> O(n log n)

If you don't provide any arguments to the array.sort() method, it will convert each array-item into its string equivalent and then make comparisons using its UTF-16 value. Providing two arguments (the first element and the second element of the array) will cause the array.sort() method to sort using the return value of each comparison. If it's below 0, a will be sorted before b. If it's above 0, a will be sorted after b.

### Bubble Sort

It compares the first two items in the array and pushes the bigger one ahead of the smaller one. It then repeats the process with the next item in the array, and so on... The problem is, one loop will only push the biggest item to the end of the array and two loops will only push the two biggest items to the end. Therefore, you need n loops to make sure every item is properly sorted which is why this algorithm has a time complexity of O(n^2).

### Selection Sort

It loops through the entire array and places the smallest item to the beginning of the array, it then loops again until the array is sorted. Since this algorithm also requires n loops, it also have a time complexity of O(n^2)


#### Sources

[Why bubble sort needs two loops?](https://stackoverflow.com/questions/12259622)
