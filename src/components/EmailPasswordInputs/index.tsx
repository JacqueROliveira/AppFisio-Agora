import React, { useState } from 'react';
import { TextInput, StyleSheet, View } from 'react-native';

const EmailPasswordInputs = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          placeholder="E-mail"
          placeholderTextColor="#3E768C"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
        />
        <View style={styles.bottomBorder} />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={setPassword}
          placeholder="Senha"
          placeholderTextColor="#3E768C"
          secureTextEntry={false}
          autoCapitalize="none"
          autoCorrect={false}
        />
        <View style={styles.bottomBorder} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 0,
    minWidth: 100,
    marginLeft: 0,
    marginBottom: 0,
    marginTop: 0,
  },
  inputContainer: {
    marginBottom: 15,
  },
  input: {
    fontSize: 16,
    color: '#3E768C',
    borderBottomWidth: 2,
    borderBottomColor: '#3E768C'
  },
  bottomBorder: {
    backgroundColor: '#3E768C',
  }
});

export default EmailPasswordInputs;