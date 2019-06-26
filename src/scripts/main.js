import { getMenuItems } from "./api.js"
import { makeMenuItemComponent, listMenuItems } from "./domstuff.js"


console.log("this is main.js")

//this shows the promise (pending) of the info in an array of objects
// console.log(getMenuItems())


//this calls the funciton of the fetch/promise  
getMenuItems()
    .then(menuItems => {
        console.log(menuItems)
        //loop through menuItems and turn them into html components
        let componentArray = menuItems.map((oneMenuItemObj) => makeMenuItemComponent(oneMenuItemObj))
        console.log(componentArray)
        //add the menu item components to the DOm
        listMenuItems(componentArray)
    })


// //common error where they don't use the .then, getMenuItems only make a promise
// let stuff = getMenuItems
// stuff.forEach(thing => console.log(thing))