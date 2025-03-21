"use strict";
/**
 * Les interfaces en TypeScript sont utilisées pour définir la structure d'un objet.
 * Elles permettent de spécifier les propriétés et leurs types, ainsi que de garantir
 * que les objets respectent cette structure. Les interfaces peuvent également être
 * étendues pour créer des structures plus complexes.
 */
const personnage = {
    nom: 'John',
    age: 30,
    sexe: 'homme'
};
console.log(personnage); // { nom: 'John', age: 30, sexe: 'homme' }
console.log(typeof (personnage)); // object
const person = {
    name: "John Doe",
    age: 30,
    greet() {
        console.log("Hello");
    },
};
function printPerson(personPrototype) {
    console.log(personPrototype.name);
    console.log(personPrototype.age);
    personPrototype.greet();
}
printPerson(person);
let bullDog = {
    name: "Bobby",
    speed: 30,
    // age optionnel
};
