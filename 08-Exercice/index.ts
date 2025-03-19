// Exercice 1
// Créez une fonction qui prend un tableau de nombres et renvoie la somme de tous les nombres.

function tableAddition(table: Array<number>): number
{
    const sum = table.reduce((a, b) => a + b, 0);
    return sum;
}

const array = [1, 2, 3, 4, 5];
console.log(tableAddition(array));


// Exercice 2
// Créez une fonction qui prend une chaine de caractères et renvoie la chaîne inversée.

function reverseString(str: string): string
{
    return str.split('').reverse().join('');
}

const str = 'Hello';
console.log(reverseString(str));


// Exercice 3
// Créez une interface pour un étudiant qui contient les propriétés suivantes : nom, âge, sexe, notes.
// Créez deux étudiants et stockez-les dans des variables.

interface student {
    name: string;
    age: number;
    sexe: string;
    grade: number;
}

const firstStudent: student = {
    name: 'John',
    age: 20,
    sexe: 'M',
    grade: 80
}

const secondStudent: student = {
    name: 'Jane',
    age: 22,
    sexe: 'F',
    grade: 90
}

console.log(firstStudent, secondStudent);


// Exercice 4
// Créez une fonction qui prend en paramètre un tableau de tuples représentant des coordonnées x et y, et renvoie un tableau contenant les distances de chaque point par rapport à l'origine (0,0).

function distanceFromOrigin(points: number[][]): number[]
{
    const distances = points.map(point => Math.sqrt(point[0] ** 2 + point[1] ** 2));
    return distances;
}

const points = [[0, 0], [3, 4], [1, 1]];
console.log(distanceFromOrigin(points));


// Exercice 5
// Créez une fonction qui prend en paramètre un mois de l'année sous forme d'enum, et renvoie le nombre de jours dans ce mois.

enum Month {
    January = 1,
    February = 2,
    March = 3,
    April = 4,
    May = 5,
    June = 6,
    July = 7,
    August = 8,
    September = 9,
    October = 10,
    November = 11,
    December = 12
}

function daysInMonth(month: Month): number
{
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