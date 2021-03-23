const btn = document.querySelector("button.btn");
console.log(btn);
const nav = document.querySelector(".nav");
console.log(nav);
btn.addEventListener("click",(e)=>{
    e.preventDefault();
    nav.classList.toggle("active");
    console.log(nav.classList);
})