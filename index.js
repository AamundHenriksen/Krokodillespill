const container = document.getElementById("container")
let randomNumber1 = ""
let randomNumber2 = ""
let points = 0
let message = `Bruk >, < eller = for å løse oppgaven og få riktig svar!`

console.log(message)

renderView()

function htmlPage() {

    container.innerHTML = `
    <p>Poeng: ${points}</p>
    <img src="images/crocodile.png">
    <p>${randomNumber1}</p>
    <input type="text" id="inputbox" maxlength=1>
    <p>${randomNumber2}</p>
    <button onclick="checkValue()">Submit</button>
    <button onclick="generateRandomNumber()">Reset</button>
    <p>${message}</p>
    `
}

function renderView() {
    generateRandomNumber()
    htmlPage()
}

function checkValue() {
    let inputBox = document.getElementById("inputbox").value

    if (randomNumber1 > randomNumber2 && inputBox === ">") {

        points++
        message = `Du gjettet riktig svar og fikk ett poeng!`
        console.log(message)
        generateRandomNumber()

    } else if (randomNumber1 < randomNumber2 && inputBox === "<") {

        points++
        message = `Du gjettet riktig svar og fikk ett poeng!`
        console.log(message)
        generateRandomNumber()

    } else if (randomNumber1 === randomNumber2 && inputBox === "=") {

        points++
        message = `Du gjettet riktig svar og fikk ett poeng!`
        console.log(message)
        generateRandomNumber()
        
    } else if (inputBox === "") {

        message = `Har du husket å skrive inn >, < eller = ?`
        console.log(message)
        htmlPage()

    } else {

        points--
        message = `Du gjettet feil svar og mistet ett poeng! Prøv igjen!`
        console.log(message)
        generateRandomNumber()
    }
}

function generateRandomNumber() {
    randomNumber1 = Math.floor(Math.random() * 10) + 1
    randomNumber2 = Math.floor(Math.random() * 10) + 1

    console.log(randomNumber1, randomNumber2)

    htmlPage()
}