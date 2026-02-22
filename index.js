// Importamos la lógica anterior (el motor)
const { Blockchain, Bloque } = require('./Blockchain');

// 1. Inicializamos la red
const miRedInteligente = new Blockchain();

console.log("-------------------------------------------");
console.log("🚀 SISTEMA DE CONTRATOS INTELIGENTES 2026");
console.log("-------------------------------------------");

// 2. Simulamos la llegada de un Contrato de Recompensa
const datosContrato = {
    receptor: "Wallet_Coinbase_0x123",
    sats: 125894,
    tipo: "Minería de Bloque IA"
};

// 3. Simulación de Auditoría de IA (Antes de minar)
console.log("🤖 Consultando Oráculo IA para validación...");
const veredictoIA = "VERIFICADO: Transacción legítima. Firma digital válida.";

// 4. Creamos el bloque y lo ponemos a trabajar en cadena
console.log("\n📦 Creando nuevo bloque de contrato...");
const nuevoBloque = new Bloque(1, datosContrato);

// 5. El bloque se une a la cadena y empieza a minar
miRedInteligente.agregarBloque(nuevoBloque, veredictoIA);

// 6. Verificación de Integridad final
console.log("\n-------------------------------------------");
console.log("🔍 AUDITORÍA DE RED:");
const esValida = miRedInteligente.validarCadena();
console.log(`Estado de la cadena: ${esValida ? "INTEGRA ✅" : "CORRUPTA ❌"}`);

// 7. Mostramos el resultado final en la terminal
console.log("\n📚 LIBRO CONTABLE ACTUALIZADO:");
console.log(JSON.stringify(miRedInteligente.chain, null, 2));
console.log("-------------------------------------------");
console.log("\n⚠️ INTENTO DE HACKEO DETECTADO...");
miRedInteligente.chain[1].data.sats = 99999999; // Intentamos darnos más dinero
console.log("¿Es válida la cadena tras el hackeo?: " + (miRedInteligente.validarCadena() ? "SÍ ✅" : "NO ❌"));
