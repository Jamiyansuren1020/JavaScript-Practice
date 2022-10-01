function fibSequence (n) {
    if(n<=2)
    return(n-1)
    return fibSequence(n-2)+ fibSequence(n-1)
}



console.log(fibSequence(10))
