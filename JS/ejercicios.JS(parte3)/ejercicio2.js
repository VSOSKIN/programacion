//En base a la siguiente información:
//a) Usando la desestructuración de objetos, crea una variable para cada una de las 
//siguientes propiedades: nombre, precio y stock. 
//b) Muestra en la consola el nombre del producto, su precio y la cantidad de stock 
//disponible, utilizando las variables que acabas de crear.

const producto = {  
id: 123,  
nombre: "Auriculares inalámbricos",  
precio: 120000,  
stock: 25,  
categoria: "Electrónica"  
};

console.log(producto.nombre)
console.log(producto.precio)
console.log(producto.stock)
console.log('Los '+ producto.nombre +' tienen un precio de '+producto.precio+' y la cantidad de stock disponible es de '+producto.stock+'')