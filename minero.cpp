
#include <iostream>
#include <fstream>
#include <string>
#include <unistd.h> // Para la pausa de 1 segundo

using namespace std;

// 1. Función para leer sensor real
float getRealTemp() {
    ifstream tempFile("/sys/class/thermal/thermal_zone0/temp");
    float rawTemp = 0;
    if (tempFile.is_open()) {
        tempFile >> rawTemp;
        tempFile.close();
        return rawTemp / 1000.0;
    }
    return 0.0; 
}

// 2. Función de lógica de control
void SmartMiningControl(float temp) {
    cout << " [.] Sensor: " << temp << "C";
    if (temp > 42.0) {
        cout << " -> [CRITICO] Bajando potencia!" << endl;
    } else {
        cout << " -> [OK] Estable" << endl;
    }
}

// 3. Función Principal con Bucle
int main() {
    cout << "--- AionDoge Real-Time Monitor ---" << endl;
    cout << "Presiona CTRL + C para salir" << endl;
    cout << "----------------------------------" << endl;

    while (true) {
        float tempActual = getRealTemp();
        
        // Si el sensor real no responde, simulamos para la prueba
        if (tempActual <= 0) { tempActual = 38.5; }

        SmartMiningControl(tempActual);

        usleep(1000000); // Espera 1 segundo
    }
    return 0;
}
