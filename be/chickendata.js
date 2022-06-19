import {navbar,product} from '../components/navbar.js'


let nav = document.getElementById('navbar');
let prod = document.getElementById('products');

let chicken_data = [
  {
    id: "1",
    name: "Chicken Breast-Boneless",
    price: "239",
    ntwt: "450",
    gwet: "600",
    img: "https://dao54xqhg9jfa.cloudfront.net/ProductMerchantdising/b09b43a2-f520-264f-1a29-f47cb0e4fad0/original/1584770326.4209--2020-03-2111_28_46--738.jpeg?format=webp",
    desc: "Chicken Breast is one of the meatier cuts of a Chicken, which comes from the breast-bone of the bird.",
    chktype: "boiler",
    bonetype: "",
    cuttype: "whole-cut",
    bestfor: "grill",
    packsz: "regular",
    quantity: 1,
  },
  {
    id: "2",
    name: "Chicken Curry Cut (Small pcs)",
    price: "165",
    ntwt: "450",
    gwet: "526",
    img: "https://d2407na1z3fc0t.cloudfront.net/prodDev/pr_3nqjtznab5c/12/prod_display_image/1634534958.5752--2021-10-1810:59:18--1818?format=webp",
    desc: "Licious Chicken Curry Cut is a mix of bone-in, small pieces of breast, wing (without the tip), leg and thigh meat, enough to feed a small to medium-sized family. ",
    chktype: "boiler",
    bonetype: "boneless",
    cuttype: "whole-cut",
    bestfor: "grill",
    packsz: "large",
    quantity: 1,
  },
  {
    id: "3",
    name: "Chicken Curry Cut (Small Pcs)-Large Pack",
    price: "325",
    ntwt: "1000",
    gwet: "1026",
    img: "https://d2407na1z3fc0t.cloudfront.net/prodDev/pr_av4kgtb3l1h/12/prod_display_image/1631078028.6325--2021-09-0810:43:48--1818",
    desc: "A combination of dark and white meat, the Chicken Curry Cut (small) includes two leg cut into two, two wing without tip and two breast quarter with backbone. With a fresh,",
    chktype: "boiler",
    bonetype: "bone-in",
    cuttype: "whole-cut",
    bestfor: "",
    packsz: "large",
    quantity: 1,
  },
  {
    id: "4",
    name: "Chicken Curry Cut (Large Pcs) - Large Pack",
    price: "315",
    ntwt: "1000",
    gwet: "1026",
    img: "https://d2407na1z3fc0t.cloudfront.net/prodDev/pr_avakgtb7ywh/12/prod_display_image/1631077606.8189--2021-09-0810:36:46--1818",
    desc: "A mix of dark and white meat, our large Chicken Curry Cut pieces include Two leg, Two wing without tip, and Two breast quarter with backbone",
    chktype: "country",
    bonetype: "bone-in",
    cuttype: "cubes",
    bestfor: "curry",
    packsz: "large",
    quantity: 1,
  },
  {
    id: "5",
    name: "Chicken Drumstick",
    price: "235",
    ntwt: "500",
    gwet: "666",
    img: "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/20b06c42-6ece-0b76-f44d-4d24df3bc47b/original/ChickenDrumstickHeroShot.jpg?format=webp",
    desc: "Our skinless and bone-in Chicken Drumsticks are cut from the lower leg portions.",
    chktype: "boiler",
    bonetype: "bone-in",
    cuttype: "thigh",
    bestfor: "roast",
    packsz: "regular",
    quantity: 1,
  },
  {
    id: "6",
    name: "Crispy Chicken Wings | Ready To Cook",
    price: "99",
    ntwt: "225",
    gwet: "260",
    img: "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/c5fd6412-bdee-2d8b-3096-02145592f6b5/original/Crispy-Chicken-Wings-Tag_(1).jpg?format=webp",
    desc: "Marinated in hot chilli seasoning, the wings are then coated in batter & covered in panko bread crumbs",
    chktype: "country",
    bonetype: "bone-in",
    cuttype: "wings",
    bestfor: "panfry",
    packsz: "regular",
    quantity: 1,
  },
  {
    id: "7",
    name: "Chicken Mince (Keema)",
    price: "175",
    ntwt: "450",
    gwet: "565",
    img: "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/a36d074e-8c21-1f4e-bfc3-cf9b2fe8f21c/original/Chicken_Mince_Large_Pack_Hero_Shot.jpg?format=webp",
    desc: "Chicken Mince consists of Chicken Breast Fillets ground to perfection! Packed with proteins and minerals, Chicken",
    chktype: "boiler",
    bonetype: "boneless",
    cuttype: "mince",
    bestfor: "stuffing",
    packsz: "regular",
    quantity: 1,
  },
  {
    id: "8",
    name: "Chicken Thigh- Boneless",
    price: "275",
    ntwt: "450",
    gwet: "565",
    img: "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/4bb13cb1-3d1e-12e0-1dac-619ce32e580e/original/Chicken_Thigh_Boneless_Hero_Shot.jpg?format=webp",
    desc: "Cut from the upper-leg, above the knee joint, Chicken Thighs are boneless and skinless. ",
    chktype: "boiler",
    bonetype: "boneless",
    cuttype: "breast",
    bestfor: "biryani",
    packsz: "regular",
    quantity: 1,
  },
  {
    id: "9",
    name: "Chunky Shawarma Chicken Spread",
    price: "179",
    ntwt: "200",
    gwet: "230",
    img: "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/711ea0cb-d7e1-48d7-4afb-af55cbe439c9/original/Chunky-Shawarma-Chicken-Spread_(7).jpg?format=webp",
    desc: "Get the authentic smoky taste of Shawarma meat roasted on a rotisserie in our Chunky Shawarma Chicken Spread. ",
    chktype: "country",
    bonetype: "boneless",
    cuttype: "",
    bestfor: "stuffing",
    packsz: "regular",
    quantity: 1,
  },
  {
    id: "10",
    name: "Peppery Chicken Salami| Ready to Eat",
    price: "315",
    ntwt: "200",
    gwet: "250",
    img: "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/d085550f-41cf-6cc9-4f13-7934636fe4d5/original/Peppery-Chicken-Salami.jpg?format=webp",
    desc: "The available shelf life may range from 2 to 6 days. Refer to the product label for the actual date.",
    chktype: "kadaknath",
    bonetype: "bone-in",
    cuttype: "cubes",
    bestfor: "panfry",
    packsz: "large",
    quantity: 1,
  },
  {
    id: "11",
    name: "BBQ Chicken Wings without Skin | Ready to Cook",
    price: "149",
    ntwt: "100",
    gwet: "120",
    img: "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/f33a1b3c-f697-a676-e6b7-8b8d84711734/original/BBQ-chicken-wings.jpg?format=webp",
    desc: "If you're craving chicken wings, you can now enjoy them right at home.",
    chktype: "country",
    bonetype: "bone-in",
    cuttype: "wings",
    bestfor: "deepfry",
    packsz: "regular",
    quantity: 1,
  },
  {
    id: "12",
    name: "Chicken Breast-Boneless",
    price: "239",
    ntwt: "450",
    gwet: "600",
    img: "https://dao54xqhg9jfa.cloudfront.net/ProductMerchantdising/b09b43a2-f520-264f-1a29-f47cb0e4fad0/original/1584770326.4209--2020-03-2111_28_46--738.jpeg?format=webp",
    desc: "Chicken Breast is one of the meatier cuts of a Chicken, which comes from the breast-bone of the bird.",
    chktype: "boiler",
    bonetype: "",
    cuttype: "whole-cut",
    bestfor: "grill",
    packsz: "regular",
    quantity: 1,
  },
  {
    id: "13",
    name: "Chicken Curry Cut (Small pcs)",
    price: "165",
    ntwt: "450",
    gwet: "526",
    img: "https://d2407na1z3fc0t.cloudfront.net/prodDev/pr_3nqjtznab5c/12/prod_display_image/1634534958.5752--2021-10-1810:59:18--1818?format=webp",
    desc: "Licious Chicken Curry Cut is a mix of bone-in, small pieces of breast, wing (without the tip), leg and thigh meat, enough to feed a small to medium-sized family. ",
    chktype: "boiler",
    bonetype: "boneless",
    cuttype: "whole-cut",
    bestfor: "grill",
    packsz: "large",
    quantity: 1,
  },
  {
    id: "14",
    name: "Chicken Curry Cut (Small Pcs)-Large Pack",
    price: "325",
    ntwt: "1000",
    gwet: "1026",
    img: "https://d2407na1z3fc0t.cloudfront.net/prodDev/pr_av4kgtb3l1h/12/prod_display_image/1631078028.6325--2021-09-0810:43:48--1818",
    desc: "A combination of dark and white meat, the Chicken Curry Cut (small) includes two leg cut into two, two wing without tip and two breast quarter with backbone. With a fresh,",
    chktype: "boiler",
    bonetype: "bone-in",
    cuttype: "whole-cut",
    bestfor: "",
    packsz: "large",
    quantity: 1,
  },
  {
    id: "15",
    name: "Chicken Curry Cut (Large Pcs) - Large Pack",
    price: "315",
    ntwt: "1000",
    gwet: "1026",
    img: "https://d2407na1z3fc0t.cloudfront.net/prodDev/pr_avakgtb7ywh/12/prod_display_image/1631077606.8189--2021-09-0810:36:46--1818",
    desc: "A mix of dark and white meat, our large Chicken Curry Cut pieces include Two leg, Two wing without tip, and Two breast quarter with backbone",
    chktype: "country",
    bonetype: "bone-in",
    cuttype: "cubes",
    bestfor: "curry",
    packsz: "large",
    quantity: 1,
  },
  {
    id: "16",
    name: "Chicken Drumstick",
    price: "235",
    ntwt: "500",
    gwet: "666",
    img: "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/20b06c42-6ece-0b76-f44d-4d24df3bc47b/original/ChickenDrumstickHeroShot.jpg?format=webp",
    desc: "Our skinless and bone-in Chicken Drumsticks are cut from the lower leg portions.",
    chktype: "boiler",
    bonetype: "bone-in",
    cuttype: "thigh",
    bestfor: "roast",
    packsz: "regular",
    quantity: 1,
  },
  {
    id: "17",
    name: "Crispy Chicken Wings | Ready To Cook",
    price: "99",
    ntwt: "225",
    gwet: "260",
    img: "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/c5fd6412-bdee-2d8b-3096-02145592f6b5/original/Crispy-Chicken-Wings-Tag_(1).jpg?format=webp",
    desc: "Marinated in hot chilli seasoning, the wings are then coated in batter & covered in panko bread crumbs",
    chktype: "country",
    bonetype: "bone-in",
    cuttype: "wings",
    bestfor: "panfry",
    packsz: "regular",
    quantity: 1,
  },
  {
    id: "18",
    name: "Chicken Mince (Keema)",
    price: "175",
    ntwt: "450",
    gwet: "565",
    img: "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/a36d074e-8c21-1f4e-bfc3-cf9b2fe8f21c/original/Chicken_Mince_Large_Pack_Hero_Shot.jpg?format=webp",
    desc: "Chicken Mince consists of Chicken Breast Fillets ground to perfection! Packed with proteins and minerals, Chicken",
    chktype: "boiler",
    bonetype: "boneless",
    cuttype: "mince",
    bestfor: "stuffing",
    packsz: "regular",
    quantity: 1,
  },
  {
    id: "19",
    name: "Chicken Thigh- Boneless",
    price: "275",
    ntwt: "450",
    gwet: "565",
    img: "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/4bb13cb1-3d1e-12e0-1dac-619ce32e580e/original/Chicken_Thigh_Boneless_Hero_Shot.jpg?format=webp",
    desc: "Cut from the upper-leg, above the knee joint, Chicken Thighs are boneless and skinless. ",
    chktype: "boiler",
    bonetype: "boneless",
    cuttype: "breast",
    bestfor: "biryani",
    packsz: "regular",
    quantity: 1,
  },
  {
    id: "20",
    name: "Chunky Shawarma Chicken Spread",
    price: "179",
    ntwt: "200",
    gwet: "230",
    img: "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/711ea0cb-d7e1-48d7-4afb-af55cbe439c9/original/Chunky-Shawarma-Chicken-Spread_(7).jpg?format=webp",
    desc: "Get the authentic smoky taste of Shawarma meat roasted on a rotisserie in our Chunky Shawarma Chicken Spread. ",
    chktype: "country",
    bonetype: "boneless",
    cuttype: "",
    bestfor: "stuffing",
    packsz: "regular",
    quantity: 1,
  },
];

var cart = JSON.parse(localStorage.getItem("cart")) || [];

localStorage.setItem("chicken_data", JSON.stringify(chicken_data));

function addItems() {
  var pro = JSON.parse(localStorage.getItem("chicken_data"));
  pro.forEach((el) => addProduct(el));
  // console.log(pro)
}
addItems();
function addProduct(el) {
  var main = document.getElementById("cproducts");

  // console.log(el);
  var x = el;
  // console.log(x)
  var div = document.createElement("div");
  div.setAttribute("class", "divcards");

  var card = document.createElement("div");
  card.setAttribute("class", "card");
  card.style.width = "width: 26rem;";

  div.innerHTML = `
    <div id="card">
            <div class="card" style="width: 26rem;">
                <img src=${el.img} class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title fs-7 text-truncate">${el.name}<h5>
                  <p class="fs-6 fw-lighter text-truncate" style="max-width: 350px;">${el.desc}</p>
                  <div class="row">
                      <div class="col fw-light">Net wt: ${el.ntwt}gms</div>
                      <div class="col fw-light">Gross:${el.gwet}gms</div>
                  </div>
                  <br>
                  <div class="row">
                      <div class="col">  <p style="color:#d11243">MRP:₹${el.price}</p></div>
                        <div class="col" id="addtocartbtn">
                        <div class="btn text-uppercase" style="background-color: #d11243; color:white" id="addtoc" onclick="addToCart(${x.id})" >Add to cart</div>
                        </div>
                      
                  </div> 
                  <br> 
                  <div class="card-footer text-muted text-center" style="background-color: transparent;">
                   <img src="https://www.licious.in/img/rebranding/express_delivery.svg" alt=""> Today in <b>120min</b>
                  </div>     
                </div>
                
              </div>
        </div>
        <br/>
    `;
  // let cartbtn = document.getElementById("addtoc");
  // cartbtn.addEventListener("click", function(){
  //     // addToCart(el)
  // })

  main.append(div);
}
function addToCart(id) {
  // console.log("el", el)
  var d = JSON.parse(localStorage.getItem("chicken_data"));
  for (var i = 0; i < d.length; i++) {
    if (d[i].id == id) {
      cart.push(d[i]);
      localStorage.setItem("cart", JSON.stringify(cart));
      console.log(cart);
      change();
    }
  }
}
var cartbtn = document.getElementById("addtocartbtn");

function change() {
  cartbtn.innerHTML = null;
  show();
}

function show() {
  let btnp = document.createElement("div");
  btnp.setAttribute("class", "btn fw-bold");
  btnp.style = "color: #d11243";
  btnp.innerText = "+";
  btnp.addEventListener("click", function () {
    // plus()
  });

  let inpt = document.createElement("input");
  btnp.setAttribute("id", "inpt");
  inpt.value = 1;
  inpt.style = "width: 20px; border: none;";

  let btnm = document.createElement("div");
  btnm.setAttribute("class", "btn fw-bold");
  btnm.style = "color: #d11243";
  btnm.innerText = "-";
  btnm.addEventListener("click", function () {
    // minus()
  });
  cartbtn.append(btnp, inpt, btnm);
}

const popover = new bootstrap.Popover(".popovr", {
  container: "body",
});
const popovere = new bootstrap.Popover(".popovre", {
  container: "body",
});

// sorting
function ctype() {
  var ct = document.getElementById("ctype").value;
  var main = document.getElementById("cproducts");
  main.innerHTML = null;
  var d = JSON.parse(localStorage.getItem("chicken_data"));
  var reduced = d.filter(function (el) {
    return el.chktype == ct;
  });
  console.log(ct);
  console.log(reduced);
  reduced.forEach((el) => addProduct(el));
}
function btype() {
  var ct = document.getElementById("btype").value;
  var main = document.getElementById("cproducts");
  main.innerHTML = null;
  var d = JSON.parse(localStorage.getItem("chicken_data"));
  var reduced = d.filter(function (el) {
    return el.bonetype == ct;
  });
  console.log(ct);
  console.log(reduced);
  reduced.forEach((el) => addProduct(el));
}
function cuttype() {
  var ct = document.getElementById("cuttype").value;
  var main = document.getElementById("cproducts");
  main.innerHTML = null;
  var d = JSON.parse(localStorage.getItem("chicken_data"));
  var reduced = d.filter(function (el) {
    return el.cuttype == ct;
  });
  console.log(ct);
  console.log(reduced);
  reduced.forEach((el) => addProduct(el));
}
function bestfor() {
  var ct = document.getElementById("bestfor").value;
  var main = document.getElementById("cproducts");
  main.innerHTML = null;
  var d = JSON.parse(localStorage.getItem("chicken_data"));
  var reduced = d.filter(function (el) {
    return el.bestfor == ct;
  });
  console.log(ct);
  console.log(reduced);
  reduced.forEach((el) => addProduct(el));
}

function packsz() {
  var ct = document.getElementById("packsz").value;
  var main = document.getElementById("cproducts");
  main.innerHTML = null;
  var d = JSON.parse(localStorage.getItem("chicken_data"));
  var reduced = d.filter(function (el) {
    return el.packsz == ct;
  });
  console.log(ct);
  console.log(reduced);
  reduced.forEach((el) => addProduct(el));
}

console.log(navbar());

nav.innerHTML = navbar();
prod.innerHTML = product();
