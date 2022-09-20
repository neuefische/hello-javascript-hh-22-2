const student1 = {
    id: 1,
    name: "Max",
    age: 22
};
const student2 = {
    id: 2,
    name: "Anna",
    age: 23
};
const student3 = {
    id: 3,
    name: "Lisa",
    age: 19
};
let students = [student1, student2, student3];
console.log("Alle Studis am Anfang:", students);
function updateName(students, studentToUpdate, newName) {
    // Erstelle ein neues Objekt
    const newStudent = {
        id: studentToUpdate.id,
        name: newName,
        age: studentToUpdate.age
    };
    // Wie kann man Objekte aus einem Array löschen?
    // So! Man sucht ALLE Objekte die NICHT zu der Beschreibung passen
    // PS: Wir erstellen ein neues Array aus dem gefilterten Originalarray
    const newStudentsArray = students.filter(student => student.id !== studentToUpdate.id);
    // Füge die neue Studentin hinzu
    newStudentsArray.push(newStudent);
    // Gib das Array zurück
    return newStudentsArray;
}
// Aktualisiere das Originalarray
students = updateName(students, student3, "Marta");
console.log("Alle Studis am Ende:", students);
