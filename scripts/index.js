import {navbar,product} from '../components/navbar.js'


let nav = document.getElementById('navbar');
let prod = document.getElementById('products');

let products = document.getElementsByClassName('card');
let leftBtn = document.getElementById('slider__left');
let rightBtn = document.getElementById('slider__right');
let product_Page = Math.ceil(products.length/3);

let leftBtn_cuts = document.getElementById('cuts__slider__left');
let rightBtn_cuts = document.getElementById('cuts__slider__right');
let products_Cuts = document.getElementsByClassName('card_')

let l = 0;
let x = 0;

let movePer = 27.50;
let maxMove = 220;

let movePerCuts = 26;
let maxMoveCuts = 210;

let rightMover = () => {
    l = l + movePer;

    if(products === 1) l = 0;

    for(let i of products) {
        if(l > maxMove) {
            l = l - movePer ;
        }
        i.style.left = '-' + l + '%';
    }
}

let leftMover = () => {
    l = l - movePer;

    if(l <= 0) {
        l = 0;
    }
    
    for(let i of products) {
        if(product_Page > 3) {

        }
        i.style.left = '-' + l + '%';
    }
}


let rightMoverCuts = () => {
    x = x + movePerCuts;

    if(products_Cuts === 1) x = 0;

    for(let j of products_Cuts) {
        if(x > maxMoveCuts) {
            x = x - movePerCuts ;
        }
        j.style.left = '-' + x + '%';
    }
}


let leftMoverCuts = () => {
    x = x - movePerCuts;

    if(x <= 0) {
        x = 0;
    }
    
    for(let j of products_Cuts) {
        if(product_Page > 3) {

        }
        j.style.left = '-' + x + '%';
    }
}

rightBtn.onclick = () => {rightMover()};
leftBtn.onclick = () => {leftMover()};

rightBtn_cuts.onclick = () => {rightMoverCuts()};
leftBtn_cuts.onclick = () => {leftMover()};

console.log(navbar());

nav.innerHTML = navbar();
prod.innerHTML = product();

let searchBar = document.getElementById('search');

searchBar.addEventListener('click', redirectFn);

function redirectFn() {
    window.location.href = 'search.html';
}

let logIn = document.getElementById('login');

let chicken = document.getElementById('chicken');

logIn.addEventListener('click', redirectLogin);

function redirectLogin () {
    window.location.href = "login.html";
}

chicken.addEventListener('click',productPage);

function productPage() {
    window.location.href = "chicken.html";
}
