let items = [];

const itemsDiv = document.getElementById("items")

function renderItems() {
    itemsDiv.innerHTML = null; 

    //The Object.entries() static method returns an array of a given object's own enumerable string-keyed property key-value pairs.
    for (const [idx, item] of Object.entries(items)){
        const container = document.createElement("div")//We create new div container with DOM.
        container.style.marginBottom = "10px"

        const text = document.createElement("p")
        text.textContent = item;

        const button = document.createElement("button")
        button.textContent = "Delete";
        button.onclick = () => removeItem(idx) // ()=> call this function in another function. Otherwise it is gonna call the removeItem functon automatically.

        itemsDiv.appendChild(text)
    }
}

function loadItems() {

}

function saveItems() {
    
}

function addItem() {
    
}

function removeItem(idx) {
    
}