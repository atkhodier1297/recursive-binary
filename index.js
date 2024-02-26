function recursiveBinarySearch(arr, tar) {
    return search(arr, tar, 0, arr.length -1)
}

function search(arr, target, leftIndex, rightIndex){
    if(leftIndex > rightIndex){
        return -1
    }

    let middleIndex = Math.floor((leftIndex + rightIndex) / 2)
    if (target === arr[middleIndex]){
        return middleIndex
    }
    if(target < arr[middleIndex]){
        return search(arr, target, leftIndex, middleIndex -1)
    } else {
        return search(arr, target, middleIndex + 1, rightIndex)
    }
}

console.log(recursiveBinarySearch([-5,0,5,15,20], 15))
console.log(recursiveBinarySearch([6,12,18,24,32], 12))
console.log(recursiveBinarySearch([10,20,30,40,50], 100))

// BigO === O(logn)