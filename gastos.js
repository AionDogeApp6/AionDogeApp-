const { Blockchain, Bloque } = require('./Blockchain');

const miRed = new Blockchain();

console.log("--- 💰 BIENVENIDO AL SISTEMA DE PAGOS IA ---");

// 1. Cargamos saldo inicial (Depósito)
console.log("\n📥 Recibiendo depósito inicial...");
const dep = new Bloque(1, { monto: 100000, tipo: "DEPOSITO", info: "Inversión Inicial" });
miRed.agregarBloque(dep, "IA: Depósito verificado.");

// 2. Intentamos un gasto legítimo
console.log("\n💸 Intento de pago #1: Comprar servidor (25,000 Sats)");
miRed.intentarTransaccion("MiBilletera", "Proveedor_Hosting", 25000);

// 3. Intentamos un gasto ilegal (Más de lo que tenemos)
console.log("\n💸 Intento de pago #2: Comprar un Tesla (500,000 Sats)");
miRed.intentarTransaccion("MiBilletera", "Tesla_Store", 500000);

console.log("\n--- 📊 ESTADO FINAL DE CUENTA ---");
console.log(`Saldo Final: ${miRed.obtenerSaldoActual()} Sats`);
console.log("-------------------------------------------");
