function bubbleSort(arr){
  let swapped;
  do{
    swapped = false
    for(let i = 0; i< arr.length - 1; i++){
      if(arr[i] > arr[i+1]){
        let temp = arr[i]
        arr[i] = arr[i +1]
        arr[i+1] = temp
        swapped = true
      }
    }
  }while(swapped)
  return arr
}

// console.log(bubbleSort([8,6,2,3,4]))

function insertionSort(arr){
  for(let i =1; i<arr.length;i++){
    let key = arr[i]
    let j = i - 1;
    while(j>=0 && arr[j] > key){
      a[j+1] = a[j]
      j = j -1
    }
    arr[j+1] = key
  }
}

function selectionSort(arr){
  for(let i = 0;i<arr.length - 1;i++){
    let minIndex = i
    for(let j = i+1;j<arr.length;j++){
      if(arr[j] < arr[minIndex]){
        minIndex = j
      }
    }
    if(minIndex !== i){
      [arr[i],arr[minIndex]] = [arr[minIndex],arr[i]]
    }
  }
}

function quickSort(arr){
  if (arr.length < 2) {
    return arr;
  }
  let pivot = Math.floor(arr.length - 1)
  let left = []
  let right = []
  for (let i = 0;i<arr.length - 1; i++){
    if(a[i] < pivot){
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }
  return [...quickSort(left),pivot,quickSort(right)]
}

function mergeSort(arr){
  if(arr.length < 2){
    return arr
  }
  let mid = Math.floor(arr.length/2)
  let leftArr = arr.slice(0, mid)
  let rightArr = arr.slice(mid)
  return merge(mergeSort(leftArr),mergeSort(rightArr))
}

function merge(leftArr, rightArr){
  let sortedArr = []
  while(leftArr.length && rightArr.length){
    if(leftArr[0]<= rightArr[0]){
      sortedArr.push(leftArr.shift())
    } else{
      sortedArr.push(rightArr.shift())
    }
  }
  return [...sortedArr,...leftArr,...rightArr]
}

class Stack {
  constructor(){
    this.items = []
  }

  push(element){
    this.items.push(element)
  }

  pop(){
    this.items.pop()
  }
}

const stack = new Stack()
stack.push(10)
stack.push(20)
stack.push(30)

class HashTable {
  constructor(size){
    this.table = new Array(size);
    this.size = size;
  }
  hash(key){
    let total = 0;
    for(let i = 0; i<key.length;i++){
      total += key.charCodeAt(i)
    }
    return total%this.size
  }
}