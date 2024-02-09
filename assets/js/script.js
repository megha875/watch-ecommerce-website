const hambuger = document.getElementById("hamburger");
const navlinks = document.getElementById("navlinks");

hambuger .addEventListener("click", ()=>{
  navlinks.classList.toggle("navlinks-active");
  
})