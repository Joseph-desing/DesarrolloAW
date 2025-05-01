// Variables
var cantidadDisponible = 2500;
let productoEnStock = true;
const codigoProducto = "B09B8MV3F1";

// Strings
let nombreProducto = "Echo Dot (5.ª generación)";
let precioProducto = 49.99;

// Mostrar información básica
console.log(`Producto: ${nombreProducto}`);
console.log(`Código Amazon: ${codigoProducto}`);
console.log(`Precio: $${precioProducto}`);
console.log(`¿Está disponible? ${productoEnStock ? "Sí" : "No"}`);
console.log(`Cantidad disponible en inventario: ${cantidadDisponible}`);

// Operaciones básicas
let precioConImpuesto = precioProducto * 1.12;
console.log(`Precio con IVA (12%): $${precioConImpuesto.toFixed(2)}`);

// Condicionales
if (productoEnStock && cantidadDisponible > 0) {
    console.log("Puedes proceder con la compra.");
} else {
    console.log("Producto no disponible por el momento.");
}

// Función
function mostrarResumen(nombre, precio) {
    return `Resumen: ${nombre.toUpperCase()} cuesta $${precio}`;
}

console.log(mostrarResumen(nombreProducto, precioProducto));
