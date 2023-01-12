
/*
EJERCICIO 1

    Crea una función que imprima todos los números primos entre el 1 y el 100.
    Después, tendrá que imprimir la suma de todos esos.


Explicación de la solución:

Declaramos la función sumaPrimos establecemos dos variables, una que nos servirá de contador para ir
sumando los numeros primos de 1 a 100 y otra que nos ira diciendo si el número es primo o no
mediante un valor boolean.
La forma de realizar la condición para que un número sea primo la tuve que buscar por la red porque
la verdad no sabía como hacerla, se describe en el siguiente parrafo:

En la función esPrimo creamos un bucle para comprobar si el número es divisible por algún número
entre 2 y  dicho número menos 1. Si se encuentra un divisor, la función devuelve false, ya que el
número no es primo. 
Si el bucle termina sin encontrar un divisor, la función devuelve true, ya que el número es primo.

A continuaión creamos un búcle for que recorra los números de 1 a 100 y los va introduciendo como
argumentos en la función esPrimo. 
Si el resultado de la variable primo es true escribe un mensaje con dicho número y lo suma a la 
variable sumatorio.
Finalmente devuelve por consola el resultado de sumatorio acompañado de un texto.
*/


function sumaPrimos(){

    let sumatorio = 0;
    let primo = true;

    function esPrimo(numb){
        if (numb <= 1) {
            primo = false;
        }
        for (let i = 2; i < numb; i++) {
            if (numb % i === 0) {
              return primo = false;
            }
        }
        return primo = true;
    };

    for(let i = 1; i <=100 ; i++){  
        esPrimo(i);
        if (primo === true){
            console.log(i + ' ' + 'Este número es primo');
            sumatorio += i;
        }
    }
    return console.log(sumatorio + ' ' + 'es el resultado de la suma de los números primos del 1 al 100');
    
};

sumaPrimos();





/*
EJERCICIO 2

    Crea una función que reciba 2 arrays de números y devuelva uno unificado,
    sumando los números de la misma posición.
    Los arrays pueden tener diferente longitud.

    Elemplo: 
      Entrada: [1,4,5,7] [2,1,5,1,1]
      Salida: [3,5,10,8,1]



Explicación de la solución:

Declaramos la función con dos argumentos que podremos introducir que sean de tipo Array.
Declaramos una variable dentro de la función que usaremos como Array sumatorio de 
muestros arrays argumentos.
Recorremos los dos arrays argumentos hasta la longitud mayor de uno de los dos.
Establecemos tambien mediante un par de bloques if que si cualquiera de los valores que estemos
recorriendo no existe en el array argumento le aplique un valor de 0, ya que se contempla
que un array argumento puede ser mayor que otro.
A continuación establecemos que en la misma posición que en los argumentos que está recorriendo 
del array que queremos que resulte, realice una suma de los elementos de las posiciones que está
recorriendo en los dos arrays argumentos.
Finalmente le pedimos que nos devuelva por consola el array generado con esta función.
*/ 


arrayA =[5,6,4,2,3];
arrayB =[1,3,4,9,1,3,1];

function sumaArrays (array1, array2){
    
    let sumaPosicion = [0];
    
    for (let i = 0; (i < array1.length)||(i < array2.length); i++){
        if(array1[i] === undefined){
            array1[i]=0;
        }
        if(array2[i] === undefined){
            array2[i]=0;
        }
        sumaPosicion[i] = array1[i] + array2[i];
    }
    return console.log(sumaPosicion);
};

sumaArrays(arrayA, arrayB);




/*
EJERCICIO 3

    Un palíndromo es una palabra que se deletrea de la misma manera en ambos sentidos.
    Crea una función que reciba una palabra y devuelva true o false si es o no palíndromo.

    Ejemplo:
        Entrada: 'oso'
        Salida: true




Explicación de la solución:

Declaramos la función y le asignamos un argumento de tipo string.
Declaramos una variable textReverse que será igual a realizarle una transformación de string a array
a nuestro argumento(con el método .split('')), luego invertirmos su orden (con el método .reveerse())
y por último unimos los elementos del array y los convirtimos en un string (con el método .join(''))
con los caracteres en el orden inverso al argumento text.
Después se comprueba que este resultado sea igual al argumento introducido y en función de eso se evalua
como true o false y devuelve por consola el resultado.
*/ 



let textForVerify ='oso';

function verifyPalindromo (text){
    
    let textReverse = text.split('').reverse().join('');
    let esPalindromo = text === textReverse;

    if(esPalindromo === true){
        console.log(esPalindromo);
    }else{
        console.log(esPalindromo);
    }
}
verifyPalindromo(textForVerify);



/*
EJERCICIO 4

    Crea una función que reciba un array de personas y devuelva un string con las personas separadas
    por el símbolo recibido en el segundo argumento.

    Ejemplo:
        Entrada: (['Pedro', 'Gon', 'Luis', 'Fran'], '/')
        Salida: 'Pedro/Gon/Luis/Fran'




Explicación de la solución:

Declaramos la función y le asignamos dos argumentos: 

    - El primero será para introducir un array.
    - El segundo para introducir el simbolo que queramos que haga de separador entre los elementos
    del array cuando este formado nuestro string.

Declaramos dentro de la función una variable que será el resultado de:

    - Primero transformar el argumento array a un string(con el método .toString()).
    - Despúes reemplazamos en este string el simbolo ',' por el argumento simbol que hemos
     introducido (con el método .replaceAll()).

Para finalizar visualizamos por consola el resultado de esta variable que será un string con 
los elementos de la variable array separados por el argumento que hemos introducido.
*/


let arrayRequired =['Pedro', 'Gon', 'Luis', 'Fran'];
let simbolRequired = '/';

function strineando (array, simbol){
    let arrayText = array.toString().replaceAll(',',simbol);
    console.log(arrayText);
}

strineando(arrayRequired, simbolRequired);




/*
EJERCICIO 5

    Crea una función que reciba un array de objetos persona y devuelva un array con el nombre de las personas
    cuyo id coincida con la posición del array en el que se encuentra.


    Ejemplo:
        Entrada: [{id:2, name:'Pedro'},{id:1, name:'Juan'},{id:5, name:'Luis'},{id:3, name:'Gon'},{id:4, name:'Fran'} ]
        Salida: ['Juan','Gon','Fran']

        


Explicación de la solución:

Declaramos la función con un argumento que tiene que ser de tipo array.
Declaramos una variable tipo array para ir recogiendo los valores de la propiedad name de 
los objetos que tienen el mismo valor en su propiedad id que el número de elemento 
que ocupan en el array argumento, la dejamos vacia.
Recorremos todos los elementos del argumento array y si el número de elemento que ocupa en el argumento array
coincide con el valor de la propiedad id de dicho elemento, entonces se añade el valor de la propiedad name 
de ese elemento qu estamos recorriendo como elemento a la variable array idVerify (mediante el método array.push())
conformando así nuestro array con el nombre de las personas en las que se da esa condición.
Finalmente devuelve por consola dicho array. 
*/


let arrayEntrada = [{id:2, name:'Pedro'},{id:1, name:'Juan'},{id:5, name:'Luis'},{id:3, name:'Gon'},{id:4, name:'Fran'} ];

function verifyId (array){

    let idVerify = [];

    for(let i = 0; i < array.length; i++){
        if (array[i].id == i){
            idVerify.push(array[i].name);
        }
    }
    console.log(idVerify);
}

verifyId(arrayEntrada);