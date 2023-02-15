let decrease = document.querySelector("#decrease");
let reset = document.querySelector("#reset");
let increase = document.querySelector("#increase");
let result = document.querySelector(".result");
// console.log(result.innerHTML);


decrease.addEventListener("click", function () {
    result.innerHTML--;


    if (result.innerHTML < 0) {
        result.style.color = "red";
    }

    // decrease.style.backgroundColor="black"
    // decrease.style.color="white"




})

reset.addEventListener("click", function () {
    result.innerHTML = 0;
    result.style.color = "black";

 




})

increase.addEventListener("click", function () {
    result.innerHTML++;


    if (result.innerHTML > 0) {
        result.style.color = "green";
    }




})

reset.addEventListener("mouseenter", function () {


    reset.style.backgroundColor = "black"
    reset.style.color = "white"





})
reset.addEventListener("mouseleave", function () {


    reset.style.backgroundColor = "white"
    reset.style.color = "black"





})
increase.addEventListener("mouseenter", function () {


    increase.style.backgroundColor = "black"
    increase.style.color = "white"





})
increase.addEventListener("mouseleave", function () {


    increase.style.backgroundColor = "white"
    increase.style.color = "black"





})
decrease.addEventListener("mouseenter", function () {


    decrease.style.backgroundColor = "black"
    decrease.style.color = "white"





})
decrease.addEventListener("mouseleave", function () {


    decrease.style.backgroundColor = "white"
    decrease.style.color = "black"





})

// increase.addEventListener("dblclick", function () {
//     let y=parseInt(result.innerHTML);
    
//     result.innerHTML=10+y;
    


//     if (result.innerHTML > 0) {
//         result.style.color = "green";
//     }




// })





