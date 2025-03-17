"use strict";
// Les deux façons de faire sont équivalentes
let person = {
    name: 'John',
    age: 25
};
let otherPerson = {
    name: 'John',
    age: 25
};
// Les objets sont des types de données complexes qui peuvent contenir plusieurs valeurs.
// Les objets sont définis par des accolades {}.
// Les objets peuvent contenir des propriétés, qui sont des paires clé-valeur.
// Les propriétés sont séparées par des virgules.
// Les clés sont des chaînes de caractères, mais les guillemets ne sont pas nécessaires si elles sont des identifiants valides.
// Les valeurs des propriétés peuvent être de n'importe quel type de données.
// Les objets peuvent contenir des fonctions, appelées méthodes.
// Les objets peuvent contenir d'autres objets.
// Les objets peuvent contenir des tableaux.
// Manipulation d'objets
// Object.keys() : renvoie un tableau contenant les clés de l'objet
// Object.values() : renvoie un tableau contenant les valeurs de l'objet
// Object.entries() : renvoie un tableau contenant des tableaux de clés et de valeurs de l'objet
// Object.assign() : copie les valeurs de toutes les propriétés énumérables propres de un ou plusieurs objets source vers la cible
// Object.freeze() : empêche la modification des propriétés de l'objet
// Object.seal() : empêche l'ajout de nouvelles propriétés à l'objet et empêche la suppression des propriétés existantes
// Object.create() : crée un nouvel objet avec le prototype spécifié et les propriétés définies
// Object.defineProperty() : définit une nouvelle propriété directement sur un objet, ou modifie une propriété existante sur un objet, et renvoie l'objet
// Object.defineProperties() : définit de nouvelles propriétés directement sur un objet, ou modifie des propriétés existantes sur un objet, et renvoie l'objet
// Object.getOwnPropertyDescriptor() : renvoie un descripteur pour une propriété propre d'un objet
// Object.getOwnPropertyNames() : renvoie un tableau contenant les noms de toutes les propriétés propres d'un objet
// Object.getOwnPropertySymbols() : renvoie un tableau contenant les symboles propres d'un objet
// Object.getPrototypeOf() : renvoie le prototype (c'est-à-dire la valeur de la propriété interne [[Prototype]]) de l'objet spécifié
// Object.is() : détermine si deux valeurs sont les mêmes valeurs
// Object.isExtensible() : détermine si un objet est extensible (c'est-à-dire si on peut lui ajouter de nouvelles propriétés)
// Object.isFrozen() : détermine si un objet est figé
// Object.isSealed() : détermine si un objet est scellé
// Object.keys() : renvoie un tableau contenant les noms des propriétés propres d'un objet
// Object.preventExtensions() : empêche l'ajout de nouvelles propriétés à un objet
// Object.setPrototypeOf() : permet de changer le prototype d'un objet
// Object.values() : renvoie un tableau contenant les valeurs des propriétés propres d'un objet
