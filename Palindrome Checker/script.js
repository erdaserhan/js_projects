const input = document.getElementById("input")

function reverseString(str) {
    return str.split("").reverse().join("") //The split() method divides the string into an array of characters, reverse() reverses the array, and join() combines the reversed characters into a new string, effectively reversing the original string.
}

function check() {
    const value = input.value;
    const reverse = reverseString(value)

    if(value === reverse) {
        alert("P A L I N D R O M E")
    }else {
        alert("Not Today")
    }
    input.value = "";
}