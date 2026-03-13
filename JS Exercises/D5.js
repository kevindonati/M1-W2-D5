/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
const pets = ["dog", "cat", "hamster", "redfish"]
console.log("ESERCIZIO 1")

for (let i = 0; i < pets.length; i++) {
  console.log(pets[i])
}

/* ESERCIZIO 2
Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/
console.log("ESERCIZIO 2")

let orderArray = pets.sort()

console.log(orderArray)

/* ESERCIZIO 3
Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/
console.log("ESERCIZIO 3")

let invertedArray = pets.reverse()

console.log(invertedArray)

/* ESERCIZIO 4
Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/
console.log("ESERCIZIO 4")

// tolgo il primo elemento e lo assegno a firstElemnt
let firstElement = pets.splice(0, 1)
// sopra mi ritorna un oggetto, trasformo in stringa tramite .join
let convertToString = firstElement.join("")
// con push metto la stringa in fondo all'array
let moveToLastElement = pets.push(convertToString)

console.log(pets)

/* ESERCIZIO 5
Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
const cars = [
  {
    brand: "Ford",
    model: "Fiesta",
    color: "red",
    trims: ["titanium", "st", "active"],
  },
  {
    brand: "Peugeot",
    model: "208",
    color: "blue",
    trims: ["allure", "GT"],
  },
  {
    brand: "Volkswagen",
    model: "Polo",
    color: "black",
    trims: ["life", "style", "r-line"],
  },
]

console.log("ESERCIZIO 5")

for (let i = 0; i < cars.length; i++) {
  let targaCasuale = Math.ceil(Math.random() * 100000 + 100000)
  cars[i].licensePlate = targaCasuale
}

console.log(cars)

/* ESERCIZIO 6
Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/
console.log("ESERCIZIO 6")

let newObj = {
  brand: "Renault",
  model: "Clio",
  color: "Blue",
  trims: ["city", "s-line"],
}
cars.push(newObj)
for (let i = 0; i < cars.length; i++) {
  cars[i].trims.pop()
}

console.log(cars)

/* ESERCIZIO 7
Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/
console.log("ESERCIZIO 7")

const justTrims = []

for (let i = 0; i < cars.length; i++) {
  let firstElementTrims = cars[i].trims.shift()
  justTrims.push(firstElementTrims)
}

console.log(justTrims)

/* ESERCIZIO 8
Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
"color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/
console.log("ESERCIZIO 8")

for (let i = 0; i < cars.length; i++) {
  //separo le lettere mettendole in un array
  let separaLettere = cars[i].color.split("")
  //metto la prima lettera in una variabile
  let primaLettera = separaLettere.shift()
  if (primaLettera === "b" || primaLettera === "B") {
    console.log("Fizz")
  } else {
    console.log("Buzz")
  }
}

/* ESERCIZIO 9
Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
console.log("ESERCIZIO 9")
const numericArray = [
  6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
]

let i = 0

while (numericArray[i] !== 32) {
  console.log(numericArray[i])
  i++
}

/* ESERCIZIO 10
Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
dell'alfabeto italiano.
es. [f, b, e] --> [6, 2, 5]
*/
console.log("ESERCIZIO 10")
const charactersArray = ["g", "n", "u", "z", "d"]

const positionLetter = []

for (let i = 0; i < charactersArray.length; i++) {
  switch (charactersArray[i]) {
    case "a":
      positionLetter.push(1)
      break
    case "b":
      positionLetter.push(2)
      break
    case "c":
      positionLetter.push(3)
      break
    case "d":
      positionLetter.push(4)
      break
    case "e":
      positionLetter.push(5)
      break
    case "f":
      positionLetter.push(6)
      break
    case "g":
      positionLetter.push(7)
      break
    case "h":
      positionLetter.push(8)
      break
    case "i":
      positionLetter.push(9)
      break
    case "j":
      positionLetter.push(10)
      break
    case "k":
      positionLetter.push(11)
      break
    case "l":
      positionLetter.push(12)
      break
    case "m":
      positionLetter.push(13)
      break
    case "n":
      positionLetter.push(14)
      break
    case "o":
      positionLetter.push(15)
      break
    case "p":
      positionLetter.push(16)
      break
    case "q":
      positionLetter.push(17)
      break
    case "r":
      positionLetter.push(18)
      break
    case "s":
      positionLetter.push(19)
      break
    case "t":
      positionLetter.push(20)
      break
    case "u":
      positionLetter.push(21)
      break
    case "v":
      positionLetter.push(22)
      break
    case "w":
      positionLetter.push(23)
      break
    case "x":
      positionLetter.push(24)
      break
    case "y":
      positionLetter.push(25)
      break
    case "z":
      positionLetter.push(26)
      break
  }
}
console.log(positionLetter)
