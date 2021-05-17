/*

This is how an item object should look like

{
      id: "001-beetroot", <- the item id matches the icon name in the assets/icons folder
      name: "beetroot",
      price: 0.35 <- You can come up with your own prices
    }

*/

// Description
// In this exercise we explore a common scenario in eCommerce, adding and removing items from the cart, and calculating the total.

// Deliverables
// - A user can view a selection of items in the store
// - From the store, a user can add an item to their cart
// - From the cart, a user can view and adjust the number of items in their cart
//     - If an item's quantity equals zero it is removed from the cart
// - A user can view the current total in their cart

// Instructions
// - Use this template as a starting point => https://codesandbox.io/s/js-exercise-greengrocer-template-grqi6
// - Create a state object
// - Create action functions that update state
// - Create render functions that read from state

// Tips
// - Start with the logic first, use console.log(state) to check your logic is working; when the logic is working as expected move onto styling
// - Taking HTML semantics into consideration, use a button when an action is happening on the same page





// - Create a state object

const state = {
  products : 
  [
  {
    id: 1,
    name: "beetroot",
    img: String.raw`assets/icons/001-beetroot.svg`,
    addedToBasket: false
  },
  {
    id: 2,
    name: "carrot",
    img: String.raw`assets/icons/002-carrot.svg`,
    addedToBasket: false
  },
  {
    id: 3,
    name: "apple",
    img: String.raw`assets/icons/003-apple.svg`,
    addedToBasket: false
  },
  {
    id: 4,
    name: "apricot",
    img: String.raw`assets/icons/004-apricot.svg`,
    addedToBasket: false
  },
  {
    id: 5,
    name: "avocado",
    img: String.raw`assets/icons/005-avocado.svg`,
    addedToBasket: false
  },
  {
    id: 6,
    name: "bananas",
    img: String.raw`assets/icons/006-bananas.svg`,
    addedToBasket: false
  },
  {
    id: 7,
    name: "bell-pepper",
    img: String.raw`assets/icons/007-bell-pepper.svg`,
    addedToBasket: false
  },
  {
    id: 8,
    name: "berry",
    img: String.raw`assets/icons/008-berry.svg`,
    addedToBasket: false
  },
  {
    id: 9,
    name: "blueberry",
    img: String.raw`assets/icons/009-blueberry.svg`,
    addedToBasket: false
  },
  {
    id: 10,
    name: "eggplant",
    img: "assets/icons/010-eggplant.svg",
    addedToBasket: false
  }
  ],

inCart: []
}


const itemList = document.querySelector(".item-list.store--item-list")

for (const fruit of state.products){
  
  const listEl = createListEl(fruit)

  itemList.append(listEl)
}

const cartList = document.querySelector(".item-list.cart--item-list")

function createListEl (fruit) {
  const listEl = document.createElement("li")
  const imgEl = document.createElement("img")
  imgEl.setAttribute("src", fruit.img)
  imgEl.setAttribute("alt", fruit.name)
  const cartBtn = document.createElement("button")
  cartBtn.innerText = `Add to Basket`

  
  
  listEl.append(imgEl, cartBtn)
  
  cartBtn.addEventListener("click" , function(){
    state.inCart.push(state.products.indexOf(id: fruit.id))
    console.log(state)
  })
  return listEl
}

