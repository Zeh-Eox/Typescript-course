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

let variableTest: string | number;

variableTest = 'Hello'; // OK
variableTest = 42; // OK
// variableTest = true; // Erreur: Type 'boolean' is not assignable to type 'string | number'.

// Les unions de type sont utiles pour gérer des cas où une valeur peut être de plusieurs types possibles.

// Exemple

function displayValue(value: string | number): void {
  console.log(value);
}

displayValue('Hello'); // Affiche: Hello
displayValue(42); // Affiche: 42
// displayValue(true); // Erreur: Type 'boolean' is not assignable to type 'string | number'.



/**
 * Une intersection de type en TypeScript permet de combiner plusieurs types en un seul.
 * Cela signifie qu'une variable ou une propriété doit satisfaire tous les types combinés.
 *
 * Les intersections de type sont définies en utilisant le symbole `&` entre les types.
 *
 * Par exemple, une intersection de type `Person & Employee` signifie que la valeur
 * doit avoir toutes les propriétés et comportements de `Person` et de `Employee`.
 *
 * Les intersections de type sont utiles pour créer des types complexes qui combinent
 * plusieurs structures ou contraintes.
 */

// Exemple

interface A {
    a: number;
}

interface B {
    b: string;
}

type AB = A & B;

const value: AB = {
    a: 42,
    b: 'Hello',
};
console.log(value); // Affiche: { a: 42, b: 'Hello' }

// Les intersections de type sont utiles pour créer des types complexes qui combinent plusieurs structures ou contraintes.