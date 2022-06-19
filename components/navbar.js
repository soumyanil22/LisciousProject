
function navbar () {
    return `
    <img src="https://www.licious.in/img/rebranding/licious-logo.svg" alt="licious-logo">
        <img src="https://www.licious.in/img/rebranding/location_icon.svg" alt="location_icon">
        <div>
            <h4>Bangaluru</h4>
            <p>Bangalore,Karnataka,India</p>
        </div>
        <img src="https://www.licious.in/img/rebranding/down-arrow.png" alt="down-arrow">
        <input type="text" id="search" placeholder="Search for any delicious product">
        <img src="https://www.licious.in/img/rebranding/search_icon.svg" alt="search_icon">
        <img src="https://www.licious.in/img/rebranding/profile_icon.svg" alt="profile_icon">
        <p id="login">Login</p>
        <img src="https://www.licious.in/img/rebranding/cart_icon.svg" alt="cart_icon">
        <p id="cart" onclick="myFn()">Cart</p>`
}

function product () {
    return `<div class="product">
    <img src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/59724ce1-1f3d-f1f4-c688-c05a0005c8de/original/Circle@3x-16.png?format=webp"
        alt="today's deals">
    <div class="details">
        <p>Today's Deals</p>
    </div>
</div>
<div class="product" id="chicken">
    <img src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/c777a59e-f2f7-dd37-9ba0-7f385aed3eb3/original/Circle@3x.png?format=webp"
        alt="chicken">
    <div class="details">
        <p>Chicken</p>
    </div>
</div>
<div class="product">
    <img src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/e13f894d-d51e-beea-4ef5-aab1a193d373/original/Circle@3x-13.png?format=webp"
        alt="fish">
    <div class="details">
        <p>Fish & Seafood</p>
    </div>
</div>
<div class="product">
    <img src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/4d9c0c72-c070-dd56-4a2e-9fbfe8230f42/original/Circle@3x-1.png?format=webp"
        alt="mutton">
    <div class="details">
        <p>Mutton</p>
    </div>
</div>
<div class="product">
    <img src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/450e3217-59ac-8145-3bee-296e729f03bf/original/Circle@3x-17.png?format=webp"
        alt="pan">
    <div class="details">
        <p>Ready To Cook</p>
    </div>
</div>
<div class="product">
    <img src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/f7ef9035-9baa-b9b5-d56d-97059ffe6c39/original/Circle@3x-18.png?format=webp"
        alt="prawns">
    <div class="details">
        <p>Prawns</p>
    </div>
</div>
<div class="product">
    <img src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/2569efa2-90ca-533c-e7c2-48330c4b3a59/original/Circle@3x-21.png?format=webp"
        alt="cold-cuts">
    <div class="details">
        <p>Cold Cuts</p>
    </div>
</div>
<div class="product">
    <img src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/7b500ec8-8001-436b-74ca-430fd4e2ff0b/original/Circle@3x-14.png?format=webp"
        alt="spreads">
    <div class="details">
        <p>Spreads</p>
    </div>
</div>
<div class="product">
    <img src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/27cf80b9-2a8f-d70d-7695-8142c85e5bcb/original/Circle@3x-2.png?format=webp"
        alt="eggs">
    <div class="details">
        <p>Eggs</p>
    </div>
</div>
<div class="product">
    <img src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/c7cde9d8-4e31-8ea5-79a4-cce48c7ed109/original/Circle@3x-15.png?format=webp"
        alt="kebabs & tandoor">
    <div class="details">
        <p>Kebabs & Tandoor</p>
    </div>
</div>
<div class="product">
    <img src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/3130cc9b-71e5-ff33-d413-9fcda531afac/original/Circle@3x-20.png?format=webp"
        alt="combos">
    <div class="details">
        <p>Combos</p>
    </div>
</div>
<div class="product">
    <img src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/fc961d16-990b-31de-e3ec-648858625bed/original/v_copy_3@3x_(2).png?format=webp"
        alt="lunchbox-specials">
    <div class="details">
        <p>Lunchbox Specials</p>
    </div>
</div>
<div class="product">
    <img src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/6455adfa-c60e-6c6a-9a60-a9a291bf6121/original/Circle@3x-17.png?format=webp"
        alt="snacks">
    <div class="details">
        <p>Snacks</p>
    </div>
</div>`
}

export {navbar,product} ;