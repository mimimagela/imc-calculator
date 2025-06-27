import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function ImcScreen() {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [resultado, setResultado] = useState(null);

  const calcularIMC = () => {
    const p = parseFloat(peso.replace(',', '.'));
    const a = parseFloat(altura.replace(',', '.'));
    if (!isNaN(p) && !isNaN(a) && a > 0) {
      const imc = p / (a * a);
      let classificacao = '';
      if (imc < 18.5) classificacao = 'Abaixo do peso';
      else if (imc < 24.9) classificacao = 'Peso normal';
      else if (imc < 29.9) classificacao = 'Sobrepeso';
      else classificacao = 'Obesidade';
      setResultado(`Seu IMC é ${imc.toFixed(2)} - ${classificacao}`);
    } else {
      setResultado('Preencha os campos corretamente.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Calcule seu IMC</Text>
      <TextInput
        style={styles.input}
        placeholder="Peso (kg)"
        keyboardType="numeric"
        value={peso}
        onChangeText={setPeso}
      />
      <TextInput
        style={styles.input}
        placeholder="Altura (m)"
        keyboardType="numeric"
        value={altura}
        onChangeText={setAltura}
      />
      <Button title="Calcular" onPress={calcularIMC} />
      {resultado && <Text style={styles.resultado}>{resultado}</Text>}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fefefe',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  titulo: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#444',
  },
  input: {
    width: '90%',
    padding: 12,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 12,
    backgroundColor: '#fff',
    fontSize: 16,
    color: '#333',
    elevation: 2,
  },
  resultado: {
    marginTop: 25,
    fontSize: 18,
    color: '#2d6a4f',
    fontWeight: '600',
    textAlign: 'center',
  },
});

