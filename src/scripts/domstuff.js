
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

export {makeMenuItemComponent, listMenuItems}