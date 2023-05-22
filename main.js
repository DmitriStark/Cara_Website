
const bar = document.getElementById('bar')
const close = document.getElementById('close')
const nav = document.getElementById('navbar')

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active')
        console.log("pyk")
    })
}
if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active')
        console.log("pyk")
    })
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Cart time first try

var removeCartItemButtons = document.getElementsByClassName('btn-danger')

for (let i = 0; i < removeCartItemButtons.length; i++) {
    let button = removeCartItemButtons[i]
    button.addEventListener('click', function () {
        console.log("pyk")
        let buttonlicked = event.target
        buttonlicked.parentElement.parentElement.parentElement.remove()
        updateCartTotal
    })
}

// function updateCartTotal(){
//     let cartItemContainer =document.getElementsByClassName("cart-items")[0]
//     let cartrows = cartItemContainer.getElementsByClassName('cart-row')

//     for(let i =0;i < cartrows.length ; i++){
//         let cartrow = cartrow[i]
//         let priceElement =cartrow.getElementsByClassName('cart-price')[0]
//         let quantityElement = cartrow.getElementsByClassName('cart-quantity-input')[0]
//         console.log(priceElement,quantityElement)

//     }

// }

// console.log(removeCartItemButtons)
// const listed = []                            


/////////////////////////////////////////////////////////////////////////////////
// new try shoping cart

let mobileshop = document.querySelector('#but')
let openShopping = document.querySelector('#lg-bag');
let closeShopping = document.querySelector(".closeShopping")
let listCard = document.querySelector('.listCard')
let body = document.querySelector('body')
let total = document.querySelector('.total')
let quantity = document.querySelector('.quantity')
let list = document.querySelector('.list')


mobileshop.addEventListener('click',()=>{
    body.classList.add("active")
})

openShopping.addEventListener('click', () => {
    body.classList.add("active")
})
closeShopping.addEventListener('click', () => {
    body.classList.remove('active')
})

let products = [
    {
        id: 1,
        name: 'product name',
        image: "img/products/n4.jpg",
        price: 12000
    },
    {
        id: 2,
        name: 'product name',
        image: "img/products/n4.jpg",
        price: 12000
    },
    {
        id: 3,
        name: 'product name',
        image: "img/products/n4.jpg",
        price: 12000
    },
    {
        id: 3,
        name: 'product name',
        image: "img/products/n4.jpg",
        price: 12000
    },
    {
        id: 3,
        name: 'product name',
        image: "img/products/n4.jpg",
        price: 12000
    },
    {
        id: 3,
        name: 'product name',
        image: "img/products/n4.jpg",
        price: 12000
    },
    {
        id: 3,
        name: 'product name',
        image: "img/products/n4.jpg",
        price: 12000
    },
    {
        id: 3,
        name: 'product name',
        image: "img/products/n4.jpg",
        price: 12000
    },

]

let listCards = []


function initApp() {
    products.forEach((value, key) => {
        let newDiv = document.createElement('div')
        newDiv.classList.add('pro')
        // newDiv.classList.add('section-p1')
        newDiv.innerHTML = `
        <img src="${value.image}" alt="">
        <div class="des">
            <span>adidas</span>
            <h5>${value.name}</h5>
            <div class="star">
            <i class="fas fa-star stars"></i>
                <i class="fas fa-star stars"></i>
                <i class="fas fa-star stars"></i>
                <i class="fas fa-star stars"></i>
                <i class="fas fa-star stars"></i>
                
                </div>
                <h4>$${value.price}</h4>
                </div>
                <a href="#"><i class="fa-solid fa-cart-shopping cart"></i></a>
                <button onclick="addToCard(${key})">Add To Card</button>
                `
        list.appendChild(newDiv)

    })

    list.classList.add('pro-container')

}
initApp()

function addToCard(key) {
    if (listCards[key] == null) {
        listCards[key] = products[key]
        listCards[key].quantity = 1
    }
    reloadCard()

}

function reloadCard(){
    listCard.innerHTML ="";
    let count =0
    let totalPrice =0
    listCards.forEach((value,key)=>{
        totalPrice = totalPrice +value.price;
        count = count + value.quantity

        if(value != null){
            let newDiv = document.createElement("li")
            newDiv.innerHTML =`
            <div><img src = "${value.image}"</div>
            <div>${value.name}</div>
            <div>${value.price.toLocaleString()}</div>
            <div>${value.quantity}</div>
            <div>
            <button onclick="changeQuantity(${key},${value.quantity -1})">-</button>
            <div class="count">${value.quantity}</div>
            <button onclick="changeQuantity(${key},${value.quantity +1})">+</button>
            </div>
            `;
            listCard.appendChild(newDiv)
        }
    })

    total.innerText =totalPrice.toLocaleString();
    quantity.innerText = count
}

function changeQuantity(key,quantity){
    if(quantity == 0){
        delete listCards[key];

    }else{
        listCards[key].quantity =quantity;
        listCards[key].price = quantity * products[key].price;

    }
    reloadCard()

}
