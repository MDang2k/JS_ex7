const btnAddNum = document.querySelector("#btnAddNum"),
    txtArray = document.querySelector("#txtArray"),
    iptNumber = document.querySelector("#iptNumber")

// let array = [3, 2, 1, 6, -2, -6, -1, -6]
let array = []

btnAddNum.addEventListener("click", () => {
    array.push(iptNumber.value * 1);
    txtArray.innerHTML = array
})

// bài 1 

const btnSumPositive = document.querySelector("#btnSumPositive"),
    txtSumPositive = document.querySelector("#txtSumPositive")

btnSumPositive.addEventListener("click", () => {
    let sum = 0
    for (let i = 0; i < array.length; i++) {
        if (array[i] > 0) sum += array[i]
    }

    txtSumPositive.innerHTML = sum
})

// bài 2

const btnCountPositive = document.querySelector("#btnCountPositive"),
    txtCountPositive = document.querySelector("#txtCountPositive")

btnCountPositive.addEventListener("click", () => {
    let count = 0
    for (let i = 0; i < array.length; i++) {
        if (array[i] > 0) count++
    }

    txtCountPositive.innerHTML = count
})

// bài 3

const btnMin = document.querySelector("#btnMin"),
    txtMin = document.querySelector("#txtMin")

function findMin(arr) {
    let min = arr[0]
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) min = arr[i]
    }

    return min
}

btnMin.addEventListener("click", () => {

    txtMin.innerHTML = findMin(array)
})

// bài 4

const btnMinPositive = document.querySelector("#btnMinPositive"),
    txtMinPositive = document.querySelector("#txtMinPositive")

function findPosNum(arr) {
    let posArr = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) posArr.push(arr[i])
    }

    if (posArr.length == 0)
        return -1
    else
        return posArr
}

function findNegNum(arr) {
    let negArr = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) negArr.push(arr[i])
    }

    if (negArr.length == 0)
        return -1
    else
        return negArr
}

btnMinPositive.addEventListener("click", () => {
    if (findPosNum(array) == -1)
        txtMinPositive.innerHTML = `There is no positive numbers`
    else txtMinPositive.innerHTML = findMin(findPosNum(array))

    console.log(findMin(findPosNum(array)))
})

// bài 5

const btnLastEvenNumber = document.querySelector("#btnLastEvenNumber"),
    txtLastEvenNumber = document.querySelector("#txtLastEvenNumber")

function lastEven(arr) {
    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] % 2 == 0) return arr[i]
    }
    return -1
}


btnLastEvenNumber.addEventListener("click", () => {

    if (lastEven(findPosNum(array)) == -1) txtLastEvenNumber.innerHTML = `There is no even number`
    else
        txtLastEvenNumber.innerHTML = lastEven(findPosNum(array))

    console.log(findPosNum(array))
})

//bài 6

const btnSwapPosition = document.querySelector("#btnSwapPosition"),
    txtSwapPosition = document.querySelector("#txtSwapPosition"),
    firstPos = document.querySelector("#firstPos"),
    secondPos = document.querySelector("#secondPos")

function swapPos(first, second, arr) {
    var newArr = [...arr]
    var temp

    temp = newArr[first]
    newArr[first] = newArr[second]
    newArr[second] = temp

    return newArr
}

btnSwapPosition.addEventListener("click", () => {

    txtSwapPosition.innerHTML = swapPos(firstPos.value * 1, secondPos.value * 1, array)

})

//bài 7

const btnAscSort = document.querySelector("#btnAscSort"),
    txtAscSort = document.querySelector("#txtAscSort")

btnAscSort.addEventListener("click", () => {

    var newArr = [...array]

    for (var i = 0; i < array.length - 1; i++) {
        for (var j = 0; j < array.length - i - 1; j++) {
            if (newArr[j] > newArr[j + 1]) {
                newArr = swapPos(j, j + 1, newArr)
            }
        }
    }

    txtAscSort.innerHTML = newArr
})

// bài 8 

const btnFirstPrimeNum = document.querySelector("#btnFirstPrimeNum"),
    txtFirstPrimeNum = document.querySelector("#txtFirstPrimeNum")

function isPrime(num) {
    if (num <= 1) return false
    else {
        for (let i = 2; i <= Math.ceil(Math.sqrt(num)); i++) {
            if (num % i == 0) return false
            else return true
        }
    }
}

btnFirstPrimeNum.addEventListener("click", () => {
    var firstPrime;

    for (let i = 0; i < array.length; i++) {
        if (isPrime(array[i])) {
            firstPrime = (array[i])
            break;
        }
    }

    if (firstPrime)
        txtFirstPrimeNum.innerHTML = firstPrime
    else
        txtFirstPrimeNum.innerHTML = `There is no prime number`
})

// bài 9

const btnCountPrime = document.querySelector("#btnCountPrime"),
    txtCountPrime = document.querySelector("#txtCountPrime")

btnCountPrime.addEventListener("click", () => {

    var count = 0

    for (var i = 0; i < array.length - 1; i++) {
        if (isPrime(array[i])) count++
    }

    txtCountPrime.innerHTML = count
})

//bài 10

const btnCompare = document.querySelector("#btnCompare"),
    txtCompare = document.querySelector("#txtCompare")

btnCompare.addEventListener("click", () => {

    if (findPosNum(array).length < findNegNum(array).length)

        txtCompare.innerHTML = `positive numbers < negative numbers`

    else if (findPosNum(array).length == findNegNum(array).length)
        txtCompare.innerHTML = `positive numbers = negative numbers`
    else
        txtCompare.innerHTML = `positive numbers > negative numbers`

})