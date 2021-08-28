import React, { useState } from 'react';
import {StyleSheet, Text, View } from 'react-native';
import {TextInput, Button} from 'react-native-paper';

export default function App() {

  const [resultado, setImc] = useState(0);
  const [peso, setPeso] = useState(0);
  const [altura, setAltura] = useState(0);
  const [legenda, setLegenda] = useState('Indeterminado');
  const [cor, setCor] = useState('#bdc3c7');

  calcularIMC = () => {
    const resultado = peso / (Math.pow(altura, 2));
    setImc(Math.round(resultado));
    if (resultado < 18.5) {
      setLegenda('Magreza');
      setCor('#e74c3c');
    } else if (resultado >= 18.5 && resultado < 25) {
      setLegenda('Normal');
      setCor('#2ecc71');
    } else if (resultado >= 25 && resultado < 30) {
      setLegenda('Sobrepeso');
      setCor('#f1c40f');
    } else if (resultado >= 30 && resultado < 40) {
      setLegenda('Obesidade');
      setCor('#e67e22');
    } else if (resultado >= 40) {
      setLegenda('Obesidade Grave');
      setCor('#e74c3c');
    }
  }

  return (
    <View style={styles.app}>
      <Text style={styles.legenda}>Seu IMC</Text>

      <View style={[styles.painel, { backgroundColor: cor }]}>
        <Text style={styles.resultado}>{resultado}</Text>
        <Text style={styles.diagnostico}>{legenda}</Text>
      </View>

      <View>
        <TextInput
          keyboardType={'numeric'}
          label='Peso'
          style={styles.peso}
          onChangeText={valor => setPeso(valor.replace(',', '.'))} />

        <TextInput
          keyboardType={'numeric'}
          label='Altura'
          style={styles.altura}
          onChangeText={valor => setAltura(valor.replace(',', '.'))} />

        <Button 
          mode='contained'
          onPress={calcularIMC} >
          Calcular
        </Button>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  app: {
    padding: 10
  },
  painel: {
    borderRadius: 5,
    marginVertical: 10,
    padding: 8,
    width: 160,
    alignSelf: 'center',
  },
  legenda: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
  resultado: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
  },
  diagnostico: {
    textAlign: 'center',
    fontSize: 18,
  },
  peso: {
    marginVertical: 10,
  },
  altura: {
    marginVertical: 10,
  },
});
