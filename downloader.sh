#!/bin/bash
clear
echo "======================================="
echo "   AionDogeApp6 - UNIVERSAL PRO v3.0   "
echo "======================================="
echo "1. Descargar de Internet (YouTube/FB/TikTok)"
echo "2. Rescatar Estados de WhatsApp (Normal)"
echo "3. Rescatar Estados de WhatsApp Business"
echo "4. Limpiar Basura del Sistema"
echo "5. Salir"
echo "======================================="
read -p "Seleccione una opción: " op

# Carpeta de destino con fecha para orden
FECHA=$(date +%Y%m%d)
DESTINO="storage/downloads/WhatsApp_$FECHA"

case $op in
    1)
        read -p "Pegue el link aquí: " url
        yt-dlp -f "bv+ba/b" "$url" -o "storage/downloads/%(title)s.%(ext)s"
        echo "✅ Video guardado en descargas."
        ;;
    2|3)
        if [ $op -eq 2 ]; then
            RUTA="/sdcard/Android/media/com.whatsapp/WhatsApp/Media/.Statuses"
        else
            RUTA="/sdcard/Android/media/com.whatsapp.w4b/WhatsApp Business/Media/.Statuses"
        fi
        
        echo "Buscando archivos en la ruta..."
        mkdir -p "$DESTINO"
        cp -r "$RUTA"/* "$DESTINO/" 2>/dev/null
        
        if [ $? -eq 0 ]; then
            echo "✅ ¡Éxito! Estados guardados en: $DESTINO"
        else
            echo "❌ Error: No se encontraron estados o falta permiso de almacenamiento."
            echo "Ejecute: termux-setup-storage"
        fi
        ;;
    4)
        pkg clean && rm -rf $TMPDIR/* && history -c
        echo "✅ Termux está limpio y rápido."
        ;;
    5)
        exit
        ;;
esac
