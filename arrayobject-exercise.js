const programming = {}
programming.language = ["Javascript", "java"]
programming.difficulty = 9
programming.usage = "Web"
programming.isRewarding = true
delete programming.isRewarding
programming.isFun = true
programming.language.push("python")
programming.difficulty = 8
console.log(programming)

//for(let i=0; i < programming.language.length; i++) {
    //console.log(programming.language[i])
//}

//let index = 0
//while(index < programming.language.length) {
    //console.log(programming.language[index])
    //index++
//}
//programming.language.map(language => {
    //console.log(language)
//})
programming.language.forEach(language => {
    console.log(language)
})