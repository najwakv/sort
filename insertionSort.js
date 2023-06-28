function insertionSort(arr){
    for(let i =1; i< arr.length; i++){
        let key = arr[i]
        let j = i - 1
        while(j>=0 && arr[j] > key){
            arr[j+1] = arr[j]
            j = j - 1
        }
        arr[j + 1] = key
    }
    return arr
}
const arr = [1,8,6,4,7,3,5,9,6,4]
console.log(insertionSort(arr))