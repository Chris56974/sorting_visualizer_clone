# Sorting Algorithm Visualizer

This project is a clone of [Clement Mihailescu's Sorting Visualizer](https://github.com/clementmihailescu/Sorting-Visualizer).

My implementation uses the CanvasAPI and CSS Grid, all bundled together with my [Webpack5 Template](https://github.com/Chris56974/Webpack5-TS-Template).

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
