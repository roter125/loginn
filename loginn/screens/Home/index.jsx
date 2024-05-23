import React, { useState } from 'react';
import {View,Text,TextInput,Button,StyleSheet,SafeAreaView,Image,} from 'react-native';

const App = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailValid, setEmailValid] = useState(true);
  const [passwordValid, setPasswordValid] = useState(true);

  const validateEmail = (email) => {
    const isValid = email.includes('@');
    setEmailValid(isValid);
    return isValid;
  };

  const validatePassword = (password) => {
    const isValid = password.length === 10;
    setPasswordValid(isValid);
    return isValid;
  };

  const handleLogin = () => {
    const isEmailValid = validateEmail(email);
    const isPasswordValid = validatePassword(password);

    if (isEmailValid && isPasswordValid) {
      console.log('Login successful');
    } else {
      console.log('Validation failed');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      
      <View style={styles.formContainer}>
      <Image source={require('../../assets/sesi-logo-2.png')} style={styles.image} />
        <View style={[styles.inputContainer, !emailValid && styles.errorContainer]}>
          <TextInput
            style={[styles.input, !emailValid && styles.errorInput]}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            onBlur={() => validateEmail(email)}
          />
          {!emailValid && <Text style={styles.errorMessage}>Email inválido</Text>}
        </View>
        <View style={[styles.inputContainer, !passwordValid && styles.errorContainer]}>
          <TextInput
            style={[styles.input, !passwordValid && styles.errorInput]}
            placeholder="Senha"
            value={password}
            onChangeText={setPassword}
            onBlur={() => validatePassword(password)}
            secureTextEntry
            maxLength={10}
          />
          {!passwordValid && <Text style={styles.errorMessage}>A senha deve ter exatamente 10 caracteres</Text>}
        </View>
        <Button title="Login" onPress={handleLogin} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#f5f5f5',

  },
  formContainer: {
    width: '90%',
    maxWidth: 400,
    padding: 20,
    borderRadius: 10,
    backgroundColor: '#fff',
    shadowColor: '#DF013A',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  image: {
    width: 200,
    height: 100,
    marginBottom: 20,
    margin: 30
   
  },
  inputContainer: {
    marginBottom: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#DF013A',
    padding: 8,
    borderRadius: 10,
    backgroundColor: '#fff',
  },
  errorContainer: {
    borderColor: 'red',
  },
  errorInput: {
    borderColor: 'red',
  },
  errorMessage: {
    color: 'red',
    marginTop: 4,
  },
});

export default App;
