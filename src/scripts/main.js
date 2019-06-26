import { getMenuItems, getHeatLevels } from "./api.js"
import { makeMenuItemComponent, listMenuItems, makeHeatLevelComponent, listHeatItems } from "./domstuff.js"


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
getHeatLevels()
.then(heatdata => {
    console.log(heatdata)
    let heatArray = heatdata.map((oneHeatObj) => makeHeatLevelComponent(oneHeatObj))
    listHeatItems(heatArray)
})
// //common error where they don't use the .then, getMenuItems only make a promise
// let stuff = getMenuItems
// stuff.forEach(thing => console.log(thing))