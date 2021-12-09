/*

Definiremos el tipado de una clase y todo su contenido tipico como el constructor, metodos y propiedades.

Tambien en este apartado veremos la manera de agregar ejemplos para nuestros codigos.

@example = Como su nombre lo indica, es para poner un ejemplo del codigo, y de esta manera el desarrollador puede darse una idea de que es lo que tiene que colocar

@see = es para poder poner referencias.

@todo = Es para colocar pendientes, o que es lo que debemos hacer despues.

@link = De esta manera nos podemos mover entre las diferentes rutas y partes de la documentacion

*/


/**
 * @example
 * const newProgrammer = new Programmer({fullname:'jts'}, 'java');
 * newProgrammer.getInfo();
 * 
 * 
 * @see https://github.com/goldbergyoni/nodebestpractices
 * 
 * 
 * @todo Implementar el resto de las clases del metodo.
 * 
 * 
 * 
 * 
 */
class Programmer{

    /**
     * 
     * @param {{fullname: String}} user  user's information
     * @param {string} language A programming language
     * 
     */
    constructor(user, language){
        this.fullname = user.fullname;
        this.language = language;
    }

    /**
     * Get Programmer information
     * @return {void}
     */
    getInfo(){
        console.log(`i'm ${this.fullname} and my favorite programming language is ${this.language}`);
    }


}


/**
 * conocer mas en (@link Programmer)
 * 
 */
const ProgramerOne = new Programmer({fullname: "juan"}, "I love Java");
const ProgrameTwo = new Programmer({fullname: "TS"}, "I love Javascript");

ProgramerOne.getInfo();









