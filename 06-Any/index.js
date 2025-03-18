"use strict";
/**
 * Le type `any` en TypeScript est un type universel qui permet de désactiver
 * la vérification de type pour une variable. Cela signifie que vous pouvez
 * assigner n'importe quelle valeur à une variable de type `any` et utiliser
 * cette variable sans restrictions de type.
 *
 * Bien que pratique dans certains cas, l'utilisation excessive de `any` peut
 * réduire les avantages de la vérification de type de TypeScript, rendant le
 * code plus sujet aux erreurs et moins maintenable. Il est recommandé de
 * l'utiliser avec parcimonie et de privilégier des types plus spécifiques
 * lorsque cela est possible.
 */
// Exemple d'utilisation de `any`
let value = 42;
value = 'Hello, world!';
value = true;
value = { key: 'value' };
value = [1, 2, 3];
const mixedArray = [1, 'two', true, { key: 'value' }];
const mixedObject = {
    number: 42,
    string: 'Hello, world!',
    boolean: true,
    object: { key: 'value' },
    array: [1, 2, 3],
};
