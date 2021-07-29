// alert('hello')


// grab all eelements



const tipBtn = document.querySelectorAll('.tip')
const tipCustom = document.querySelector('.custom')

const billInput = document.querySelector('.bill_input')
const resetButton = document.querySelector('.total_reset')
const customButton = document.querySelector('.custom')
const peopleInput = document.querySelector('.people_input')
const tipAmountPerson = document.querySelector('.tip_amount_header_person')
const tipAmountTotal = document.querySelector('.tip_amount_header_total')



tipBtn.forEach(function(item) {
    item.addEventListener('click', handleClick)
})

function handleClick(e) {

  tipBtn.forEach(btn => {
    // clear active state
    btn.classList.remove('active')
    if(e.target.innerHTML == btn.innerHTML) {
      btn.classList.add('active')
    tipValue = parseFloat(btn.innerHTML) / 100
    console.log(tipValue)
    } 
  })
}

let bilValue = 0.0
let tipValue = .15


// Set bil value
billInput.addEventListener('input', setBillValue)

function setBillValue() {

  if(billInput.value.includes(',')) {
    billInput.value = billInput.value.replace(',', '.')
  }
  billValue = parseFloat(billInput.value)

  console.log(billValue)
}

tipCustom.addEventListener('input', setCustomValue)

function setCustomValue() {
  const customValue = parseFloat(tipCustom.value) / 100
  console.log(customValue)
  
  tipBtn.forEach(btn => {
    // remove active class
    btn.classList.remove('active')
  })
  console.log(tipValue)

}

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


 