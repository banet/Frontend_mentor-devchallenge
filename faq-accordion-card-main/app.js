
/*
.accordion__question
-add class 'opne when button clicked to open, remove on close
.accordion__collapse  ’collapse’ - accordion closed
display; none (if doesn’t have ‘show’ class)

“collapsing” - opening / closing animation
-height of content set via JS o element (inline style)
-default styles: height:0, overflow: hidden, transtion height property


“collapse show” - accordion open
    display: block

*/


const btn = document.querySelectorAll('.accordion__question')
const collapse = document.querySelectorAll('.accordion__collapse')

// btn[0].addEventListener('click', accordion)

// function accordion(e) {

//     //console.log(e.target)
//     btn[0].classList.toggle('open');
//     collapse[0].classList.toggle('collapse')
// }

document.querySelectorAll('.accordion__question').forEach(function(item) {
    item.addEventListener('click', (event) => {
        item.classList.toggle('open')
        item.nextElementSibling.classList.toggle('open')
    })
})

// function accrodion() {

//     item.classList.add('open')

// }