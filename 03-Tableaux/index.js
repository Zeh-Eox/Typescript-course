"use strict";
// Les deux façons de déclarer un tableau sont équivalentes
let numbers = [1, 2, 3, 4, 5];
let otherNumbers = [6, 7, 8, 9, 10];
let strings = ['a', 'b', 'c', 'd', 'e'];
let otherStrings = ['f', 'g', 'h', 'i', 'j'];
let numberAndString = [1, 'a', 2, 'b', 3, 'c'];
let otherNumberAndString = ['d', 4, 'e', 5, 'f'];
let booleanArray = [true, false, true, false, true];
let otherBooleanArray = [false, true, false, true, false];
let anyArray = [1, 'a', true, 2, 'b', false];
let otherAnyArray = ['c', 3, false, 'd', 4, true];
// On peut déclarer un tableau de tuples
let tupleArray = [[1, 'a'], [2, 'b'], [3, 'c']];
let otherTupleArray = [[4, 'd'], [5, 'e'], [6, 'f']];
let mixedTupleArray = [[1, 'a', true], [2, 'b', false], [3, 'c', true]];
let otherMixedTupleArray = [[4, 'd', false], [5, 'e', true], [6, 'f', false]];
// On peut déclarer un tableau vide
let emptyArray = [];
let otherEmptyArray = [];
emptyArray.push(1);
emptyArray.push(2);
emptyArray.push(3);
console.log(emptyArray); // [1, 2, 3]
// Les différentes méthodes pour manipuler un tableau
// map(): applique une fonction à chaque élément du tableau
// filter(): filtre les éléments du tableau selon une condition
// reduce(): réduit le tableau à une seule valeur
// forEach(): exécute une fonction pour chaque élément du tableau
// find(): renvoie le premier élément du tableau qui satisfait une condition
// findIndex(): renvoie l'index du premier élément du tableau qui satisfait une condition
// some(): renvoie true si au moins un élément du tableau satisfait une condition
// every(): renvoie true si tous les éléments du tableau satisfont une condition
// sort(): trie les éléments du tableau
// reverse(): inverse l'ordre des éléments du tableau
// concat(): fusionne deux tableaux
// slice(): extrait une partie du tableau
// splice(): ajoute ou supprime des éléments du tableau
// push(): ajoute un élément à la fin du tableau
// pop(): supprime le dernier élément du tableau
// shift(): supprime le premier élément du tableau
// unshift(): ajoute un élément au début du tableau
// indexOf(): renvoie l'index du premier élément correspondant à une valeur
// lastIndexOf(): renvoie l'index du dernier élément correspondant à une valeur
// includes(): renvoie true si le tableau contient une valeur
// fill(): remplit le tableau avec une valeur
// copyWithin(): copie une partie du tableau à un autre endroit
// flat(): aplati un tableau imbriqué
// flatMap(): applique une fonction à chaque élément du tableau et aplati le résultat
// keys(): renvoie un tableau contenant les clés du tableau
// values(): renvoie un tableau contenant les valeurs du tableau
// entries(): renvoie un tableau contenant les paires clé-valeur du tableau
// from(): crée un tableau à partir d'un objet semblable à un tableau
// of(): crée un tableau à partir d'une liste d'arguments
// isArray(): vérifie si un objet est un tableau
// join(): fusionne les éléments du tableau en une chaîne de caractères
// toString(): renvoie une chaîne de caractères représentant le tableau
// toLocaleString(): renvoie une chaîne de caractères représentant le tableau en fonction de la locale
// length: propriété qui renvoie le nombre d'éléments du tableau
// Exemples de méthodes pour manipuler un tableau
numbers.map((number) => number * 2); // [2, 4, 6, 8, 10]
numbers.filter((number) => number % 2 === 0); // [2, 4]
numbers.reduce((accumulator, number) => accumulator + number, 0); // 15
numbers.forEach((number) => console.log(number)); // 1, 2, 3, 4, 5
numbers.find((number) => number === 3); // 3
numbers.findIndex((number) => number === 3); // 2
numbers.some((number) => number > 3); // true
numbers.every((number) => number > 0); // true
numbers.sort((a, b) => a - b); // [1, 2, 3, 4, 5]
numbers.reverse(); // [5, 4, 3, 2, 1]
numbers.concat(otherNumbers); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
numbers.slice(1, 4); // [2, 3, 4]
numbers.splice(2, 1); // [1, 2, 4, 5]
numbers.push(6); // [1, 2, 3, 4, 5, 6]
numbers.pop(); // [1, 2, 3, 4, 5]
numbers.shift(); // [2, 3, 4, 5]
numbers.unshift(1); // [1, 2, 3, 4, 5]
numbers.indexOf(3); // 2
numbers.lastIndexOf(3); // 2
numbers.includes(3); // true
numbers.fill(0); // [0, 0, 0, 0, 0]
numbers.copyWithin(0, 3); // [4, 5, 4, 5, 0]
numbers.keys(); // [0, 1, 2, 3, 4]
numbers.values(); // [1, 2, 3, 4, 5]
numbers.entries(); // [[0, 1], [1, 2], [2, 3], [3, 4], [4, 5]]
Array.from({ length: 5 }, (_, index) => index); // [0, 1, 2, 3, 4]
Array.of(1, 2, 3, 4, 5); // [1, 2, 3, 4, 5]
Array.isArray(numbers); // true
numbers.join(', '); // '1, 2, 3, 4, 5'
numbers.toString(); // '1, 2, 3, 4, 5'
numbers.toLocaleString(); // '1, 2, 3, 4, 5'
numbers.length; // 5
