// DUMMY CART DATA

const cart = [
{
name: "Brazilian Body Wave Wig",
desc: "Premium human hair",
price: 1200,
qty: 1,
img: "images/product1.jpg"
},

{
name: "Lace Front Wig",
desc: "Natural hairline wig",
price: 1500,
qty: 2,
img: "images/product2.jpg"
},

{
name: "Hair Extensions",
desc: "100% Remy human hair",
price: 900,
qty: 1,
img: "images/product3.jpg"
}
]


const cartItemsContainer = document.getElementById("cartItems")

const subtotalEl = document.getElementById("subtotal")
const vatEl = document.getElementById("vat")
const totalEl = document.getElementById("total")

let subtotal = 0


function renderCart(){

cartItemsContainer.innerHTML = ""

subtotal = 0

cart.forEach((item,index)=>{

subtotal += item.price * item.qty

const itemHTML = `

<div class="cartItem">

<img src="${item.img}">

<div class="cartInfo">
<h3>${item.name}</h3>
<p>${item.desc}</p>
</div>

<div class="cartPrice">
R${item.price}
</div>

<div class="qtyBox">
<button onclick="decreaseQty(${index})">-</button>
<span>${item.qty}</span>
<button onclick="increaseQty(${index})">+</button>
</div>

<button class="removeBtn" onclick="removeItem(${index})">
<i class="fa-solid fa-trash"></i>
</button>

</div>

`

cartItemsContainer.innerHTML += itemHTML

})

updateTotals()

}

function updateTotals(){

const vat = subtotal * 0.15
const delivery = 80
const total = subtotal + vat + delivery

subtotalEl.textContent = "R" + subtotal.toFixed(2)
vatEl.textContent = "R" + vat.toFixed(2)
totalEl.textContent = "R" + total.toFixed(2)

}

function increaseQty(index){
cart[index].qty++
renderCart()
}

function decreaseQty(index){
if(cart[index].qty > 1){
cart[index].qty--
renderCart()
}
}

function removeItem(index){
cart.splice(index,1)
renderCart()
}


renderCart()