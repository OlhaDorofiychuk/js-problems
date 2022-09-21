// OPTION 2
const numbers = [2, 5, 3, 444, 6, 8, 13, 9]
let biggestNumber
let smallestNumber
numbers.forEach(number => {
    if (biggestNumber  === undefined || number > biggestNumber) {
        biggestNumber = number
    }
    if (smallestNumber === undefined || number < smallestNumber) {
        smallestNumber = number
    }
}
)

console.log(biggestNumber)
console.log(smallestNumber)
console.log(biggestNumber - smallestNumber)

// OPTION 1
numbers.sort(function(a,b) {
    return a - b
})
let smallestNumber = numbers[0]
let biggestNumber = numbers[numbers.length - 1]
const diffenceBetweenBiggestAndSmallest = biggestNumber - smallestNumber
console.log(diffenceBetweenBiggestAndSmallest)