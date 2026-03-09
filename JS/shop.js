// FILTER PRODUCTS
const filterButtons = document.querySelectorAll(".shopFilter")
const products = document.querySelectorAll(".productCard")

filterButtons.forEach(button => {

button.addEventListener("click", () => {

filterButtons.forEach(btn => btn.classList.remove("active"))

button.classList.add("active")

const filter = button.dataset.filter

products.forEach(product => {

if(filter === "all" || product.classList.contains(filter)){
product.style.display = "block"
}else{
product.style.display = "none"
}

})

})

})


// CART SYSTEM
let cart = JSON.parse(localStorage.getItem("cart")) || []

const buttons = document.querySelectorAll(".addCart")

const popup = document.querySelector(".cartPopup")

buttons.forEach(btn => {

btn.addEventListener("click", () => {

const product = {
name: btn.dataset.name,
price: Number(btn.dataset.price),
img: btn.dataset.img,
qty: 1
}

cart.push(product)

localStorage.setItem("cart", JSON.stringify(cart))

// SHOW POPUP
popup.classList.add("show")

setTimeout(() => {
popup.classList.remove("show")
}, 2000)

})

})