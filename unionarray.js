const findUnion = (arr1, arr2) => {
    //console.log(arr1, arr2)
    const union = []
    arr1.forEach((num) => {
        if(!union.includes (num))
            union.push(num)
    })
    arr2.forEach((num) => {
        if(!union.includes(num))
        union.push(num)
    })
    return union
};
    console.log(findUnion([1,2,3,1], [2,1,4,2]))