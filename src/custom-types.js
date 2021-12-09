/* 

A continuación crearemos un tipo de dato user, el cual lo vamos a utilizar para 
poder asignarlo a otras variables que definamos mas adelante

*/ 


/**
 * USER
 * @typedef {object} USER
 * @property {number} id use id
 * @property {string} name user's name
 * @property {number} age use's age
 * @property {string} money User's age
 * @property {string} [color] cuando ponermos entre corchetes una propiedad, le estamos indicando que es opcional.
 * @property {boolean} isActive User state
 */



/*
Como arriba ya hemos definido nuestro tipo de dato, que hemos customizado, ahora podemos utilizarlo para asignarselo 
a otras variiables
*/


/**
 * @type {USER}
 */
const myNewUser = {
    id: 1,
    name: "Juan",
    age: 24,
    money: "no money",
    // color: "red", esta propieda es opcional
    isActive: true,
}