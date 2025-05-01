'use strict';

const name = "Joseph";
const lastName = "Changoluisa";
const city = "Quito";
const age = 23;
const active = false;

// Mostrar información personal
console.log("=== Información Personal ===");
console.log(`Nombre completo: ${name} ${lastName}`);
console.log(`Ciudad: ${city}`);
console.log(`Estado: ${active ? "Activo" : "Inactivo"}`);
console.log(`Edad: ${active ? age : "No se encuentra activo"}`);
