 SumMultiple
 const sumMultiple = (n) => {
     let sum = 0
     if (n < 0) {
     console.log("invalid imput")
     }
    
     for (let i = 1; i<n; i++ ) {
         if (i%4 === 0 || i%5=== 0)
         sum = sum + i

     }
     console.log(sum)
 }
 sumMultiple(11)