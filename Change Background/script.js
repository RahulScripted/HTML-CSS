const body = document.querySelector("body");
const Button = document.getElementById("change");

Button.onclick = function(){
    body.classList.toggle("active");
}