// As an extra challenge, you can build the product listings
// by looping over this array and creating HTML for each element.
// This will be best accomplished after we do lesson 09.
var products = [
  {
    "name": "Reversible Plaid",
    "price": 26.99,
    "description": "Two classic patterns in one great look: This supersoft and cozy reversible scarf instantly doubles your street-style cred. 100% acrylic.",
    "imageTitle": "reversible-plaid.jpg"
  },
  {
    "name": "Wool Cable Knit",
    "price": 49.99,
    "description": "Warm yourself with this women's natural cable knit scarf, crafted from 100% Merino wool. Imported.",
    "imageTitle": "wool-cable.jpeg"
  },
  {
    "name": "Northern Lights",
    "price": 29.99,
    "description": "Handmade by women in Agra, sales provide medical and educational support in this remote area of India. Crinkly 100% cotton.",
    "imageTitle": "northern-lights.jpg"
  },
  {
    "name": "Ombre Infinity",
    "price": 11.99,
    "description": "A dip-dye effect adds color and dimension to a cozy infinity scarf featuring a soft, chunky knit. 100% acrylic.",
    "imageTitle": "ombre-infinity.jpg"
  },
  {
    "name": "Fringed Plaid",
    "price": 18.99,
    "description": "Generously sized, extra soft and featuring a dazzling fringe, this scarf is rendered in a versatile gray, black and white plaid. Expertly beat the cold with style. 100% acrylic.",
    "imageTitle": "fringed-plaid.jpeg"
  },
  {
    "name": "Multi Color",
    "price": 22.99,
    "description": "The Who What Wear Oversize Color-Block Square Scarf is big, bold, and designed to twist and wrap any way you wish. All the colors of the season are harmonized in this oversize accent, so you can adjust to contrast or match your outfit; soft and lush, it’s your stylish standoff against cold AC and unexpected fall breezes. 100% acrylic",
    "imageTitle": "multi-color.jpeg"
  },
  {
    "name": "Etro Paisley-Print Silk",
    "price": 249.99,
    "description": "Luxurious silk scarf with subtle paisley pattern. 100% silk",
    "imageTitle": "etro.png"
  },
  {
    "name": "Ashby Twill",
    "price": 70.99,
    "description": "Faribault brings you the Ashby Twill Scarf in Natural. Woven with a 'broken' twill technique, the Ashby Twill Scarf has a slight zigzag texture. Made in USA, this timeless scarf is crafted with luxurious merino wool and finished with heather gray fringe. 100% Merino wool",
    "imageTitle": "twill.jpg"
  }
]

function capture() {

event.preventDefault(); //stops form submit
console.log("Form Submitted")

/*
// Name 
var theName = document.custInfo.name.value; 
console.log(theName);
*/

//Email address & console log the results 
var theEmail = document.getElementById("myEmail").value;
console.log("Thank you for signing up for our mailing list. We will send future promotions to your email address " + theEmail);

}




// Global variable for Shopping Cart 
// cart will be a global array with the names of the clothing items 

var roundedCost = Math.round(100*totalCost)/100;
var cart = []; 
var totalCount = 0; 
var totalCost = 0; 





// click (+sign) button on webpage to increment the count of items in the cart and push name of clothing item to cart array 

function addItem(name, cost){
  

 
if (cart.indexOf(name) <= -1) {

  cart.push(name); 
  totalCount = totalCount + 1; 
  totalCost += cost; 

  console.log(name, totalCount + " item(s) " + totalCost )
} 

else { console.log("Item is already added to cart")

  
}
}



// Subtract clothing and count using subtract - button in webpage

function subtractItem(name,minusCost) {


if(cart.indexOf(name) > -1) {

myIndex = cart.indexOf(name)


cart.splice(myIndex, 1);  
totalCount = totalCount - 1; 
totalCost -= minusCost; 

console.log(cart.toString(), totalCount + " item(s)" + totalCost)

}

else{ console.log("item already removed from cart")


}
}


// Provide the contents of the global variable "cart", when ShoppingCart icon is pressed

function  shoppingCart() { 

if(cart.length > 0) {

console.log(cart.toString())

} 


else {
  console.log("There are no items in your cart")


}
}












