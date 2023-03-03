var displayScreen = document.getElementById('displayScreen');
let displayValue = displayScreen.innerHTML

var button = document.getElementsByTagName('button')

Array.from(button).forEach((b) => {
    b.addEventListener('click', (e)=> {
        if (e.target.innerHTML === '=') {
            displayValue = eval(displayValue)
        }
        else if(e.target.innerHTML === "AC"){
            displayValue = ''
        }
        else if(e.target.innerHTML === "CLR"){
            displayValue = displayValue.slice(0,-1)
        }
        else if(e.target.innerHTML === "%"){
            displayValue = eval(`${displayValue}/100`)
        }
        else if(e.target.innerHTML === "."){
            if(!displayValue.includes('.')){
                displayValue = displayValue + e.target.innerHTML
            }
        }
        else{
            displayValue = displayValue + e.target.innerHTML
        }
        displayScreen.innerHTML = displayValue
    })
})