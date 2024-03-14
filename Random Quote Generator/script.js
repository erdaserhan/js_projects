const quotes = [
    "The only way to do great work is to love what you do.",
    "Life is what happens when you're busy making other plans." ,
    "The future belongs to those who believe in the beauty of their dreams." ,
    "It does not matter how slowly you go as long as you do not stop.",
    "In the end, it's not the years in your life that count. It's the life in your years.",
    "The purpose of our lives is to be happy.",
    "Get busy living or get busy dying.",
    "You only live once, but if you do it right, once is enough.",
    "Many of life's failures are people who did not realize how close they were to success when they gave up.",
    "If you want to live a happy life, tie it to a goal, not to people or things." 
]

const usedIndexes = new Set() //Creates a new Set class
const quoteElement = document.getElementById("quote")

function generateQuote() {
    if(usedIndexes.size >= quotes.length){
        usedIndexes.clear()
    } // it checks that if we have used all of the indexes inside the array quotes, we clear all the values inside the Set(). Otherwise we are gonna have an infinite loop because we already used all of the indexes.

    while(true) {
        const randomIdx = Math.floor(Math.random() * quotes.length)
        if(usedIndexes.has(randomIdx)) continue  //if usedIndexes has the index of randomIdx which means we have already used this index; We restart the while loop again. If it is not the case, the code continious the check the code below.

        const quote = quotes[randomIdx]
        quoteElement.innerHTML = quote;
        usedIndexes.add(randomIdx) //Add this randomIdx to usedIndexes array so we do not use it again.
        break  // Should use break to not have a infinite loop.
    }   
}