import React, { useState } from 'react';
import { TextInput, StyleSheet, View, Text } from 'react-native';

const PhoneInput = () => {
  const [phone, setPhone] = useState('');

  const formatPhoneNumber = (text) => {
    // Remove todos os caracteres não numéricos
    const cleaned = text.replace(/\D/g, '');
    
    // Aplica a máscara
    let formatted = cleaned;
    if (cleaned.length <= 11) {
      if (cleaned.length > 2) {
        formatted = `(${cleaned.slice(0, 2)}`
        if (cleaned.length > 2) {
          formatted += `) ${cleaned.slice(2, 7)}`
          if (cleaned.length > 7) {
            formatted += `-${cleaned.slice(7, 11)}`
          }
        }
      }
    } else {
      // Limita a 11 dígitos
      formatted = formatted.slice(0, 11);
    }
    
    return formatted;
  };

  const handlePhoneChange = (text) => {
    const formattedPhone = formatPhoneNumber(text);
    setPhone(formattedPhone);
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={phone}
          onChangeText={handlePhoneChange}
          placeholder="(00) 00000-0000"
          placeholderTextColor="#3E768C"
          keyboardType="numeric"
          maxLength={15}
        />
        <View style={styles.bottomBorder} />
      </View>
      <View style={styles.labelContainer}>
        <Text style={styles.PhoneDesign}>(Telefone)</Text>
        <View style={styles.bottomBorder} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderBottomWidth: 2,
    borderBottomColor: '#3E768C',
    minWidth: 100,
    marginLeft: 0,
    marginBottom: 15,
    marginTop: 5,
  },
  inputContainer: {
    flex: 1,
    justifyContent: 'flex-end'
  },
  input: {
    fontSize: 16,
    color: '#3E768C',
    backgroundColor: 'white',
  },
  labelContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  label: {
    fontSize: 16,
    color: '#3E768C',
  },
  bottomBorder: {
    borderBottomColor: 'white',
    color: '#3E768C',
    fontSize: 16,
    paddingBottom: 2,
    alignItems: 'center',
    justifyContent: 'center'
  },
  PhoneDesign: {
    color: '#3E768C',
    fontSize: 16,
    paddingBottom: 2,
    marginBottom: 2,
  }
});

export default PhoneInput;