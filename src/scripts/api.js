
console.log("this is api.js")

//this is only returning a promise in this state
function getMenuItems() {
    return fetch("http://localhost:8088/menu_items")
        .then(menuData => menuData.json())
}

function getHeatLevels() {
    return fetch("http://localhost:8088/heat_levels")
        .then(heatData => heatData.json())   
}

export {getMenuItems, getHeatLevels}