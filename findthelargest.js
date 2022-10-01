const findTheLargest = (numbersArray, nThLargest) => {
    // console.log(numbersArray, nThLargest)
    const sorted = numbersArray.sort((num1, num2) => {
         if(num1 > num2) return -1
        else return 1
    })
    console.log(sorted[nThLargest - 1])
}


findTheLargest([203, 201, 402, 4891, 20, -2, 3], 3)
findTheLargest([-2, 421, 51, -5, 0], 5)