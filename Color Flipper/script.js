const body = document.getElementsByTagName("body")[0] //we are using getElementsByTagName. First element in our array is body element.We're chosing the first element in the array which is [body].

function setColor(name) {
    body.style.backgroundColor = name;
}

function randomColor() {
    const green = Math.round(Math.random() * 255)
    const red = Math.round(Math.random() * 255)
    const blue = Math.round(Math.random() * 255)

    const color = `rgb(${red}, ${green}, ${blue})`
    body.style.backgroundColor = color;
}