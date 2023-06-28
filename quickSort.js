function quickSort(arr) {
  if (arr.length < 2) {
    return arr;
  }
  let pivot = arr[arr.length - 1];
  let right = [];
  let left = [];
  for (let i = 0; i < arr.length - 1; i++) {
    // Exclude the pivot element
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return [...quickSort(left), pivot, ...quickSort(right)];
}

console.log(quickSort([1, 8, 6, 4, 7, 3, 5, 9, 6, 4]));