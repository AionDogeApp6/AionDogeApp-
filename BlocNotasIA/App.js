import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { SpeechRecognition } from 'expo-speech-recognition';

export default function App() {
  const [estaEscuchando, setEstaEscuchando] = useState(false);
  const [notaTexto, setNotaTexto] = useState('');

  const toggleMicrofono = async () => {
    if (estaEscuchando) {
      SpeechRecognition.stop();
      setEstaEscuchando(false);
    } else {
      setEstaEscuchando(true);
      try {
        await SpeechRecognition.start({
          lang: 'es-ES',
          interimResults: true,
        });
        
        SpeechRecognition.onResult((res) => {
          setNotaTexto(res.transcript);
        });
      } catch (e) {
        console.error("Error de micro:", e);
        setEstaEscuchando(false);
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>🎙️ Mi Bloc IA</Text>
      
      <ScrollView style={styles.notaContenedor}>
        <Text style={styles.textoNota}>
          {notaTexto || "Presiona el botón para dictar tu nota..."}
        </Text>
      </ScrollView>

      <TouchableOpacity 
        style={[styles.botonMicro, estaEscuchando && styles.botonActivo]} 
        onPress={toggleMicrofono}
      >
        <Text style={{fontSize: 40}}>{estaEscuchando ? "🛑" : "🎤"}</Text>
      </TouchableOpacity>
      
      <Text style={styles.estado}>
        {estaEscuchando ? "Grabando voz..." : "Listo para escuchar"}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 40, alignItems: 'center' },
  header: { fontSize: 26, fontWeight: 'bold', marginBottom: 20, color: '#1A1A1A' },
  notaContenedor: { flex: 1, width: '100%', backgroundColor: '#F5F5F5', borderRadius: 15, padding: 20, borderWidth: 1, borderColor: '#DDD' },
  textoNota: { fontSize: 18, color: '#333', lineHeight: 24 },
  botonMicro: { width: 90, height: 90, borderRadius: 45, backgroundColor: '#007AFF', justifyContent: 'center', alignItems: 'center', marginTop: 30, elevation: 5 },
  botonActivo: { backgroundColor: '#FF3B30' },
  estado: { marginTop: 15, fontSize: 14, color: '#888', fontWeight: '500' }
});
