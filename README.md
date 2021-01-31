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

It compares the first two items in the array and pushes the bigger one ahead of the smaller one. It then repeats the process with the next item in the array, and so on... The problem is, one loop will only guarantee the biggest item is at the end of the array. Two loops will have the two biggest items to the end, and so on. Therefore, you need n loops to make sure every subsequent item is properly sorted which is why this algorithm has a time complexity of O(n^2). It's space complexity is O(1) because the algorithm requires a temporary variable to be saved in memory. You can get O(n) time complexity if the array is already sorted, but I didn't program for this (maybe later). The idea here is, if the bubble sort doesn't bubble anything up, then you don't have to loop through it again.

### Selection Sort

It loops through the entire array and places the smallest item at the beginning, it repeats this process until the array is sorted. This algorithm also requires n loops, and it also requires a temporary variable giving it the same space & time complexity as bubble sort.

### Insertion Sort

It picks an item, and then places it where it belongs relative to the items it's already sorted. This algorithm also requires two loops, because once it picks an item it has to loop through all the items it's already been through. The time complexity is O(n^2) but if the array is already almost sorted you can get something like O(n).

#### Sources

[Why bubble sort needs two loops?](https://stackoverflow.com/questions/12259622)
