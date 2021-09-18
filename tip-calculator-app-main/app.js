
const tipBtn = document.querySelectorAll('.tip')
const tipCustom = document.querySelector('.custom')
const label = document.querySelector('.label')
const billInput = document.querySelector('.bill_input')
const resetButton = document.querySelector('.total_reset')
const peopleInput = document.querySelector('.people_input')
const peopleError = document.querySelector('.people-info')
const tipAmountPerson = document.querySelector('.tip_amount_header_person')
const tipAmountTotal = document.querySelector('.tip_amount_header_total')

const btnReset = document.querySelector('.total_reset')


const errMessage = document.querySelector('.error-message')

// Add event listener

billInput.addEventListener('input', setBillValue)

tipBtn.forEach(function(item) {
    item.addEventListener('click', handleClick)
})
// Set Custom value
tipCustom.addEventListener('input', setCustomValue)

peopleInput.addEventListener('input', setPeopleNumber)
btnReset.addEventListener('click', totalReset)


let billValue = 0.0 // default value
let tipValue = 0.15 // default value => 15% button is active
let peopleValue = 1 // default value 
 
function validateFloat(s) {
  let rgx = /^[0-9]*\.?[0-9]*$/
  return s.match(rgx)
}

function validateInt(s) {
  let rgx = /^[0-9]*$/
  return s.match(rgx)
}

function setBillValue() {

  if(billInput.value.includes(',')) {
    billInput.value = billInput.value.replace(',', '.')
  }
  if(!validateFloat(billInput.value)) {
    // This part of code cut of all invalid parts of input value
    billInput.value = billInput.value.substring(0, billInput.value.length-1)
  }
  billValue = parseFloat(billInput.value)

 
  calculateTip()
}

function handleClick(e) {

  tipBtn.forEach(btn => {
    // clear active state
    btn.classList.remove('active')
    //set active
    if(e.target.innerHTML == btn.innerHTML) {
      btn.classList.add('active')
      tipValue = parseFloat(btn.innerHTML) / 100
      console.log(tipValue)
    } 
  })
  //clear custom tip
  tipCustom.value =""
 
}

function setCustomValue(e) {
  // Only intager allows
  if(!validateInt(tipCustom.value)) {
      tipCustom.value = tipCustom.value.substring(0, tipCustom.value.length-1)
  }
  console.log(tipCustom)

  tipValue = parseFloat(tipCustom.value) / 100
 
  
  // remove active state class
  tipBtn.forEach(btn => {
    if(e.target.innerHTML == btn.innerHTML) {
       btn.classList.remove('active')
    } 
  })
  if(tipCustom.value !== '') {
    calculateTip()
  }
}

function setPeopleNumber() {
  
  if(!validateInt(peopleInput.value)) {
    peopleInput.value = peopleInput.value.substring(0, peopleInput.value.length-1)
  }
  peopleValue = parseFloat(peopleInput.value)

  if(peopleValue <= 0) {
    errMessage.classList.add('show-error-message')
    setTimeout(() => {
      errMessage.classList.remove('show-error-message')
    }, 3000);
    peopleInput.classList.add('error')
  }
  else {
    peopleInput.classList.remove('error')
  }
  calculateTip()
}

function calculateTip() {
  if(peopleValue >= 1) {
  let tipAmount = (billValue * tipValue) / peopleValue
  let total = billValue * (tipValue + 1 ) / peopleValue
  // show tipPerson result and total
  tipAmountPerson.innerHTML = '$' + tipAmount.toFixed(2);
  tipAmountTotal.innerHTML = '$' + total.toFixed(2);
  }
 
}

function totalReset() {
  btnReset.classList.add('active')
  billInput.value = '0.0';
  setBillValue()

  peopleInput.value = '1'
  setPeopleNumber()
}