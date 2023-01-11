const inputEl = document.getElementById('input-el')
const btnsSection = document.getElementById('btns-section')
const powerBtn = document.getElementById('power')

let isOff = true
inputEl.value = 'press on/off to begin'

powerBtn.addEventListener('click', (e)=>{
    e.target.disabled = true
    isOff = !isOff
    const btns = document.querySelectorAll('.toggle')

    if(isOff){
        btns.forEach(btn => btn.disabled = true)
        inputEl.value = 'Shutting down'
        setTimeout(()=>{
            inputEl.value = 'press on/off to begin'
            e.target.disabled = false
        }, 2000)
        
    }else{
        inputEl.value = 'Welcome'
        setTimeout(()=>{
            inputEl.value=''
            btns.forEach(btn => btn.disabled = false)
            e.target.disabled = false
        }, 2000)
        
    }
})

btnsSection.addEventListener('click', (e)=> {
   if(e.target.tagName === 'BUTTON'){
    const classes = e.target.classList

    if(classes.contains('clear')){
        inputEl.value = ''

    }else if(classes.contains('del')){
        inputEl.value = inputEl.value.slice(0,-1)

    }else if(classes.contains('number')){
        inputEl.value += e.target.innerText

    } else if(classes.contains('operation')){
        const indexOfPlus = inputEl.value.indexOf('+')
        const indexOfMinus = inputEl.value.indexOf('-')
        const indexOfMult = inputEl.value.indexOf('*')
        const indexOfDiv = inputEl.value.indexOf('/')
        if(indexOfPlus!==-1||indexOfMinus!==-1||indexOfMult!==-1||indexOfDiv!==-1){
            inputEl.value = myEval(inputEl.value)
        }

        inputEl.value += e.target.innerText
        


    } else if(classes.contains('eval')){
        if(inputEl.value){
            inputEl.value = myEval(inputEl.value)
        }
        
    }
   }

})

function myEval(str){
    const indexOfPlus = str.indexOf('+')
    const indexOfMinus = str.indexOf('-')
    const indexOfMult = str.indexOf('*')
    const indexOfDiv = str.indexOf('/')
    let result
    if(indexOfPlus !== -1){
      result = Number(str.slice(0,indexOfPlus)) + Number(str.slice(indexOfPlus + 1))
    } else if(indexOfMinus !== -1){
      result = Number(str.slice(0,indexOfMinus)) - Number(str.slice(indexOfMinus+ 1))
    } else if(indexOfMult !== -1){
      result = Number(str.slice(0,indexOfMult)) * Number(str.slice(indexOfMult + 1))
    } else if(indexOfDiv !== -1){
      result = Number(str.slice(0,indexOfDiv)) / Number(str.slice(indexOfDiv + 1))
    } else{
        result = inputEl.value 
    }
    return result
}