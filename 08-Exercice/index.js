"use strict";
// Exercice 1
// Créez une fonction qui prend un tableau de nombres et renvoie la somme de tous les nombres.
function tableAddition(table) {
    const sum = table.reduce((a, b) => a + b, 0);
    return sum;
}
const array = [1, 2, 3, 4, 5];
console.log(tableAddition(array));
// Exercice 2
// Créez une fonction qui prend une chaine de caractères et renvoie la chaîne inversée.
function reverseString(str) {
    return str.split('').reverse().join('');
}
const str = 'Hello';
console.log(reverseString(str));
const firstStudent = {
    name: 'John',
    age: 20,
    sexe: 'M',
    grade: 80
};
const secondStudent = {
    name: 'Jane',
    age: 22,
    sexe: 'F',
    grade: 90
};
console.log(firstStudent, secondStudent);
// Exercice 4
// Créez une fonction qui prend en paramètre un tableau de tuples représentant des coordonnées x et y, et renvoie un tableau contenant les distances de chaque point par rapport à l'origine (0,0).
function distanceFromOrigin(points) {
    const distances = points.map(point => Math.sqrt(point[0] ** 2 + point[1] ** 2));
    return distances;
}
const points = [[0, 0], [3, 4], [1, 1]];
console.log(distanceFromOrigin(points));
// Exercice 5
// Créez une fonction qui prend en paramètre un mois de l'année sous forme d'enum, et renvoie le nombre de jours dans ce mois.
var Month;
(function (Month) {
    Month[Month["January"] = 1] = "January";
    Month[Month["February"] = 2] = "February";
    Month[Month["March"] = 3] = "March";
    Month[Month["April"] = 4] = "April";
    Month[Month["May"] = 5] = "May";
    Month[Month["June"] = 6] = "June";
    Month[Month["July"] = 7] = "July";
    Month[Month["August"] = 8] = "August";
    Month[Month["September"] = 9] = "September";
    Month[Month["October"] = 10] = "October";
    Month[Month["November"] = 11] = "November";
    Month[Month["December"] = 12] = "December";
})(Month || (Month = {}));
function daysInMonth(month) {
    if (month === Month.February) {
        return 28;
    }
    else if (month % 2 === 0) {
        return 30;
    }
    else {
        return 31;
    }
}
console.log(daysInMonth(Month.February));
console.log(daysInMonth(Month.March));
console.log(daysInMonth(Month.April));
