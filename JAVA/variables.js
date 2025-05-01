var cantidadDisponible = 2500;
let productoEnStock = true;
const codigoProducto = "B09B8MV3F1";

// Strings
let nombreProducto = "Echo Dot (5.ª generación)";
let precioProducto = 49.99;
const enlaceProducto = "https://www.amazon.com/-/es/generaci%C3%B3n-internacional-adaptador-corriente-inteligente/dp/B09B8MV3F1";

// Mostrar información básica
console.log(`Producto: ${nombreProducto}`);
console.log(`Código Amazon: ${codigoProducto}`);
console.log(`Precio: $${precioProducto}`);
console.log(`¿Está disponible? ${productoEnStock ? "Sí" : "No"}`);
console.log(`Cantidad disponible en inventario: ${cantidadDisponible}`);
console.log(`Enlace: ${enlaceProducto}`);

// Operaciones básicas
let precioConImpuesto = precioProducto * 1.12;
console.log(`Precio con IVA (12%): $${precioConImpuesto.toFixed(2)}`);
