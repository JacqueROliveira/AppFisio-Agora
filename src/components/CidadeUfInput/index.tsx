import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';


/*  a contante da cidade ta utilizando o useState, que é capaz de guardar uma informação
  assim que ela é selecionada */
const CidadeUFInput = () => {
  const [cidade, setCidade] = useState('');
  const [ufSelecionada, setUfSelecionada] = useState('');

  const ufs = [
    { label: 'AC', value: 'AC' },
    { label: 'AL', value: 'AL' },
    { label: 'AP', value: 'AP' },
    { label: 'AM', value: 'AM' },
    { label: 'BA', value: 'BA' },
    { label: 'CE', value: 'CE' },
    { label: 'DF', value: 'DF' },
    { label: 'ES', value: 'ES' },
    { label: 'GO', value: 'GO' },
    { label: 'MA', value: 'MA' },
    { label: 'MT', value: 'MT' },
    { label: 'MS', value: 'MS' },
    { label: 'MG', value: 'MG' },
    { label: 'PA', value: 'PA' },
    { label: 'PB', value: 'PB' },
    { label: 'PR', value: 'PR' },
    { label: 'PE', value: 'PE' },
    { label: 'PI', value: 'PI' },
    { label: 'RJ', value: 'RJ' },
    { label: 'RN', value: 'RN' },
    { label: 'RS', value: 'RS' },
    { label: 'RO', value: 'RO' },
    { label: 'RR', value: 'RR' },
    { label: 'SC', value: 'SC' },
    { label: 'SP', value: 'SP' },
    { label: 'SE', value: 'SE' },
    { label: 'TO', value: 'TO' }
  ];

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Cidade"
        placeholderTextColor="#3E768C"
        value={cidade}
        onChangeText={setCidade}
      />
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={ufSelecionada}
          style={[styles.picker, { color: '#3E768C' }]}
          onValueChange={(itemValue) => setUfSelecionada(itemValue)}
          dropdownIconColor="#3E768C"
        >
          <Picker.Item 
            label="UF" 
            value="" 
            color="#3E768C"
            style={styles.pickerItem}
          />
          {ufs.map((uf) => (
            <Picker.Item 
              key={uf.value} 
              label={uf.label} 
              value={uf.value}
              color="#3E768C"
              style={styles.pickerItem}
            />
          ))}
        </Picker>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 10
  },
  input: {
    flex: 2,
    height: 30,
    marginRight: 10,
    color: '#3E768C',
    borderBottomWidth: 2,
    borderColor: '#3E768C',
    fontSize: 16,
  },
  pickerContainer: {
    flex: 1,
    height: 30,
    borderWidth: 3,
    borderColor: '#3E768C',
    borderStyle: 'solid',
    borderRadius: 2,
    justifyContent: 'center'
  },
  picker: {
    height: 40,
  },
  pickerItem: {
    color: '#3E768C',
    fontSize: 16,
    justifyContent: 'flex-start'
  }
});

export default CidadeUFInput;