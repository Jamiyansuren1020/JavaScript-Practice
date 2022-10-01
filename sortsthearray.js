const alphabets = [
    {letter: 'a', index: 1},
    {letter: 'm', index: 13},
    {letter: 'e', index: 5},
    {letter: 's', index: 19},
    {letter: 'z', index: 26},
    {letter: 't', index: 20},
    {letter: 'o', index: 15},
    {letter: 'h', index: 8},
]

const sortFunction = (arr) => {
    const sorted = arr.sort((obj1, obj2) => {
        //if(obj1.index < obj2.index)
        if(obj1.letter < obj2.letter) //hervee usgeer ni sortlovol
            return 1
        else return -1
        console.log('obj1', obj1)
        console.log('obj2', obj2)
        console.log('---')
    })
    console.log(sorted)
}
sortFunction(alphabets)