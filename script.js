const products = [
{
    name:"Nike Air Max",
    price:5500,
    image:"https://images.unsplash.com/photo-1542291026-7eec264c27ff"
},
{
    name:"Adidas Ultraboost",
    price:6200,
    image:"https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb"
},
{
    name:"Puma RS-X",
    price:4800,
    image:"https://images.unsplash.com/photo-1608231387042-66d1773070a5"
},
{
    name:"New Balance 574",
    price:5300,
    image:"https://nb.scene7.com/is/image/NB/ml574evn_nb_02_i?$pdpflexf2$&wid=440&hei=440"
}
];

let cart=[];

const productGrid=document.getElementById("product-grid");
const cartItems=document.getElementById("cart-items");
const cartTotal=document.getElementById("cart-total");
const cartCount=document.getElementById("cart-count");
const cartSidebar=document.getElementById("cart-sidebar");

products.forEach((product,index)=>{
    productGrid.innerHTML+=`
    <div class="card">
        <img src="${product.image}">
        <h3>${product.name}</h3>
        <p>₱${product.price}</p>
        <button onclick="addToCart(${index})">Add to Cart</button>
    </div>
    `;
});

function addToCart(index){
    cart.push(products[index]);
    updateCart();
}

function updateCart(){
    cartItems.innerHTML = "";

    let total = 0;

    cart.forEach((item, index) => {
        total += item.price;

        cartItems.innerHTML += `
        <div class="cart-item">
            <div>
                <h4>${item.name}</h4>
                <p>₱${item.price}</p>
            </div>

            <button class="remove-btn" onclick="removeFromCart(${index})">
                Remove
            </button>
        </div>
        `;
    });


    cartTotal.textContent=total;
    cartCount.textContent=cart.length;
}

function removeFromCart(index){
    cart.splice(index,1);
    updateCart();
}

document.getElementById("cart-btn").addEventListener("click",()=>{
    cartSidebar.classList.toggle("active");

document.getElementById("close-cart").addEventListener("click", () => {
    cartSidebar.classList.remove("active");
});
    
});