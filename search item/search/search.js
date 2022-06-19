let id

function append(){
    document.getElementById("first_data").innerHTML=null

    let append_div=document.getElementById("Append")
    append_div.innerHTML=null
   let q=document.getElementById("search").value
   if(q===null){
append_div.innerHTML=""
   }

    for(let i=0; i<20;i++){
       let div=document.createElement("div")
     div.setAttribute("class","flex")
     let div1=document.createElement("div")
     var img=document.createElement("img")


     let div2=document.createElement("div")
     var p=document.createElement("p")
     var p1=document.createElement("p")
     
     if(i===0)
    {
      img.src="https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/7a21a24c-e6de-5176-9f45-4fbc0d692a06/original/Mutton-Soup-Bones--Hero-Shot.jpg"
     img.style.height="100px"
     img.style.width="100px"
     p.innerText="Muttonsoup bones|21-26 pieces"
     p1.innerText="₹200"
    } 
    if(i===1)
    {
      img.src="https://d2407na1z3fc0t.cloudfront.net/prodDev/pr_ikuk3im2bid/34/prod_display_image/1634311648.2104--2021-10-1520:57:28--905"
     img.style.height="100px"
     img.style.width="100px"
     p.innerText="Lucknowi Mutton kabab|4 pieces"
     p1.innerText="₹410"
    } 
    if(i===2)
    {
      img.src="https://d2407na1z3fc0t.cloudfront.net/prodDev/pr_ikuk3im1dc7/34/prod_display_image/1623765451.812--2021-06-1519:27:31--738"
     img.style.height="100px"
     img.style.width="100px"
     p.innerText="Hyderabadi Shami Kabab|6 pieces"
     p1.innerText="₹300"
    } 
    if(i===3)
    {
      img.src="https://d2407na1z3fc0t.cloudfront.net/prodDev/pr_inuk3ilznwg/34/prod_display_image/1634310457.63--2021-10-1520:37:37--905"
     img.style.height="100px"
     img.style.width="100px"
     p.innerText="Purani Delhi ki kabab|4 pieces"
     p1.innerText="₹430"
    } 
    if(i===4)
    {
      img.src="https://dao54xqhg9jfa.cloudfront.net/ProductMerchantdising/c3edf37b-9d11-8043-43a9-ed90e4ab3a53/original/1601044842.518--2020-09-2520_10_42--472.jpeg"
     img.style.height="100px"
     img.style.width="100px"
     p.innerText="Galouti Kabab|8 pieces"
     p1.innerText="₹306"
    } 
    if(i===5)
    {
      img.src="https://d2407na1z3fc0t.cloudfront.net/prodDev/pr_ikuk3im1dc7/34/prod_display_image/1623765451.812--2021-06-1519:27:31--738"
     img.style.height="100px"
     img.style.width="100px"
     p.innerText="Hyderabadi Shami Kabab|6 pieces"
     p1.innerText="₹330"
    } 
    if(i===6)
    {
      img.src="https://d2407na1z3fc0t.cloudfront.net/prodDev/pr_576360a8b87f1/34/prod_display_image/1634576733.0404--2021-10-1822:35:33--1818"
     img.style.height="100px"
     img.style.width="100px"
     p.innerText="Mutton Liver Chunks|10 pieces"
     p1.innerText="₹150"
    } 
    if(i===7)
    {
      img.src="https://dao54xqhg9jfa.cloudfront.net/ProductMerchantdising/c3edf37b-9d11-8043-43a9-ed90e4ab3a53/original/1601044842.518--2020-09-2520_10_42--472.jpeg"
     img.style.height="100px"
     img.style.width="100px"
     p.innerText="Cutlet Mutton|4 pieces"
     p1.innerText="₹399"
    }
    if(i===8)
    {
      img.src="https://dao54xqhg9jfa.cloudfront.net/ProductMerchantdising/4c41fa1c-d190-2f89-d68d-bc4ef5d80281/original/1574106937.0842--2019-11-1901_25_37--260.jpeg"
     img.style.height="100px"
     img.style.width="100px"
     p.innerText="Mutton Kidney Chunks|10 pieces"
     p1.innerText="₹450"
    } 
    if(i===9)
    {
      img.src="https://d2407na1z3fc0t.cloudfront.net/prodDev/pr_blnkrc0nbpz/34/prod_display_image/1627368227.3481--2021-07-2712:13:47--738"
     img.style.height="100px"
     img.style.width="100px"
     p.innerText="Butter Fish|3 pieces"
     p1.innerText="₹280"
    } 
    if(i===10)
    {
      img.src="https://d2407na1z3fc0t.cloudfront.net/prodDev/pr_156ko17lb9z/34/prod_display_image/1620095732.3083--2021-05-0408:05:32--738"
     img.style.height="100px"
     img.style.width="100px"
     p.innerText="Chunky Honey-Mustard Chicken Spread"
     p1.innerText="₹370"
    } 
    if(i===11)
    {
      img.src="https://d2407na1z3fc0t.cloudfront.net/prodDev/pr_4q4jya5s665/34/prod_display_image/1631511034.4612--2021-09-1311:00:34--1818"
     img.style.height="100px"
     img.style.width="100px"
     p.innerText="Chunky Garlic-Mustard Mutton Spread"
     p1.innerText="₹290"
    } 
    if(i===12)
    {
      img.src="https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/2b1cacc7-bf44-d185-1c47-57e069d44ad3/original/Sweet-Pepper-Mustard-Tag-Shot.jpg"
     img.style.height="100px"
     img.style.width="100px"
     p.innerText="Sweet Pepper Mustard Chicken Spread"
     p1.innerText="₹240"
    } 
    if(i===13)
    {
      img.src="https://d2407na1z3fc0t.cloudfront.net/prodDev/pr_4cyjya5x2cn/34/prod_display_image/1631602420.6142--2021-09-1412:23:40--1818"
     img.style.height="100px"
     img.style.width="100px"
     p.innerText="Chunky Garlic-Mustard Mutton Spread"
     p1.innerText="₹299"
    } 
    if(i===14)
    {
      img.src="https://d2407na1z3fc0t.cloudfront.net/prodDev/pr_nbxks91rj3q/34/prod_display_image/1632914440.7111--2021-09-2916:50:40--1818"
     img.style.height="100px"
     img.style.width="100px"
     p.innerText="Mackrel(Bangda)-Small|5-6 pieces"
     p1.innerText="₹399"
    } 
    if(i===15)
    {
      img.src="https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/0d150f2e-0701-6648-8437-af02e14842f9/original/Tilapia.jpg"
     img.style.height="100px"
     img.style.width="100px"
     p.innerText="Tilapia(Koyaa)small|6 pieces"
     p1.innerText="₹200"
    } 
    if(i===16)
    {
      img.src="https://d2407na1z3fc0t.cloudfront.net/prodDev/pr_meyku6qkfod/34/prod_display_image/1634575271.6243--2021-10-1822:11:11--1818"
     img.style.height="100px"
     img.style.width="100px"
     p.innerText="Seer(Ser Macch)Medium|10 pieces"
     p1.innerText="₹190"
    } 
    if(i===17)
    {
      img.src="https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/106c6f98-e9c3-9fc2-537f-f1a9753010bf/original/Angara-Murgh-Tikka+New+Tag.jpg"
     img.style.height="100px"
     img.style.width="100px"
     p.innerText="Angara Murg Tikka|6-8 pieces"
     p1.innerText="₹399"
     
    } 
    if(i===18)
    {
      img.src="https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/28501471-ca3e-5b29-65e6-aa80b162a55c/original/uncooked.jpg"
     img.style.height="100px"
     img.style.width="100px"
     p.innerText="Afgani Sik Kabab|4-5 pieces"
     p1.innerText="₹300"
     
    } 
    if(i===19)
    {
      
      img.src="https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/3f08bce4-8a38-2b1f-cc4f-1318fd1f3303/original/WhatsApp_Image_2022-06-07_at_9.04.34_PM.jpeg"
     img.style.height="100px"
     img.style.width="100px"
     p.innerText="Haryali Murg Tikka|6 pieces"
     p1.innerText="₹300"
    
     
    } 
    
     div1.append(img)
     div2.style.marginLeft="10px"
     div2.style.marginTop="-18px"
    var bt=document.createElement("button")
    bt.innerText="Add to Cart"
    bt.style.backgroundColor="red"
    bt.style.color="white"
    bt.addEventListener("click", myFunction);

    function myFunction() {
      alert ("Item added successfully!");
      var item= new Cons(img.src,p.innerText,p1.innerText)
      // console.log(item)
      var product=[]
      product.push(item)
      localStorage.setItem("product",JSON.stringify(product))||[]
      
    }
    
     div2.append(p,p1,bt)
     div.append(div1,div2)
     append_div.append(div)

    }
    
}



function Cons(i,a,b){
  this.image=i;
  this.name=a;
  this.price=b;

}




   function debounce(func,delay){
      if(id){
          clearTimeout(id)
      }
   id=setTimeout(function(){
      func()
  },delay)
  }
