/* 

Modulos.
Por ejemplo podemos tener varios archivos con varios fragmaneto de codigo que podemos reutilizar, entonces lo que podemos hacer es 
manter separar este archivo que tiene funciones que podemos reutilizar, no solo para este proycto, sino para otros proyectos.
Para  todo esto que se ha mencionado,jsdoc nos permite declarar cuales son modulos o porcionos de codigo.

*/

/**
 * Aprender mas de nuestro modulo dirigiendote a nuestro tutorial {@tutorial second-tutorial}
 * @module MyMath
 * 
 */



/**
 * add two numbers
 * @param {number} x first Number 
 * @param {number} y second number
 * @returns {number} suma de x  + y
 */
const add = (x, y) => x + y;

/**
 * Substract two numbers
 * @param {number} x first Number 
 * @param {number} y second number
 * @returns {number} Substrac of two numbers de x+y
 */
const substract = (x, y) => x + y;



module.exports = {
    add,
    substract
};