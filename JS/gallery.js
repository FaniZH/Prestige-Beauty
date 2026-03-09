const filterBtns=document.querySelectorAll(".filterBtn")
const galleryItems=document.querySelectorAll(".galleryItem")

filterBtns.forEach(btn=>{
btn.addEventListener("click",()=>{

filterBtns.forEach(b=>b.classList.remove("active"))
btn.classList.add("active")

const filter=btn.dataset.filter

galleryItems.forEach(item=>{

if(filter==="all"||item.classList.contains(filter)){
item.style.display="block"
}else{
item.style.display="none"
}

})

})
})

/* LIGHTBOX */

const lightbox=document.querySelector(".lightbox")
const lightboxImg=document.querySelector(".lightboxImg")
const closeLightbox=document.querySelector(".closeLightbox")

galleryItems.forEach(item=>{
item.addEventListener("click",()=>{
lightbox.style.display="flex"
lightboxImg.src=item.querySelector("img").src
})
})

closeLightbox.onclick=()=>{
lightbox.style.display="none"
}