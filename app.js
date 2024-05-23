// console.log(js events);

// function hello() {
//     console.log("hello world");
// }

//onclick
//onchange
//onmouseover
//onmouseout
//onsubmit

// const btn = document.querySelector("#btn");

// btn.addEventListener("click" ,hello);

// btn.addEventListener("click" , function() {
//     console.log("hello world!");
// })




// bubbling
// capturing

// const ul = document.querySelector("#ul");
// const about = document.querySelector("#about");

// ul.addEventListener("click" , function() {
//     console.log("ul click");
// },  false)

// about.addEventListener("click" , function(event){
//         event.stopPropagation();
//         console.log("about clicked");
// }, false)


// onchange

// const input = document.querySelector("#input");

// input.addEventListener("change" , function(event) {
//   console.log("onchange event");  
// })


//onmouseover

// const input = document.querySelector("#input");

// input.addEventListener("chnage" , function () {
//     console.log("onmouseover event");
// })



// const image = document.querySelector("#image");

// image.addEventListener("mouseover" , function () {
//         image.src = 'https://cdn.mos.cms.futurecdn.net/HaPnm6P7TZhPQGGUxtDjAg-320-80.jpg'
// })

// image.addEventListener("mouseout" , function () {
//     image.src = 'https://i.pinimg.com/originals/e0/fd/25/e0fd25f9127a9a109a0648c83ee61643.png'

// })




//onsubmit

const username = document.querySelector("#username");
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const form = document.querySelector('#form');


form.addEventListener("submit", function (event) {
    event.preventDefault()
    console.log(username.value)
        console.log(email.value)
        console.log(password.value)
})













































