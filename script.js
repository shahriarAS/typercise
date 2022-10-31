// Element Grab

const textRef = document.getElementById("typing-ref")
const textInput = document.getElementById("typing-input")


const typingRefText = [...textRef.textContent]

// typingRefText.forEach(eachLetter => {
//     console.log(eachLetter)
// })

function onType() {
    const typed = textInput.value
    console.log(typed[typed.length - 1])
}