


var arr = JSON.parse(localStorage.getItem("cart")) || [];
var count = JSON.parse(localStorage.getItem("cnt")) || 0;
var total = 0;
function addextra() {
  obj = {
    name: "Classic Eggs-pack Of 30",
    price: 271,
    gwet: 320,
    quantity: 1,
  };
  arr.push(obj);
  localStorage.setItem("cart", JSON.stringify(arr));
  window.location.reload();
}
function addextra1() {
  obj = {
    name: "Afghani Murgh Seekh Kebab",
    price: 237,
    gwet: 425,
    quantity: 1,
  };
  arr.push(obj);
  localStorage.setItem("cart", JSON.stringify(arr));
  window.location.reload();
}
function addextra2() {
  obj = {
    name: "Lucknowi Mutton Kebab",
    price: 379,
    gwet: 220,
    quantity: 1,
  };
  arr.push(obj);
  localStorage.setItem("cart", JSON.stringify(arr));
  window.location.reload();
}
function addextra3() {
  obj = {
    name: "Chicken Curry Cut (Small Pcs)",
    price: 161,
    gwet: 320,
    quantity: 1,
  };
  arr.push(obj);
  localStorage.setItem("cart", JSON.stringify(arr));
  window.location.reload();
}
var arr = JSON.parse(localStorage.getItem("cart")) || [];
var count = JSON.parse(localStorage.getItem("cnt")) || 0;
var total = 0;
var i = 0;
function appendfunc() {
  var cross_sidepanel = document.querySelector("#cross_sidepanel");
  var WholeTotal = document.querySelector("#gettotal");
  WholeTotal.innerHTML = null;
  var valied = document.querySelector("#valied");
  valied.innerHTML = null;
  var box = document.querySelector("#btmlinediv");
  box.innerHTML = null;
  var lasttotalbox1 = document.querySelector("#lasttotalbox1");
  lasttotalbox1.innerHTML = null;
  arr.forEach((elem, index) => {
    i++;
    var div1 = document.createElement("div");
    total = total + Number(elem.price) * elem.quantity;

    valied.innerText = total;
    // console.log(typeof (valied.innerText))
    var x = Number(valied.innerText);
    // console.log(typeof x)
    var DeliveryCharge = document.querySelector("#DeliveryCharge_h3");
    var discount = document.querySelector("#Discountvalue");
    discount.innerText = 0;

    var checkforoff = document.querySelector("#checkforoff");
    if (x < 399) {
      // WholeTotal.innerHTML = null

      checkforoff.innerText =
        "Your cart value is less than ₹399 & delivery charge applies";
      DeliveryCharge.innerText = 39;
      WholeTotal.innerText = total + 39;
      lasttotalbox1.innerHTML = `Total: ₹ ${WholeTotal.innerHTML} `;
    }
    if (x > 399) {
      // WholeTotal.innerHTML = null
      checkforoff.innerText =
        "Congratulations, Your delivery charge is waived off!!!";
      DeliveryCharge.innerText = 0;
      WholeTotal.innerText = total;
      lasttotalbox1.innerHTML = `Total: ₹ ${WholeTotal.innerHTML} `;
    }
    WholeTotal.style.color = "#D11243";
    var image = document.createElement("img");

    var num = document.createElement("span");
    num.innerText = i;
    var name = document.createElement("p");
    name.innerText = elem.name;
    var pric = document.createElement("h2");
    pric.innerText = `₹ ${Number(elem.price)}.00`;

    var wgt = document.createElement("h3");
    wgt.innerText = `${elem.gwet}gms`;

    var btn = document.createElement("button");
    btn.setAttribute("id", "btn");
    btn.innerText = "X";
    btn.onclick = () => {
      console.log("fdnjf");
      remove(index);
    };

    var qua = document.createElement("h4");
    qua.innerText = elem.quantity;
    var btn1 = document.createElement("button");
    btn1.innerText = "+";
    btn1.setAttribute("id", "btn1");

    btn1.onclick = () => {
      qua.innerText = ++elem.quantity;

      ++count;

      window.location.reload();

      localStorage.setItem("cart", JSON.stringify(arr));
      localStorage.setItem("cnt", JSON.stringify(count));
    };
    var btn2 = document.createElement("button");
    btn2.innerText = "-";
    btn2.setAttribute("id", "btn2");

    btn2.onclick = () => {
      if (elem.quantity < 2) {
        window.location.reload();
        remove(index);
      } else {
        qua.innerText = --elem.quantity;
        --count;
        console.log(elem.quantity);

        localStorage.setItem("cart", JSON.stringify(arr));

        localStorage.setItem("cnt", JSON.stringify(count));
        window.location.reload();
      }
    };

    var cartdiv1 = document.createElement("div");
    cartdiv1.setAttribute("id", "cartdiv1");

    var cut_name = document.createElement("div");
    cut_name.setAttribute("id", "cut_name");
    cut_name.append(num, name);
    cartdiv1.append(cut_name, btn);

    var wpid = document.createElement("div");
    wpid.setAttribute("id", "wpid");
    var wpid1 = document.createElement("div");
    wpid1.setAttribute("id", "wpid1");
    wpid1.append(wgt, pric);
    var wpid2 = document.createElement("div");
    wpid2.setAttribute("id", "wpid2");
    wpid2.append(btn2, qua, btn1);

    wpid.append(wpid1, wpid2);

    div1.append(cartdiv1, wpid);

    // border-bottom: ;

    box.append(div1);
    var directChildren = box.children.length;
    // console.log(directChildren);
    if (directChildren > 1) {
      div1.style.borderTop = " 1px solid gray";
    }
  });
  var sidepanel = document.querySelector("#sidepanel");
  // <div id="empty">add somthing</div>
  var empty = document.createElement("div");
  empty.setAttribute("id", "empty");
  var emptyimage = document.createElement("img");
  emptyimage.setAttribute("id", "emptyimage");

  emptyimage.src = "https://www.licious.in/img/rebranding/empty_cart_icon.png";

  var para = document.createElement("p");
  para.setAttribute("id", "emptypara");

  para.innerText = "Your cart awaits your next meal";
  var emptybtn = document.createElement("button");
  emptybtn.innerText = "Continue Shopping";
  emptybtn.setAttribute("id", "emptybtn");
  emptybtn.onclick = () => {
    closeNav();
  };

  empty.append(emptyimage, para, emptybtn);
  if (arr.length < 1) {
    sidepanel.innerHTML = null;
    sidepanel.style.height = "690px";

    sidepanel.append(empty);
  } else {
    empty.innerHTML = null;
  }
  var Tot = Number(WholeTotal.innerHTML);
  localStorage.setItem("wholeTotal", Tot);
}
appendfunc();

function remove(index) {
  count--;
  arr.splice(index, 1);

  localStorage.setItem("cart", JSON.stringify(arr));
  localStorage.setItem("cnt", JSON.stringify(count));
  window.location.reload();
}

function openNav() {
  document.getElementById("cross_sidepanel").style.width = "500px";
}

function closeNav() {
  document.getElementById("cross_sidepanel").style.width = "0";
}

function ScrollToBottom() {
  window.scrollTo(0, document.querySelector("#sidepanel").scrollHeight);
}

function Opencheckoutslider() {
  document.querySelector("#aftercheckout").style.width = "420px";
  document.querySelector(".closebtn").style.display = "block";
  document.querySelector("input").style.display = "block";
  document.querySelector("#headingandlink").style.display = "block";
}
function Closecheckoutslider() {
  document.querySelector("#aftercheckout").style.width = "0";
  document.querySelector(".closebtn").style.display = "none";
  document.querySelector("input").style.display = "none";

  document.querySelector("#headingandlink").style.display = "none";
  alert("Payment Successful");
}


let cart = document.getElementById('cart');

cart.addEventListener('click',xyz);

function myFn () {
  window.location.href = 'cart.html';
}


let checkout = document.getElementById('proceedtocheck');

checkout.addEventListener('click',checkout);

function checkout() {
  window.location.href = "payment.html";
}