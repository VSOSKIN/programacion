//Recorrer un array de números y devuelva el mayor. 

const numeros = [67, 256, 45, 966, 23, 50];

let mayor = 0; 

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] > mayor) 
    mayor = numeros[i];
}

console.log('El mayor de estos numeros ' + numeros + ' es: ' + mayor + '.');