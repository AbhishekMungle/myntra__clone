

let bagItem;
onload();
function onload(){
    let bagstring=localStorage.getItem("bagItem");
    bagItem=  bagstring ? JSON.parse(bagstring):[];
    localStorage.removeItem("bagItem");
    bagcount();

    display(); 
}

function addtobag(itemID){
 bagItem.push(itemID);
 localStorage.setItem("bagItem", JSON.stringify(bagItem));
 bagcount()

}
function bagcount(){
let bagcount=document.querySelector(".bag-count");
if(bagItem.length > 0){
    bagcount.style.visibility="visible";
bagcount.innerText=bagItem.length;
} 
else{
    bagcount.style.visibility="hidden";
  }
}
function display(){
    let itemcard=document.querySelector(".items-container");
    if(! itemcard){
        return
    }
let innerHTML=" ";
items.forEach(item => {
    innerHTML +=`
   <div class="item-container">
         <img class="item-ing" src="${item.image}" alt="">
        <div class""main>
         <div class="rating"> ${item.rating.  stars} ⭐ |${item.rating.count}k </div>
         <div class="company-name">${item.company}</div>
         <div class="item-name">${item. item_name}</div>
         <div class="prices">
              <span class="curr-price"> Rs${item.current_price}</span>
             <span class="orignal-prise">Rs${item.original_price}</span>
             <span class="discount">(${item.discount_percentage}% OFF)</span>
        </div>
        </div>
         <button class="btn-add-bag" onclick="addtobag(${item.id});"> Add to bag</button>
    </div>
`
});
itemcard.innerHTML=innerHTML;

}
