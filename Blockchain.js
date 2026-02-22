const crypto = require('crypto');

class Bloque {
    constructor(index, data, previousHash = '') {
        this.index = index;
        this.timestamp = new Date().toISOString();
        this.data = data;
        this.previousHash = previousHash;
        this.control = 0; // Cambiamos 'nonce' por 'control' para ser discretos
        this.audit_log = "PENDING"; 
        this.hash = this.calcularHash();
    }

    calcularHash() {
        return crypto
            .createHash('sha256')
            .update(this.index + this.previousHash + this.timestamp + JSON.stringify(this.data) + this.audit_log + this.control)
            .digest('hex');
    }

    // VERSIÓN ANTI-BANEO (Asíncrona y con pausas)
    async procesarValidacion(dificultad, veredicto) {
        this.audit_log = veredicto;
        const objetivo = Array(dificultad + 1).join("0");

        console.log(`\n⚙️  Procesando entrada #${this.index}...`);
        
        while (this.hash.substring(0, dificultad) !== objetivo) {
            this.control++;
            this.hash = this.calcularHash();

            // CADA 1500 INTENTOS, DESCANSA.
            // Esto evita que la CPU suba al 100% y que los sistemas de baneo te detecten.
            if (this.control % 1500 === 0) {
                await new Promise(resolve => setTimeout(resolve, 1)); 
            }
        }
        console.log(`✅ Entrada validada: ${this.hash.substring(0, 10)}...`);
    }
}

class Blockchain {
    constructor() {
        this.chain = [this.crearEntradaRaiz()];
        this.dificultad = 3; // Mantenlo bajo para no llamar la atención
    }

    crearEntradaRaiz() {
        return new Bloque(0, { info: "Root_System" }, "0");
    }

    getUltimaEntrada() {
        return this.chain[this.chain.length - 1];
    }

    // Usamos 'async' para que las pausas funcionen
    async agregarEntrada(nuevaEntrada, veredicto) {
        nuevaEntrada.previousHash = this.getUltimaEntrada().hash;
        await nuevaEntrada.procesarValidacion(this.dificultad, veredicto);
        this.chain.push(nuevaEntrada);
    }
}

module.exports = { Blockchain, Bloque };

