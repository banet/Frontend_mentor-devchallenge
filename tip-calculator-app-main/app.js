// alert('hello')


// grab all eelements

const buttons = document.querySelectorAll('.btn')

const billInput = document.querySelector('.bill_input')
const resetButton = document.querySelector('.total_reset')
const customButton = document.querySelector('.custom')
const peopleInput = document.querySelector('.people_input')
const tipAmountPerson = document.querySelector('.tip_amount_header_person')
const tipAmountTotal = document.querySelector('.tip_amount_header_total')



buttons.forEach(function(item) {
    item.addEventListener('click', addTip)
})

function addTip(e) {
  buttons.forEach(btn => {
    if(e.target.innerHTML == btn.innerHTML) {
  tipValue = parseFloat(btn.innerHTML) / 100
  console.log(tipValue)
  } 
  })
 
    // let billValue = billInput.value
    // let tipProcent  = tip.value / 100
    // let tipValue = tipProcent * billValue
    //   console.log(tipValue)
    // const tipAmount = this.innerText
    // console.log(tipAmount)
}

// buttons.forEach(button => {
//   button.addEventListener('click', (e) => {
//     // console.log(e.target)
    
//   })
  
// })






// buttons.forEach(button => {
//     button.addEventListener('click', (e) => {
         
//         if(e.target.innerText === '5%') {
//           return fiveProcent
//         }
//         console.log(e.target.innerText)
        
       
//     })
// })

// buttons.forEach(tip => {
//     tip.addEventListener('click', selectTip)
// })


// function calculateTip() {
//     this.style.background = '#26c0ab';
//     this.style.color = '#00494d';

//      let billValue = billInput.value
//      //let tipProcent  = tip.value / 100
//      let tipValue = tipProcent * billValue
//      console.log(tipValue)
//    //const tipAmount = this.innerText
    
//     // const formulaTipAmount = this/100
   
// }


// function selectTip() {
//     const bilAmount =  billInput.value
//   const tipProcent = Number(buttons*bilAmount)
//   console.log(tipProcent)
// }



// billInput.addEventListener('input', selectTip)


 