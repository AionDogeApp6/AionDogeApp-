nano index.html
nano manifest.json
touch sw.js
ls
git add .
git commit -m "Actualización: Interfaz dinámica y soporte PWA"
git push origin main
nano index.html
git add ., git commit -m "UI Completa", git push origin main.
clear
ls
git add .
git commit -m "Diseño dinámico final"
git push origin main
pkg install clang
g++ minero.cpp -o minero_ejecutable
./minero_ejecutable
# Entra a tu carpeta de proyecto
cd ~/storage/downloads/tu-repo  # (Cambia 'tu-repo' por el nombre de tu carpeta)
# Crea la ruta de carpetas que Jekyll exige
mkdir -p storage/downloads
# Crea un archivo vacío (marcador) para que Git no ignore la carpeta
touch storage/downloads/.gitkeep
# 1. Agrega los cambios al índice
git add storage/downloads/.gitkeep
# 2. Crea el mensaje de confirmación
git commit -m "Fix: Estructura de carpetas para Jekyll Build"
# 3. Sube los cambios
git push origin main
rm -rf storage/downloads
# Crea una carpeta llamada 'descargas' (o cualquier otro nombre) 
# y luego la renombraremos para "engañar" al link
mkdir -p contenido/downloads
touch contenido/downloads/.gitkeep
mkdir -p archivos_storage/downloads
touch archivos_storage/downloads/.gitkeep
git add archivos_storage/downloads/.gitkeep
rm minero_ejecutable
git add .
git commit -m "Eliminar ejecutable no deseado y limpiar repositorio"
git push origin main
# Limpia el caché de paquetes descargados
pkg clean
# Elimina paquetes que se instalaron como dependencias y ya no se usan
pkg autoremove
# Repara posibles errores en la base de datos de paquetes
pkg update && pkg upgrade
# Limpia el caché de paquetes descargados
pkg clean
# Elimina paquetes que se instalaron como dependencias y ya no se usan
pkg autoremove
# Repara posibles errores en la base de datos de paquetes
pkg update && pkg upgrade
# Elimina la carpeta temporal de Termux
rm -rf $TMPDIR/*
# Limpia el caché de Python (si usas yt-dlp o scripts de Python)
find . -type d -name "__pycache__" -exec rm -rf {} +
# Elimina archivos temporales de descargas inacabadas (.part, .temp)
rm ~/storage/downloads/*.part 2>/dev/null
rm ~/storage/downloads/*.ytdl 2>/dev/null
# Limpia el caché interno de yt-dlp para evitar errores de conexión
yt-dlp --rm-cache-dir
/
echo "alias limpiar='pkg clean && pkg autoremove && rm -rf $TMPDIR/* && history -c'" >> ~/.bashrc
source ~/.bashrc
echo "alias limpiar='pkg clean && pkg autoremove && rm -rf $TMPDIR/* && history -c'" >> ~/.bashrc
source ~/.bashrc
apt autoremove -y && apt clean
pkg install python-yt-dlp -y
# Limpiar temporales
rm -rf $TMPDIR
mkdir -p $TMPDIR
# Limpiar caché de yt-dlp ahora que está instalado
yt-dlp --rm-cache-dir
# Configura tu usuario y correo (usa los de tu cuenta de GitHub)
git config --global user.name "AionDoge6"
git config --global user.email "tu-correo@ejemplo.com"
# Instalar lo necesario para el "Descargador Pro"
pkg update && pkg upgrade -y
pkg install git python ffmpeg -y
pip install yt-dlp
# Clonar el repositorio
git clone https://github.com/AionDoge6/AionDogeApp.git
# Entrar a la carpeta del proyecto
cd AionDogeApp
# Crear la estructura de carpetas necesaria
mkdir -p storage/downloads
touch storage/downloads/.gitkeep
# Vincular el almacenamiento del teléfono con Termux
termux-setup-storage
ls -R ~/AionDogeApp/storage/downloads/WhatsApp_*
termux-setup-storage
# Instalamos lo necesario para el proyecto
pkg update
pkg install nodejs-lts git -y
npm install -g expo-cli
npx create-expo-app BlocNotasIA
cd BlocNotasIA
# Para manejar el audio y permisos del micrófono
npx expo install expo-av
# Para la transcripción (Voz a Texto)
# Usaremos expo-speech-recognition que es la más estable para esto
npx expo install expo-speech-recognition
app.json
{   "expo": {;     "name": "BlocNotasIA",;     "android": {;       "permissions": [;         "RECORD_AUDIO";       ],;       "package": "com.tuusuario.blocnotasia";     }
}
nano app.json
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { SpeechRecognition } from 'expo-speech-recognition';
export default function App() {
}
const styles = StyleSheet.create({
});
pkg install nano
nano app.json
nano App.js
npx expo start
# Instalamos la librería oficial de IA de Google
npm install @google/generative-ai
# Detén cualquier proceso activo presionando CTRL + C varias veces
# Luego, limpia la pantalla
clear
# Actualiza los repositorios por si acaso
pkg update && pkg upgrade -y
# Regresa a la carpeta principal
cd ~
# Crea la carpeta para tu proyecto real de Bloques e IA
mkdir ProyectoRealIA
cd ProyectoRealIA
# Crea la estructura base (esto tardará un par de minutos)
npx create-expo-app .
# Instala las librerías necesarias para IA y Conexión a Datos Reales
npm install @google/generative-ai  # Para el cerebro de Gemini
npm install axios                  # Para consultar saldos reales de billeteras
# Entra a tu carpeta de proyecto
cd ~/ProyectoRealIA
# Instala librerías para IA y para consultar datos de la red (aire)
npm install @google/generative-ai axios
nano App.js
# Instalamos Ethers para interactuar con contratos y recompensas
npm install ethers
npm install ethers @google/generative-ai
# Instalamos el cliente de WalletConnect y utilidades de red
npm install @walletconnect/client @walletconnect/react-native-dapp buffer
pkg install python make clang -y
rm -rf node_modules package-lock.json
npm install @walletconnect/client @google/generative-ai ethers
nano App.js
npx expo start
cd ProyectoRealIA
npx expo start
npx expo start --clear
npm install expo
npx expo install react-native-web react-native-safe-area-context
npx expo start
nano App.js
npx expo start --web
# Mata cualquier proceso de Node que esté trabado
killall -9 node
# Limpia la caché de Expo (esto soluciona el 90% de los casos "guindados")
npx expo start --clear
nano App.js
# 1. Instala lo que falta para que no de error rojo
npm install @google/generative-ai
# 2. Inicia con el túnel para que tu celular lo encuentre rápido
npx expo start --tunnel
clear
npm install crypto-js
nano blockchain.js 
node blockchain.js
nano blockchain.js
index.js
nano Blockchain.js
nano index.js
nano Blockchain.js
ls
node index.js
nano index.js
nano Blockchain.js
nano billetera.js
node billetera.js
nano Blockchain.js
node billetera.js
nano Blockchain.js.
nano billetera.js
node billetera.js
rm Blockchain.js
nano Blockchain.js
node billetera.js
nano Blockchain.js
nano gastos.js
node gastos.js
nano servidor.js
node servidor.js
pkg install zip
zip -r mi_blockchain_backup.zip .
termux-setup-storage
mv mi_blockchain_backup.zip /sdcard/Download/
