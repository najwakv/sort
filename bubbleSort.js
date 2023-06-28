function bubbleSort(arr) {
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i]
        arr[i] = arr[i+1]
        arr[i+1] = temp
        swapped = true;
      }
    }
  } while (swapped);
  return arr;
}

const arr = [7, 6, 9, 1, 5, 8, 3, 2];
// console.log(bubbleSort(arr));

//SORT-MIDDLE 5 ELEMENTS

function sortMiddle(arr){
    let middleIndex = Math.floor(arr.length/2)
    let rightIndex = middleIndex +2
    let leftIndex = middleIndex-2
    let swapped;
    do{
        swapped = false
        for(let i = leftIndex ; i<rightIndex; i++){
            if(arr[i] > arr[i+1]){
                let temp = arr[i]
                arr[i] = arr[i+1]
                arr[i+1] = temp
                swapped = true
            }
        }
    } while (swapped)
    return arr
}

console.log(sortMiddle(arr))