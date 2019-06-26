console.log("this is api.js")

fetch("http://localhost:8088/menu_items")
.then( menuData => menuData.json())
.then( menuItems => {
    console.log("food!", menuItems)
})

let foo = "bar"