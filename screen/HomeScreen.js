import React, { useState } from 'react';
import { View, Text, TextInput, Image, Button, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default function HomeScreen() {
  const [nome, setNome] = useState('');
  const [imagem, setImagem] = useState(null);

  const escolherImagem = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      aspect: [4, 4],
      allowsEditing: true,
      quality: 1,
    });

    if (!result.cancelled) {
      setImagem(result.assets[0].uri);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Bem-vindo ao App de IMC</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite seu nome"
        value={nome}
        onChangeText={setNome}
      />
      <Button title="Escolher Foto" onPress={escolherImagem} />
      {imagem && <Image source={{ uri: imagem }} style={styles.imagem} />}
      {nome !== '' && <Text style={styles.boasVindas}>Olá, {nome}!</Text>}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e6f2f2',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  input: {
    width: '90%',
    padding: 12,
    borderWidth: 1,
    borderColor: '#a0d9d6',
    borderRadius: 12,
    marginBottom: 15,
    backgroundColor: '#fff',
    fontSize: 16,
    color: '#333',
    elevation: 2,
  },
  imagem: {
    width: 130,
    height: 130,
    borderRadius: 65,
    marginTop: 15,
    borderWidth: 2,
    borderColor: '#5eaaa8',
  },
  boasVindas: {
    marginTop: 20,
    fontSize: 20,
    color: '#5eaaa8',
    fontWeight: 'bold',
  }
});
