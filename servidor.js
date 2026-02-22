const http = require('http');
const { Blockchain, Bloque } = require('./Blockchain');

// Función principal para manejar la lógica asíncrona
async function iniciarSistema() {
    const miRedIA = new Blockchain();

    console.log("--------------------------------------------");
    console.log("🛡️ SISTEMA PROTEGIDO INICIANDO...");
    
    // IMPORTANTE: Ahora usamos 'await' para no estresar la CPU
    await miRedIA.agregarEntrada(new Bloque(1, { monto: 150000, tipo: "DEPOSITO" }), "IA: Verificado");
    await miRedIA.agregarEntrada(new Bloque(2, { monto: 45000, tipo: "ENVIO" }), "IA: Transacción segura");

    const server = http.createServer((req, res) => {
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });

        let html = `
        <html>
        <head>
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <style>
                body { font-family: 'Segoe UI', sans-serif; background: #0b0f19; color: #e2e8f0; padding: 20px; }
                .saldo-box { background: linear-gradient(45deg, #1e293b, #0f172a); border-radius: 15px; padding: 20px; text-align: center; border: 1px solid #334155; margin-bottom: 30px; }
                .saldo-nemo { font-size: 32px; color: #10b981; font-weight: bold; }
                .card { background: #1e293b; border-radius: 10px; padding: 15px; margin-bottom: 15px; border-left: 4px solid #3b82f6; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.3); }
                .hash { font-family: 'Courier New', monospace; font-size: 11px; color: #64748b; word-break: break-all; margin-top: 8px; }
                .tag { background: #064e3b; color: #34d399; padding: 3px 8px; border-radius: 5px; font-size: 11px; text-transform: uppercase; }
                h1 { text-align: center; color: #f8fafc; letter-spacing: 1px; }
            </style>
        </head>
        <body>
            <h1>🛡️ Auditoría de Datos IA</h1>
            <div class="saldo-box">
                <div style="font-size: 14px; color: #94a3b8;">FONDO TOTAL VERIFICADO</div>
                <div class="saldo-nemo">${miRedIA.chain.reduce((total, b) => total + (b.data.monto || 0), 0)} SATS</div>
            </div>
            <h3>📋 Registro de Entradas</h3>
        `;

        miRedIA.chain.forEach(bloque => {
            html += `
            <div class="card">
                <div style="display: flex; justify-content: space-between;">
                    <strong>Registro #${bloque.index}</strong>
                    <span class="tag">${bloque.audit_log}</span>
                </div>
                <p style="font-size: 14px;">Contenido: ${JSON.stringify(bloque.data)}</p>
                <div class="hash">ID: ${bloque.hash}</div>
            </div>
            `;
        });

        html += `</body></html>`;
        res.end(html);
    });

    // Cambiamos el puerto al 9123 para pasar desapercibidos
    const PUERTO = 9123;
    server.listen(PUERTO, () => {
        console.log("--------------------------------------------");
        console.log("🖥️  PANEL DE CONTROL ACTIVO");
        console.log(`🔗 Accede en: http://localhost:${PUERTO}`);
        console.log("--------------------------------------------");
    });
}

// Arrancamos el motor
iniciarSistema().catch(err => console.error("Error en el sistema:", err));

