// Wie zeige ich meine node version?
// "node -v" im Terminal

/**
 * Ich bin ein langer Kommentar
 */

// console.log("Hallo liebe Welt an diesem wunderschönen guten Morgen!"); // <-

// Mögliche Datentypen
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
function sayHello(name: string): string {
    // Funktionsrumpf
    // "+" = Operator
    return "Hallo Welt an " + name
}

// Doppelpunkt ":" <Datentyp>
const helloString: string = sayHello("1")
console.log(helloString)

// Funktioniert nicht
// Fehler kommt zur Compilezeit
// myNumber = "21";

// primitive Datentyp
// number, string, boolean

// kleingeschrieben = Typdefinition
let myNumber: number = 20;

// großgeschrieben = Konvertieren in JS
myNumber = Number("1");
// Konvertieren in Java
// int variableNumber = (int) "1";

