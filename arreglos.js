// Arrays (Arreglos) página principal de Instagram
console.log("Arrays: Práctica de Laboratorio");

// Lista de 17 usuarios únicos
const UsuariosdeSugerencia = [
  "weendyiza",
  "lissa0_20",
  "its._.wendy17",
  "jessael_440",
  "richie_c11",
  "mari_alvear_",
  "salom_micaela",
  "gabriel_luna_98",
  "solangetupiza",
  "jossoa.25",
  "kevin_revelo1",
  "josselynmoposita_12",
  "taty_grd",
  "jamileth_garcia03",
  "johhan_sebs",
  "stephanyliseth_78",
  "nayely_lissbeth19"
];

const numSeguidores = [100, 300, 150, 450, 200, 340, 500, 600, 230, 120, 330, 410, 510, 180, 220, 275, 290];
const numSeguidos = [150, 120, 300, 390, 180, 310, 400, 420, 190, 100, 280, 370, 430, 160, 210, 260, 270];

// Crear estructura con usuarios y sus datos
const usuariosCompletos = UsuariosdeSugerencia.map((usuario, i) => {
  return {
    usuario: usuario,
    seguidores: numSeguidores[i],
    seguidos: numSeguidos[i]
  };
});

console.log(usuariosCompletos);
console.log("\n");

console.log("Último método para recorrer un array (El array completo): ");
usuariosCompletos.forEach((usuario) => {
  console.log(`Usuario: ${usuario.usuario} | Seguidores: ${usuario.seguidores} | Seguidos: ${usuario.seguidos}`);
});

console.log("\nMétodos más importantes:");
usuariosCompletos.push({
  usuario: "josephchangoluiza",
  seguidores: 100,
  seguidos: 50,
});
console.log("Luego del push", usuariosCompletos, "\n");

usuariosCompletos.unshift({
  usuario: "tami_032501",
  seguidores: 500,
  seguidos: 667
});
console.log("Después de unshift:", usuariosCompletos, "\n");

usuariosCompletos.pop();
console.log("Después de pop:", usuariosCompletos, "\n");

usuariosCompletos.shift();
console.log("Después de shift:", usuariosCompletos, "\n");

const copiaUsuarios = usuariosCompletos.slice();
console.log("Copia con slice:", copiaUsuarios, "\n");

console.log("Es un arreglo?", Array.isArray(usuariosCompletos), "\n");
console.log("Cantidad de usuarios:", usuariosCompletos.length, "\n");
console.log("Cantidad de usuarios (reverso):", usuariosCompletos.reverse(), "\n");

// Destructuración
const [primerUsuario, segundoUsuario, tercerUsuario, cuartoUsuario, quintoUsuario, sextoUsuario] = usuariosCompletos;
console.log(primerUsuario);
console.log(segundoUsuario.usuario);
console.log(tercerUsuario);
console.log(tercerUsuario.usuario);
console.log("\n");

// Rest y Spread Operator
console.log("Spread Operator: ");
const nuevosUsuarios = [...UsuariosdeSugerencia, "davidcjona", "niky.g11"];
console.log(nuevosUsuarios, "\n");

console.log("Rest Operator: ");
const [usuario1, usuario2, ...rest] = UsuariosdeSugerencia;
console.log(usuario1);
console.log(usuario2);
console.log(rest);
