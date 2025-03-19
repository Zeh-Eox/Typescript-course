"use strict";
/**
 * Une union de type en TypeScript permet de définir une variable ou une propriété
 * qui peut contenir plusieurs types différents. Cela est utile pour gérer des cas
 * où une valeur peut être de plusieurs types possibles.
 *
 * Par exemple, une union de type `string | number` signifie que la valeur peut
 * être soit une chaîne de caractères, soit un nombre.
 *
 * Les unions de type sont définies en utilisant le symbole `|` entre les types.
 */
// Exemple
let variableTest;
variableTest = 'Hello'; // OK
variableTest = 42; // OK
// variableTest = true; // Erreur: Type 'boolean' is not assignable to type 'string | number'.
// Les unions de type sont utiles pour gérer des cas où une valeur peut être de plusieurs types possibles.
// Exemple
function displayValue(value) {
    console.log(value);
}
displayValue('Hello'); // Affiche: Hello
displayValue(42); // Affiche: 42
const value = {
    a: 42,
    b: 'Hello',
};
console.log(value); // Affiche: { a: 42, b: 'Hello' }
// Les intersections de type sont utiles pour créer des types complexes qui combinent plusieurs structures ou contraintes.
