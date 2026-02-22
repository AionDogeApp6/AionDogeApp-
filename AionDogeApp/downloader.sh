#!/bin/bash
clear
echo "======================================="
echo "   AionDogeApp6 - DESCARGADOR PRO      "
echo "======================================="
read -p "Pegue el link aquí: " url
yt-dlp -f "bv+ba/b" "$url" -o "storage/downloads/%(title)s.%(ext)s"
echo "✅ Descarga completada en storage/downloads"
