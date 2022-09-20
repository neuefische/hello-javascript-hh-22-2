type Movie = {
    title: string,
    rating: 1 | 2 | 3 | 4 | 5
}

const scaryMovie3: Movie = {
    title: "Scary Movie 3",
    rating: 4
}

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
console.log(`Der Film ${scaryMovie3.title} hat eine Bewertung von ${scaryMovie3.rating} von 5 Sternen`)

// Objekte verändern ist easy peasy
scaryMovie3.rating = 5;

// Zeilenumbruch
console.log("\n")
console.log(`Der Film ${scaryMovie3.title} hat eine Bewertung von ${scaryMovie3.rating} von 5 Sternen`)
