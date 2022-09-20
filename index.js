// Wie zeige ich meine node version?
// "node -v" im Terminal

/**
 * Ich bin ein langer Kommentar
 */

// console.log("Hallo liebe Welt an diesem wunderschönen guten Morgen!"); // <-

// Mögliche Datentypen
variable0 = 0; // das BÖÖÖSESTE im Busch
var variable1; // das BÖÖÖSE im Busch
let variable2 = 0;
variable2 = 1;

// const weil konstant
const variable3 = 0;
// UNVERÄNDERLICH
// variable3 = 1;

const sebastian = "Sebastian";

// , hängt Strings an
// console.log("Hallo ", sebastian)

// In Java       = Methoden sind Funktionen in einer Klasse
// In JavaScript = Funktionen brauchen keine Klasse

// KEINEN Rückgabewert
// Wir können ALLE Arten von Datentypen übergeben

// In Java
// public String sayHello(String name)
function sayHello(name) {
    // Funktionsrumpf
    // "+" = Operator
    return "Hallo Welt an " + name;
}


const helloString = sayHello(null)
console.log(helloString)