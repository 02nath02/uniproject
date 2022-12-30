const phones=[
    {name:"Pixel 6a", memory:"128", color:["white","green","black"], price:"399", brand:"Google", imgName:'iphone.jpg'},

    {name:"Pixel 6 Pro", memory:"256", color:"black", price:"749", brand:"Google", imgName:'iphone.jpg'},

    {name:"Iphone 12 Pro", memory:"512", color:["gold","gray","silver"], price:"1149", brand:"Apple", imgName:'iphone.jpg'},

    {name:"Iphone SE 2020", memory:"64", color:["red","white"], price:"349", brand:"Apple", imgName:'iphone.jpg'},

    {name:"Iphone 13 Mini", memory:"256", color:["black","blue","white","pink"], price:"399", brand:"Apple", imgName:'iphone.jpg'},

    {name:"G82", memory:"128", color:"gray", price:"249", brand:"Motorola", imgName:'iphone.jpg'},

    {name:"Moto E30", memory:"32", color:["blue","gray"], price:"89", brand:"Motorola", imgName:'iphone.jpg'},

    {name:"Galaxy S22 Plus", memory:"128", color:["black","green","white","pink"], price:"949", brand:"Samsung", imgName:'iphone.jpg'},

    {name:"Galaxy A13", memory:"64", color:["black","white"], price:"129", brand:"Samsung", imgName:'iphone.jpg'},

    {name:"105", memory:"4", color:["black","blue","pink"], price:"25", brand:"Nokia", imgName:'iphone.jpg'},
    
  ];
// function brand(){
//     const searchTerm=document.querySelector("#search").value;
//     const matchingphones = phones.filter(function(phone){
//         if(phone.brand == searchTerm){
//             return true;
//         }
//         return false;
//     });
//     const phonesdiv = document.querySelector("#sec6");

// matchingphones.forEach(function(phone){
//       const newParagraph = document.createElement("p");
//       newParagraph.textContent = `The matching phones are ${phone.name} with a memory pf ${phone.memory} price ${phone.price} and color ${phone.color}.`;    
//       phonesdiv.appendChild(newParagraph);
// })};

// function processForm(){
// 	const termsChkBox=document.querySelector("#apple");   
//  	if(termsChkBox.checked){
//         		console.log("You have agreed to the terms and con");
//    	}else{
//    		console.log("You don't agree");
//    	}
// }

// function processForm(){
//     const chkBoxes = document.querySelectorAll('input[type="checkbox"]:checked'); 
//     const selectedItems = []; 
//     chkBoxes.forEach(function(chkBox){ 
//            selectedItems.push(chkBox.value); 
//      })
//      console.log(selectedItems);
// }

const selectedcost = document.querySelector("#Cost");
const maxPrice = document.querySelector('#price');
selectedcost.addEventListener('input', function(){
  maxPrice.innerHTML = `£${selectedcost.value}`;
})

let brands = [];
let memorys;
let colors;
let prices;
let filteredphones = [];



function allphones(){
  brands= [];
 filteredphones = []

 const phonesdiv = document.querySelector("#sec6");
  phonesdiv.innerHTML = '';

 const selectedbrands = Array.from(document.querySelectorAll(".brandcheck"))
 selectedbrands.forEach(function(brand){
  if(brand.checked)
  {
    brands.push(brand.value);
  }
 })
 console.log(brands);

 const selectedmemory = document.querySelector("#Memory");
 memorys = selectedmemory.value;
 console.log(memorys)

 const selectedcolor = document.querySelector(".colourcheck");
 colors = selectedcolor.value;
 console.log(colors);

 prices = selectedcost.value;
 console.log(prices)

 const matchingphones = phones.filter(function(phone){
          if(phone.brand == brands){
              return true;
          }
      });

      matchingphones.forEach(function(phone){
              const newParagraph = document.createElement("p");
              newParagraph.textContent = `The matching phones are ${phone.name} with a memory of ${phone.memory} price ${phone.price} and color ${phone.color}.`;    
              phonesdiv.appendChild(newParagraph);
        })};


const btn = document.querySelector("#filterAll");
btn.addEventListener("click",function(){
  allphones();
})




// const phonesdiv = document.querySelector("#sec6");

// matchingphones.forEach(function(phone){
//       const newParagraph = document.createElement("p");
//       newParagraph.textContent = `The matching phones are ${phone.name} with a memory pf ${phone.memory} price ${phone.price} and color ${phone.color}.`;    
//       phonesdiv.appendChild(newParagraph);
// });










//   const selectedItems = []; 

//   function processForm(){
//     const chkBoxes = document.querySelectorAll('input[type="checkbox"]:checked'); 
//     chkBoxes.forEach(function(chkBox){ 
//         selectedItems.push(chkBox.value); 
//     })
//     console.log(selectedItems);
// }
// const btn =  document.getElementById("brand");

// btn.addEventListener("change", () =>{
// 	processForm();
//     phonebrand();
  

// })







