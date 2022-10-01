function largest(num1, num2, num3) {
    if (typeof num1 === 'string' || typeof num2 === 'string' || typeof num3 === 'string') {
        console.log("not everything is number type")
        return
    }
    if (num1 > num2 && num1 > num3) {
        console.log(`${num1} is the largest number among ${num1}, ${num2} and ${num3}`)
    } else if (num3 > num2 && num1 < num3) {
        console.log(`${num3} is the largest number among ${num1}, ${num2} and ${num3}`)
    } else if (num1 < num2 && num2 > num3) {
        console.log(`${num2} is the largest number among ${num1}, ${num2} and ${num3}`)
    } else {
        console.log(`none`)
    }
}

largest(10, 20, 0)
