/*
Funzione che ritorna il numero minore
accetta un array o una serie di argomenti
*/
function minNumber(){
    if (Object.prototype.toString.call(arguments[0]) === '[object Array]'){
        return Math.min.apply(null, arguments[0]); // <-- Math min accetta come parametro una lista, per poter passare un array utilizziamo Function.prototype.apply() con thisArg = null
    }
    return Math.min.apply(null, arguments);
}

/*
Funzione che ritorna il numero maggiore
accetta un array o una serie di argomenti
*/
function maxNumber(){
    if (Object.prototype.toString.call(arguments[0]) === '[object Array]'){
        return Math.max.apply(null, arguments[0]);
    }
    return Math.max.apply(null, arguments);
}

/*
Funzione che chiede un numero attraverso un prompt
richiesta viene rieffettuata finche' l'utente non inserisce un numero
*/
function askNumber(messaggio) {
    var boolean = false;

    while (!boolean){
        var number = parseInt(prompt(messaggio));

        //il typeof di NaN è number per stabilire se un numero non è NaN si usa
        // la funzione isNan();
        if (!isNaN(number)){
            boolean = true;
            return number;
        } else {
            messaggio = 'Hai inserito dei caratteri non consentiti. Inserisci un numero';
        }
    }
}

//Funzione che genera un numero random
function getRandom(min, max){
    return Math.floor(Math.random() * (max - min + 1)+ min);
}

//Funzione che controlla se un numero rientra in uno specifico range estremi compresi
function checkNumberFromTo (num, min, max){
    if(num >= min && num <= max) {
        return true;
    }
    return false;
}

//Funzione che controlla se un numero è pari ritorna booleano
function isEven(number) {
    if (number % 2 === 0){
        return true;
    }
    return false;
}

/************
 *************
 Il metodo querySelector() restituisce il primo elemento discendente dell'elemento su cui è invocato corrispondente al gruppo specificato di selettori.
 *************
 ************/

function qs(selector) {
    return document.querySelector(selector);
}

/************
*************
Il metodo querySelectorAll() restituisce una NodeList statica.
È possibile specificare più selettori separandoli utilizzando le virgole.
Una volta restituita la NodeList degli elementi di corrispondenza, è possibile esaminarlo come qualsiasi array. Se la matrice è vuota (ovvero la sua proprietà length è 0), non è stata trovata alcuna corrispondenza.

Attenzione NodeList non è un vero array, vale a dire che non ha i metodi dell'array come slice, some, map etc.
 *************
 ************/

function qsa(selector) {
    return document.querySelectorAll(selector);
}


// http://perfectionkills.com/instanceof-considered-harmful-or-how-to-write-a-robust-isarray/
function isArray(param) {
    return Object.prototype.toString.call(param) === '[object Array]';
}
