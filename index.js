//model
const container = document.getElementById("container")
let randomNumOne = Math.floor(Math.random() * 10) + 1
let randomNumTwo = Math.floor(Math.random() * 10) + 1
let points = 0
let message = `Bruk >, < eller = for å løse oppgaven og få riktig svar!`

//view
console.log(message) // Melding i console.log

renderView() // Oppdaterer viewet

function renderView() {

    container.innerHTML = `
    <p>Poeng: ${points}</p>
    <img src="images/crocodile.png">
    <p>${randomNumOne}</p>
    <input type="text" id="inputbox" maxlength=1>
    <p>${randomNumTwo}</p>
    <button onclick="checkValue()">Submit</button>
    <button onclick="generateRandomNumber()">Reset</button>
    <p>${message}</p>
    `
}

//controller
function checkValue() {
    let inputBox = document.getElementById("inputbox").value // Henter verdien til det som står i tekstboksen

    if (randomNumOne > randomNumTwo && inputBox === ">") { // Sjekker verdiene og utfører HVIS true

        points++ // points øker med 1
        message = `Du gjettet riktig svar og fikk ett poeng!` // Melding på skjermen
        console.log(message) // Melding i console.log
        generateRandomNumber() // Oppdaterer variablene's tall mellom 1-10 og oppdaterer viewet

    } else if (randomNumOne < randomNumTwo && inputBox === "<") { 

        points++ 
        message = `Du gjettet riktig svar og fikk ett poeng!` 
        console.log(message) 
        generateRandomNumber() 

    } else if (randomNumOne === randomNumTwo && inputBox === "=") { 

        points++ 
        message = `Du gjettet riktig svar og fikk ett poeng!` 
        console.log(message) 
        generateRandomNumber() 
        
    } else if (inputBox === "") { // Sjekker om verdien er blank og utfører HVIS true

        message = `Har du husket å skrive inn >, < eller = ?`
        console.log(message) 
        renderView() // Oppdaterer viewet

    } else { // Utføres dersom ingen av de over var true

        points-- // points reduseres med 1
        message = `Du gjettet feil svar og mistet ett poeng! Prøv igjen!` 
        console.log(message) 
        generateRandomNumber() 
    }
}

function generateRandomNumber() {
    randomNumOne = Math.floor(Math.random() * 10) + 1 // Gir variabelen et nytt tilfeldig tall mellom 1-10
    randomNumTwo = Math.floor(Math.random() * 10) + 1 

    console.log(randomNumOne, randomNumTwo) // Viser tallene som variablene fikk i console.log

    renderView() // Oppdaterer viewet
}