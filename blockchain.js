
const crypto = require('crypto');

class Bloque {
    constructor(index, data, previousHash = '') {
        this.index = index;
        this.timestamp = new Date().toISOString();
        this.data = data;
        this.previousHash = previousHash;
        this.nonce = 0;
        this.ai_audit = "PENDING"; 
        this.hash = this.calcularHash();
    }

    calcularHash() {
        return crypto
            .createHash('sha256')
            .update(
                this.index + 
                this.previousHash + 
                this.timestamp + 
                JSON.stringify(this.data) + 
                this.ai_audit + 
                this.nonce
            )
            .digest('hex');
    }

    minarBloque(dificultad, veredictoIA) {
        this.ai_audit = veredictoIA;
        const objetivo = Array(dificultad + 1).join("0");

        while (this.hash.substring(0, dificultad) !== objetivo) {
            this.nonce++;
            this.hash = this.calcularHash();
        }
        console.log(`✅ Bloque #${this.index} Minado: ${this.hash}`);
    }
}

class Blockchain {
    constructor() {
        this.chain = [this.crearBloqueGenesis()];
        this.dificultad = 3;
    }

    crearBloqueGenesis() {
        return new Bloque(0, "Bloque Génesis - Inicio de la Cadena", "0");
    }

    getUltimoBloque() {
        return this.chain[this.chain.length - 1];
    }

    agregarBloque(nuevoBloque, veredicto) {
        // AQUÍ SE CREA LA CADENA: El nuevo bloque toma el hash del anterior
        nuevoBloque.previousHash = this.getUltimoBloque().hash;
        
        nuevoBloque.minarBloque(this.dificultad, veredicto);
        this.chain.push(nuevoBloque);
    }

    // EL GUARDIÁN DE LA CADENA: Revisa que nadie haya alterado nada
    validarIntegridad() {
        for (let i = 1; i < this.chain.length; i++) {
            const bloqueActual = this.chain[i];
            const bloqueAnterior = this.chain[i - 1];

            // 1. ¿El contenido del bloque actual sigue siendo el mismo?
            if (bloqueActual.hash !== bloqueActual.calcularHash()) {
                console.log(`❌ Error: El bloque ${i} ha sido alterado.`);
                return false;
            }

            // 2. ¿El bloque actual apunta correctamente al anterior?
            if (bloqueActual.previousHash !== bloqueAnterior.hash) {
                console.log(`❌ Error: La cadena se rompió en el bloque ${i}.`);
                return false;
            }
        }
        return true;
    }
}

module.exports = { Blockchain, Bloque };
