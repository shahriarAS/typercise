// Element Grab

const textRef = document.getElementById("typing-ref")
const textInput = document.getElementById("typing-input")
const textInputShowcase = document.getElementById("typing-input-showcase")

const refText = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam totam
eos, alias adipisci atque asperiores explicabo corrupti, porro beatae
facilis ad cum praesentium pariatur deleniti natus quos eum odit.
Saepe.`

refText.split("").forEach(let => {
    let letterSpan = document.createElement("span")
    if (let == " ") {
        letterSpan.innerHTML = "&nbsp;"
    } else {
        letterSpan.innerText = let
    }

    textRef.appendChild(letterSpan)
})

function onType() {
    const typed = textInput.value
    const lastTypedLetter = typed[typed.length - 1]
    const lastRefLetter = textRef.childNodes[typed.length - 1]

    lastRefLetter.style.color = "white"

    if (lastTypedLetter !== lastRefLetter.textContent) {
        console.log("Wrong")
    }

    textInputShowcase.innerHTML = ""

    typed.split("").forEach(let => {
        let typedLetterSpan = document.createElement("span")
        if (let == " ") {
            typedLetterSpan.innerHTML = "&nbsp;"
        } else {
            typedLetterSpan.innerText = let
        }
    
        textInputShowcase.appendChild(typedLetterSpan)
    })

    // console.log("From Ref: ", lastRefLetter.textContent)
    // console.log("From Input: ", lastTypedLetter)
}

textInput.addEventListener("input", () => {
    onType()
})