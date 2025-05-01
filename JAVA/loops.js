'use strict';

// Datos del usuario
const usuario = {
    nombre: "Joseph",
    apellido: "Changoluisa",
    edad: 23
};

// Tareas de ejemplo
const tareasPendientes = ['Estudiar JavaScript', 'Hacer ejercicio', 'Leer', 'Practicar lógica', 'Descansar'];

// 🔁 FOR con cuenta regresiva
const contador = 10;
for (let i = contador; i >= 0; i--) {
    i <= 0 ? console.log("⏲️ Comida lista") : console.log(i);
}

console.log("\n🔁 WHILE con cuenta regresiva");
let cuenta = 10;
while (cuenta >= 0) {
    cuenta <= 0 ? console.log("⏲️ Comida lista") : console.log(cuenta);
    cuenta--;
}

console.log("\n🔁 DO-WHILE con cuenta regresiva");
let cuenta2 = 10;
do {
    cuenta2 <= 0 ? console.log("⏲️ Comida lista") : console.log(cuenta2);
    cuenta2--;
} while (cuenta2 >= 0);

// =================== TAREAS ===================

console.log("\n📋 Tareas personales de Joseph:");
tareasPendientes.forEach((t, i) => console.log(`${i} - ${t}`));

console.log("\n📌 Mostrando tareas con for...of:");
for (const t of tareasPendientes) {
    console.log(t);
}

console.log("\n👤 Información del usuario con for...in:");
for (const clave in usuario) {
    console.log(`${clave}: ${usuario[clave]}`);
}

console.log("\n👥 Información del usuario con Object.entries:");
for (const [clave, valor] of Object.entries(usuario)) {
    console.log(`${clave} - ${valor}`);
}

console.log("\n🆕 Copia de las tareas usando map():");
const nuevasTareas = tareasPendientes.map(t => t);
console.log(nuevasTareas);
