const display = document.getElementById('result')
const numb = document.getElementsByClassName('number')
const ope = document.getElementsByClassName('operator')
const equal = document.getElementById("equal")

 let num1=null
 let num2=null
 let op= null
//  display.innerHTML= num1

 const calculate = () => {
    if(op==="+") {
        (num1) += (num2)
        display.innerHTML=num1
    }else if(op==="-") {
        (num1) -= (num2)
        display.innerHTML=num1
    }else if(op==="*") {
        (num1) *= (num2)
        display.innerHTML=num1
    }else if(op==="%") {
        (num1) /= (num2)
        display.innerHTML=num1
    }
    num2 = null
    op = null

}

    for(let i = 0; i < numb.length; i++) {
        numb[i].addEventListener('click', (event)=>{
            
            if(display.innerHTML === "0")display.innerHTML= event.target.innerHTML;
            else if(op && num2) {
                display.innerHTML += event.target.innerHTML;
                num2= parseFloat(display.innerHTML);
            }else if(op) {
                display.innerHTML = event.target.innerHTML;
                num2= parseFloat(display.innerHTML);
            }else{
                display.innerHTML += (event.target.innerHTML)
            }
        })
    }
    for(let i=0; i< ope.length; i++) {
        ope[i].addEventListener('click', (event)=>{
        // display.innerHTML =(event.target.innerHTML)
        
        if(num2) {
            calculate()
            op = event.target.innerHTML
            num2 = 0
        }else{
            num1=parseFloat(display.innerHTML)
        
            op = event.target.innerHTML
            console.log(num1, op)
        }
        
        // if(op==="+") {
        //     display.innerHTML = num1+num2
        // }
        if(event.target.innerHTML === "CE") {
            display.innerHTML=''
            num1 = null
            num2 = null
            op = null
        }
        })
    }
    
equal.addEventListener("click", (event) => {
calculate()
})
