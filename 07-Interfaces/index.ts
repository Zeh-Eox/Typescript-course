/**
 * Les interfaces en TypeScript sont utilisées pour définir la structure d'un objet.
 * Elles permettent de spécifier les propriétés et leurs types, ainsi que de garantir
 * que les objets respectent cette structure. Les interfaces peuvent également être
 * étendues pour créer des structures plus complexes.
 */

interface Personnage {
    nom: string;
    age: number;
    sexe: string;
}

const personnage: Personnage = {
    nom: 'John',
    age: 30,
    sexe: 'homme'
};

console.log(personnage); // { nom: 'John', age: 30, sexe: 'homme' }
console.log(typeof(personnage)); // object


interface Person {
    name: string;
    age: number;
    greet(): void;
}

const person: Person = {
    name: "John Doe",
    age: 30,
    greet() {
        console.log("Hello")
    },
}

function printPerson(personPrototype: Person): void
{
    console.log(personPrototype.name);
    console.log(personPrototype.age);
    personPrototype.greet();
}

printPerson(person);


interface animal {
    name: string;
    age?: number; // Parametre optionnel
}

interface numbers {
    readonly firstNumber: number;
    readonly secondNumber: number; // ReadOnly => pas modifiable
}

interface dog extends animal {
    speed: number;
}

let bullDog: dog = {
    name: "Bobby",
    speed: 30,
    // age optionnel
}