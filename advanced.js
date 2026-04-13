// 🧩 Ejercicio 1: Acceso bancario seguro
// Variables:
// ● usuario
// ● password
// ● intentos
// Reglas:
// ● Si intentos ≥ 3 → "Cuenta bloqueada"
// ● Si no:
// ○ Si usuario === "admin":
// ■ Si password === "1234" → "Acceso permitido"
// ■ Si no → "Password incorrecto"
// ○ Si no → "Usuario incorrecto"

console.log(" ex) 1");

let usuario = "admin";
let password = "123ff";
let intentos = 3;

const loginTry =
  intentos > 3
    ? "Cuenta bloqueada"
    : usuario === "admin" && password === "1234"
      ? "Acceso permitido"
      : usuario != "admin" && password === "1234"
        ? "Usuario incorrecto"
        : "Password incorrecto";

console.log(loginTry);

// 🧩 Ejercicio 2: Calculadora de descuentos avanzada
// Variables:
// ● precio
// ● clienteVIP (true/false)
// ● cupon (true/false)
// Reglas:
// ● Si VIP:
// ○ Si cupón → 30% descuento
// ○ Si no → 20%
// ● Si no VIP:
// ○ Si cupón → 10%
// ○ Si no → 0%
// 👉 Mostrar precio final

console.log("ex)2");

let precio = 12345;
let clienteVIP = true;
let cupon = true;

let precioFinal;

if (clienteVIP) {
  if (cupon) {
    precioFinal = precio * 0.7; 
  } else {
    precioFinal = precio * 0.8; 
  }
} else {
  if (cupon) {
    precioFinal = precio * 0.9;
  } else {
    precioFinal = precio; 
  }
}

console.log(`precio Final es ${precioFinal} euro`);

// Ejercicios variables y condicionales NIVEL 2
// 🧩 Ejercicio 3: Clasificación de triángulo
// Variables:
// ● lado1, lado2, lado3
// Reglas:
// ● Si no cumple triángulo → "No válido"
// ● Si todos iguales → "Equilátero"
// ● Si 2 iguales → "Isósceles"
// ● Si todos distintos → "Escaleno"

console.log("ex)3");

let lado1;
let lado2;
let lado3;



// 🧩 Ejercicio 4: Sistema de multas
// Variables:
// ● velocidad
// ● zona ("urbana", "autopista")
// Reglas:
// ● Urbana:
// ○ 70 → multa grave

// ○ 50 → multa leve

// ● Autopista:
// ○ 130 → multa grave

// ○ 120 → multa leve

// ● Si no → sin multa

console.log("ex)4");
let velocidad = 123;
let zona = "autopista";

if(zona === "urbana"){
    if(velocidad > 70){
        console.log("multa grave");
    }else if(velocidad > 50){
        console.log("multa leve")
    } else{
        console.log("sin multa");
    }
}else if(zona === "autopista"){
    if(velocidad > 130){
        console.log("multa grave");
    } else if(velocidad > 120){
        console.log("multa leve");
    }console.log("sin multa");
}

// 04TA05_
// Ejercicios variables y condicionales NIVEL 2
// 🧩 Ejercicio 5: Login con roles + estado
// Variables:
// ● usuario
// ● password
// ● activo (true/false)
// ● rol ("admin", "user")
// Reglas:
// ● Si no activo → "Cuenta desactivada"
// ● Si activo:
// ○ Validar credenciales
// ○ Si correctas:
// ■ admin → "Panel admin"
// ■ user → "Panel usuario"
// ○ Si incorrectas → error

let user = "admin";
let pass = "1234";
let activo = true;
let role = "admin";



// 🧩 Ejercicio 6: Sistema de envío complejo
// Variables:
// ● peso
// ● distancia
// ● express (true/false)
// Reglas:
// ● Si peso > 20 → "No permitido"
// ● Si no:
// ○ Si distancia > 100:
// ■ express → caro
// ■ no → normal
// ○ Si distancia ≤ 100:
// ■ express → medio
// ■ no → barato

// 04TA05_
// Ejercicios variables y condicionales NIVEL 2

// 🧩 Ejercicio 7: Juego de adivinanza con pistas
// Variables:
// ● numeroSecreto
// ● intento
// Reglas:
// ● Si igual → "Correcto"
// ● Si diferencia ≤ 5 → "Muy cerca"
// ● Si diferencia ≤ 10 → "Cerca"
// ● Si no → "Lejos"

// 🧩 Ejercicio 8: Clasificación IMC avanzada
// Variables:
// ● peso
// ● altura
// Calcular IMC:
// ● < 18.5 → Bajo peso
// ● 18.5–24.9 → Normal
// ● 25–29.9 → Sobrepeso
// ● ≥ 30:
// ○ ≥ 35 → Obesidad severa
// ○ si no → Obesidad
// 👉 Usa anidados dentro de rangos

// 04TA05_
// Ejercicios variables y condicionales NIVEL 2

// 🧩 Ejercicio 9: Máquina expendedora (switch +
// lógica)
// Variables:
// ● producto ("A", "B", "C")
// ● dinero
// Precios:
// ● A → 1€
// ● B → 2€
// ● C → 3€
// Reglas:
// ● Si dinero suficiente → "Producto entregado"
// ● Si no → "Dinero insuficiente"
// ● default → "Producto inválido"

// 🧩 Ejercicio 10: Sistema de acceso a evento VIP
// Variables:
// ● edad
// ● tieneEntrada
// ● listaVIP
// ● codigoEspecial
// Reglas:
// ● Si edad < 18 → "Denegado"
// ● Si ≥ 18:
// ○ Si entrada:
// ■ Si VIP → "Acceso VIP"
// ■ Si no → "Acceso normal"
// ○ Si no entrada:
// ■ Si VIP:
// ■ Si código → "Acceso especial"
// ■ Si no → "Acceso VIP limitado"
// ■ Si no → "Denegado"

// 04TA05_
// Ejercicios variables y condicionales NIVEL 2

// 💀 MINI RETO FINAL
// 👉 Reescribe 2 ejercicios SIN usar if/else
// ● Solo con:
// ○ ternarias
// ○ switch
// ○ operadores lógicos
