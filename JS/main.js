window.addEventListener("scroll", function(){

    const navbar = document.querySelector(".navigationBar");

    if(window.scrollY > 80){
        navbar.classList.add("scrolled");
    }else{
        navbar.classList.remove("scrolled");
    }

});


document.getElementById("currentYear").textContent = new Date().getFullYear();


const menuToggle = document.querySelector(".menuToggle");

const navList = document.querySelector(".list");

const icon = document.querySelector(".menuToggle i");


menuToggle.addEventListener("click", function(){

    navList.classList.toggle("active");

    if(navList.classList.contains("active")){
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");
    }else{
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
    }

});

const teamContainer=document.querySelector(".teamContainer")

const leftBtn=document.querySelector(".teamBtn.left")

const rightBtn=document.querySelector(".teamBtn.right")

if(teamContainer){

rightBtn.addEventListener("click",()=>{
teamContainer.scrollBy({left:300,behavior:"smooth"})
})

leftBtn.addEventListener("click",()=>{
teamContainer.scrollBy({left:-300,behavior:"smooth"})
})

}
