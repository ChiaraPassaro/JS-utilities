//Funzione ricorsiva
function isevenRecursive(number) {
    var num = number;
    //se è minore di 0 cambio segno
    if (num < 0) {
        return isevenRecursive(-num);
    }
    //se è 0 è pari e ritorna true
    else if (num === 0) {
        return true;
    }
    //se è 1 è dispari e ritorna false
    else if (num === 1) {
        return false;
    }
    //se non è 0 o 1 richiamo la funzione
    else {
        num = num - 2;
        //bisogna ritornare perché altrimenti da undefined
        return isevenRecursive(num);
    }
}

document.writeln(isevenRecursive(78));
