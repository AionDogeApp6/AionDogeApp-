const { Blockchain, Bloque } = require('./Blockchain');

const miRed = new Blockchain();

console.log("💰 INICIANDO BILLETERA...");

// Agregamos varios bloques para sumar Sats
miRed.agregarBloque(new Bloque(1, { sats: 50000 }), "IA: OK");
miRed.agregarBloque(new Bloque(2, { sats: 75894 }), "IA: OK");

// Función de suma
let saldoTotal = 0;
miRed.chain.forEach((bloque, index) => {
    if(index > 0) saldoTotal += bloque.data.sats;
});

if(miRed.validarCadena()){
    console.log("\n----------------------------------");
    console.log(`💵 SALDO TOTAL: ${saldoTotal} Sats`);
    console.log("----------------------------------");
}

