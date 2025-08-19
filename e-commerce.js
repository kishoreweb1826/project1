var sidenav = document.querySelector("#sidenav");
var body = document.querySelector("body");

function show() {
  sidenav.style.left = "0%";
}
var sidenav = document.querySelector("#sidenav");

function cancel() {
  sidenav.style.left = "-50%";
}

var cartnav = document.querySelector(".add-to-cart-side-nav");
function showcart() {
  cartnav.style.right = "0%";
}

function cancelcart() {
  cartnav.style.right = "-70%";
}
var button = document.querySelector(".btn");

function hover() {
  button.style.display = "block";
}
function leave() {
  button.style.display = "none";
}

// spanvalue++
var span = document.querySelectorAll(".span");
var spanvalue = 0;
var span = document.querySelectorAll(".span");
let cartitems = document.querySelector(".add-to-cart-side-nav");

function addproduct(button) {
  // Find the clicked product
  let productDiv = button.closest(".product2");

  // Get details
  let name = productDiv.querySelector(".productname").textContent.trim();
  let price = productDiv.querySelector(".productprice").textContent.trim();
  let imgSrc = productDiv.querySelector("img").src;

  // Check if EXACT same product is already in cart
  let existingProduct = Array.from(
    cartitems.querySelectorAll(".addcartside")
  ).find(
    (item) => item.querySelector("#cart-name").textContent.trim() === name
  );

  if (existingProduct) {
    // Increase quantity for the same product
    
    let qtySpan = existingProduct.querySelector(".quantity");
    qtySpan.textContent = parseInt(qtySpan.textContent) + 1;
    return;
    
  }

  // Create new cart item div for different products
  let product = document.createElement("div");
  product.classList.add("addcartside");
  product.innerHTML = `
        <div class="cart-items">
            <img src="${imgSrc}">
        </div>
        <div class="cart-section">
            <h3 id="cart-name">${name}</h3>
            <p id="cart-total">${price}</p>
        </div>
        <div class="adjust">
            <span class="decrease" onclick="reduceproduct(this)"><</span>
            <span class="quantity">1</span>
            <span class="increase" onclick="increase(this)">></span>
        </div>
    `;
    let sound = document.getElementById("clickSound");
      sound.currentTime = 0; // restart sound if button is clicked quickly
      sound.play();

  cartitems.appendChild(product);
  spanvalue++;
  span.textContent = spanvalue;
}

// Decrease quantity
var spanvalue = 0;
var span = document.querySelector(".span");
function reduceproduct(button) {
  let qtySpan = button.parentElement.querySelector(".quantity");
  let qty = parseInt(qtySpan.textContent);

  if (qty > 1) {
    qtySpan.textContent = qty - 1;
  } else {
    button.closest(".addcartside").remove();
    spanvalue--;
    span.textContent = spanvalue;
  }
}


// Increase quantity
function increase(button) {
  let qtySpan = button.parentElement.querySelector(".quantity");
  qtySpan.textContent = parseInt(qtySpan.textContent) + 1;
}

// seach function

var productContainer = document.querySelector("#products-container");
var search = document.querySelector("#search");
var productlist = productContainer.querySelectorAll(".product2");
console.log(productlist)

search.addEventListener("keyup", function () {
    var enteredValue = event.target.value.toUpperCase();

    for (count = 0; count < productlist.length; count++) {
        var productname = productlist[count].querySelector("h1").textContent;

        if (productname.toUpperCase().indexOf(enteredValue) < 0) {
            productlist[count].style.display = "none";
        } else {
            productlist[count].style.display = "block";
        }
    }
});


function contactu(){
  alert("We Will Contact You");
}