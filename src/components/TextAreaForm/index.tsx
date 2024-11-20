import React, { useState } from 'react';
import { 
  View, 
  TextInput, 
  StyleSheet, 
  Text,
  KeyboardAvoidingView,
  Platform
} from 'react-native';

const TextAreaInput = () => {
  const [text, setText] = useState('');

  const handleChange = (value) => {
    setText(value);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          multiline={true}
          numberOfLines={4}
          value={text}
          onChangeText={handleChange}
          placeholder="Descreva a sua dor..."
          placeholderTextColor="#3E768C"
          textAlignVertical="top"
        />
        <TextInput
          style={styles.input}
          multiline={true}
          numberOfLines={4}
          value={text}
          onChangeText={handleChange}
          placeholder="Histórico de doenças/Lesões"
          placeholderTextColor="#3E768C"
          textAlignVertical="top"
        />
        <TextInput
          style={styles.input}
          multiline={true}
          numberOfLines={4}
          value={text}
          onChangeText={handleChange}
          placeholder="Histórico Cirúrgico"
          placeholderTextColor="#3E768C"
          textAlignVertical="top"
        />
        <TextInput
          style={styles.input}
          multiline={true}
          numberOfLines={4}
          value={text}
          onChangeText={handleChange}
          placeholder="prática de esportes ou exercício físico? "
          placeholderTextColor="#3E768C"
          textAlignVertical="top"
        />
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
  },
  Container2:{
    flex: 1,
    padding: 0,
    
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
    color: '#3E768C',
  },
  input: {
    borderWidth: 1,
    borderColor: '#3E768C',
    borderRadius: 30,
    padding: 12,
    fontSize: 16,
    backgroundColor: '#fff',
    height: 80,
    shadowColor: '#3E768C',
    marginBottom: 7,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2, // para Android
  },
});

export default TextAreaInput;