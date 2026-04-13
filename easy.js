// 🟢 NIVEL 0 – FUNDAMENTOS
// 🧩 Ejercicio 1: Temperatura
// Variable temperatura:
// ● 30 → "Hace calor"

// ● ≤ 30 → "Hace fresco"

console.log("nivel 0 ex) 1");

let current_temperture = 31;

const temperture = current_temperture > 30 ? "Hace calor" : "Hace fresco";

console.log(temperture);

console.log("----------------------------------------------------");

// 🧩 Ejercicio 2: Número mayor
// Variables a y b
// Mostrar cuál es mayor o si son iguales

console.log("nivel 0 ex) 2");

let a = 12;
let b = 12;

const compare = b === a ? `a and b is same, ${a}`: a > b ? "a is bigger" : "b is bigger";

console.log(compare);

console.log("----------------------------------------------------");

// 🟡 NIVEL 1 – IF / ELSE IF
// 🧩 Ejercicio 3: Edad y etapa de vida
// Variable edad:
// ● < 12 → "Niño"
// ● < 18 → "Adolescente"
// ● < 65 → "Adulto"
// ● ≥ 65 → "Senior"

console.log("nivel 1 ex) 3");

let edad = 64;

const isAdult = edad < 12 ? "Niño" : edad < 18 ? "Adolescente" : edad < 65 ? "Adulto" : "Senior";

console.log(isAdult);

console.log("----------------------------------------------------");

// 🧩 Ejercicio 4: Hora del día
// Variable hora (0–23):
// ● 6–11 → "Mañana"
// ● 12–19 → "Tarde"
// ● 20–23 → "Noche"
// ● 0–5 → "Madrugada"

console.log("nivel 1 ex) 4");

let hora = 12;

const día = hora >= 6 && hora <=11 
            ? "Mañana" 
            : hora >= 12 && hora <= 19 
            ? "Tarde" 
            : hora >= 20 && hora <= 23 
            ? "Noche" 
            : "Madrugada";

console.log(día);

console.log("----------------------------------------------------");

// 🟠 NIVEL 2 – TERNARIA
// 🧩 Ejercicio 5: Acceso a web
// Variable logueado (true/false)
// Mostrar:
// ● "Bienvenido"
// ● "Inicia sesión"
// 👉 Solo con ternaria

console.log("nivel 2 ex) 5");

let login = false;

const isLogin = login ? "Bienvenido" : "Inicia sesión";

console.log(isLogin);

console.log("----------------------------------------------------");

// 🧩 Ejercicio 6: Número mayor de 10
// Variable num
// Mostrar:
// ● "Mayor que 10"
// ● "Menor o igual a 10"
// 👉 Usar ternaria

console.log("nivel 2 ex) 6");

let num = 9.99999;

const isTen = num <= 10 ? "Menor o igual a 10" : "Mayor que 10";

console.log(isTen);

console.log("----------------------------------------------------");

// 🔵 NIVEL 3 – ANIDADOS
// 🧩 Ejercicio 7: Cajero automático
// Variables:
// ● saldo
// ● retirar
// Reglas:
// ● Si retirar ≤ saldo:
// ○ Si retirar > 0 → "Retiro exitoso"
// ○ Si no → "Cantidad inválida"
// ● Si retirar > saldo → "Saldo insuficiente"

console.log("nivel 3 ex) 7");

let saldo = 20000;
let retirar = 20000;

const isSuccess =
  retirar <= saldo && retirar > 0
    ? "Retiro exitoso"
    : retirar > saldo
    ? "Saldo insuficiente"
    : "Cantidad inválida";

console.log(isSuccess);

console.log("----------------------------------------------------");

// 04TA04_
// Ejercicios variables y condicionales
// 🧩 Ejercicio 8: Acceso a curso
// Variables:
// ● tieneCuenta
// ● cursoPagado
// Reglas:
// ● Si tiene cuenta:
// ○ Si curso pagado → "Acceso al curso"
// ○ Si no → "Compra el curso"
// ● Si no → "Regístrate"

console.log("nivel 3 ex) 8");

let tieneCuenta = false;
let cursoPagado = false;

const courseAccess = tieneCuenta && cursoPagado ?  "Acceso al curso" : tieneCuenta && !cursoPagado ? "Compra el curso" : "Regístrate";

console.log(courseAccess);

console.log("----------------------------------------------------");

// 🟣 NIVEL 4 – SWITCH
// 🧩 Ejercicio 9: Tipo de usuario
// Variable rol:
// ● "admin" → "Control total"
// ● "editor" → "Puede editar"
// ● "viewer" → "Solo lectura"
// ● default → "Rol desconocido"

console.log("nivel 4 ex) 9");

let rol = "aaaa";

switch(rol){
    case "admin":
        console.log("Control total");
        break;
    case "editor":
        console.log("Puede editar");
        break;
   case "viewer":
       console.log("Solo lectura");
       break;
    default:
        console.log("Rol desconocido");
}

console.log("----------------------------------------------------");

// 04TA04_
// Ejercicios variables y condicionales
// 🔴 NIVEL 5 – AVANZADO
// 🧩 Ejercicio 10: Sistema de notas con mejora
// Variables:
// ● nota
// ● recuperacion (true/false)
// Reglas:
// ● Si nota ≥ 5 → "Aprobado"
// ● Si nota < 5:
// ○ Si recuperación → "Aprobado por recuperación"
// ○ Si no → "Suspenso"

console.log("nivel 5 ex)10");

let nota = 4;
let recuperacion = true;

const isAprroved = nota > 5 ? "Aprobado"
                  : nota < 5 && recuperacion
                  ? "Aprobado por recuperación"
                  : "Suspenso";

console.log(isAprroved);
// 🚀 MINI RETO EXTRA (opcional)
// Transforma:
// ● Ejercicio 3 → con ternarias
// ● Ejercicio 9 → con if/else
// ● Ejercicio 7 → añadiendo validación de números negativos

console.log("ex 9");

const whichRole = rol === "admin"
                  ? "Control total"
                  : rol === "editor"
                  ? "Puede editar"
                  : rol ===  "viewer"
                  ? "Solo lectura"
                  : "Rol desconocido";

console.log(whichRole);


console.log("ex 7");
// 🧩 Ejercicio 7: Cajero automático
// Variables:
// ● saldo
// ● retirar
// Reglas:
// ● Si retirar ≤ saldo:
// ○ Si retirar > 0 → "Retiro exitoso"
// ○ Si no → "Cantidad inválida"
// ● Si retirar > saldo → "Saldo insuficiente"

const atm =
  saldo < 0 || retirar < 0
    ? "Out of service"
    : retirar <= saldo && retirar > 0
    ? "Withdrawal successful"
    : retirar > saldo
    ? "Insufficient balance"
    : "Invalid amount";

console.log(atm);