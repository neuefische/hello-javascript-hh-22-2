// Wir nutzen const
// Wenn der Wert gleich bleibt
// Wir nutzen let
// Wenn der Wert sich verändert
// Wir nutzen VAR NICHT
// Weil es fehleranfällig ist
// und weil es beim Entwickeln kontraproduktiv ist
// "[]" = Es ist ein Array
// und "= []" initialisiert ein leeres Array
const cars = [];
// cars[5] = fiatPunto;
// [] =
// <leer> <leer> <leer> <leer> <leer> fiatPunto
// console.log(cars)
// Unveränderbare Variable via const
// Das Objekt ist vom Typ "Car"
//cars.pop(); // Entfernt Element
// console.log(cars)
// filter(word => word.length > 6);
// "=>" Anonyme Funktion
// Wir gehen durch das Array und schauen uns jedes Element an
const searchedCar = cars.filter((car) => {
    return car.id === 1;
});
// Gib die komplette Liste deiner Car Objekte aus
// 1.
// console.log(cars)
// 2.
for (let i = 0; i < cars.length; i++) {
    console.log(cars[i]);
}
// Gib aus der Liste der Car Objekte nur das Car Objekt
// mit einem spezifischen "model" aus
// Was heißt "=> {}" ?
// Das ist eine Funktion
// function add(number1: number, number2: number) {
//     return number1 + number2;
// }
// Das ist eine Funktion
const add2 = (number1, number2) => {
    return number1 + number2;
};
const peugeot206CC = {
    id: 1,
    manufacturer: "Peugeot",
    model: "206 CC",
    color: "Silver"
};
const fiatPunto = {
    id: 2,
    manufacturer: "Fiat",
    model: "Punto",
    color: "Blau",
    extras: ["Klimaanlage", "Kassetenspieler", "Sitzheizung"]
};
const fiatPuntoRed = {
    id: 3,
    manufacturer: "Fiat",
    model: "Punto",
    color: "Rot",
    extras: ["Klimaanlage", "Kassetenspieler", "Sitzheizung"]
};
cars.push(fiatPunto); // Fügt Element hinzu
cars.push(fiatPuntoRed); // Fügt Element hinzu
cars.push(peugeot206CC); // Fügt Element hinzu
console.log("Alle Autos: ", cars);
// "car" = Eingabeparameter
const allPuntos = cars.filter((car) => {
    // Gib alle zurück die Model "Punto" haben
    return car.model === "Punto";
});
console.log("\n\n");
console.log("Finde ALLE Puntos", allPuntos);
const allPeugeots = cars.filter((car) => {
    // Gib alle zurück die Model "Punto" haben
    return car.model === peugeot206CC.model;
});
console.log("\n\n");
console.log("Finde ALLE Peugeots", allPeugeots);
const singlePunto = cars.find(car => car.model = "Punto");
console.log("Der erste Punto ", singlePunto);
// Erstes Element löschen
// cars.shift
// Letztes Element löschen
// cars.pop
const carsAfterDeletion = cars.filter((car) => {
    // Gib alle zurück die Model "Punto" haben
    return car.model === singlePunto.model;
});
console.log("\n\nAutos nach dem Löschen ", carsAfterDeletion);
// Vergleichen
// = Zuweisung
// == Kaputter Vergleich
// === Guter Vergleich
// 1 == 1 // NEIN
// 1 === 1 // JA
// Originalliste erstellt
const goodMovies = ["Fight Club", "Matrix", "Nackte Kanone", "Space Jam", "Scent of woman", "Die Verurteilten", "Traumschiff Surprise", "Goodfellas"];
console.log("\n\n Echt gute Filme: ", goodMovies);
// Neue Liste erstellt
// "find", "filter", "map" funktioniert wie forEach = Iteriere/ Gehe durch alle Elemente im Array und mach "xyz"
const filmEmpfehlungen = goodMovies.map((movie) => {
    return "Kennst du schon " + movie + "???";
});
// result =  find movie1
// result = "kennste schon" + result + "???"
// Gibt jedes Element aus
for (let i = 0; i < cars.length; i++) {
    console.log(cars[i]);
}
// Gibt jedes Element aus
filmEmpfehlungen.forEach(film => console.log(film));
console.log("\n\n Filmempfehlungen: ", filmEmpfehlungen);
