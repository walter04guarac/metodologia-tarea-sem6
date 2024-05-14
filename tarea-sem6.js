'use strict';

let claveCorrecta = 3214;
let n;
let cont = 0;

do {
    n = +prompt('Ingrese la clave:');
    cont++;
    if (claveCorrecta === n) {
        alert('Operaciones exitosas');
        break;
    } else if (cont >= 3) {
        alert('Bloqueo de tarjeta');
        break;
    } else {
        alert('Clave incorrecta. Inténtelo de nuevo.');
    }
} while (true);