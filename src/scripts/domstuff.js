
//this function generates the HTML component to be made
function makeMenuItemComponent(menuItem) {
    return `
        <li><img><h3>${menuItem.name}: ${menuItem.price}</h3><button>order</button></li>
    `
};

//take a bunch of components and enter them into the DOm
function listMenuItems(menuComponent) {
    menuComponent.forEach(component => {
        document.querySelector("#menu-list").innerHTML += component
    })
};

function makeHeatLevelComponent(heatObj) {
    return `
        <li><input type="radio" name ="heat"><h3>${heatObj.name}</h3></li>
    `
}

function listHeatItems(menuComponent) {
    menuComponent.forEach(component => {
        document.querySelector("#heat-list").innerHTML += component
    })
};
export { makeMenuItemComponent, listMenuItems, makeHeatLevelComponent, listHeatItems }