const valueOfarray = [29, null, 'test', 'value', '', NaN, 75, undefined, false]
const correctarray = valueOfarray.filter((object) => {
    if(object)
        return(object)
})
console.log(correctarray)



const matchValueFunction = (matchString) => {
    const matchValue = ['hey', 'hi', 'test', 'testing']
    const differentStringArray = matchValue.filter((string) => {
        if(string !== matchString)
        return(string)
    }) 
    console.log(differentStringArray)
}

matchValueFunction('test')