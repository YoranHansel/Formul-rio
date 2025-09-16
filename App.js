import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';
import { useState } from 'react'

export default function App() {

  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')

  function MostrarDados() {
    return (
      alert(`Nome: ${nome} \nE-mail: ${email} \nSenha: ${senha}`)
    )
  }

  function ValidarDados() {
   
    if (/\d/.test(nome)) {
      alert('O nome não pode conter números!')
      return false
    }

    if (email.trim() === '' || senha.trim() === '' || nome.trim() === '') {
      alert('Nome, E-mail e senha não podem estar vazios')
      return false
    }

    if (email.indexOf('@gmail') === -1 || email.indexOf('.com') === -1) {
      alert('Por favor, digite um E-mail válido!')
      return false
    }

    if (senha.includes(' ') || email.includes(' ')) {
      alert('E-mail e senha não podem ter espaço')
      return false
    }

    MostrarDados()
    return true
  }

  return (
    <View style={styles.container}>
      
      <Text style ={styles.titulo}>Login</Text>
      
      <TextInput 
        style ={styles.input}
        placeholder='Digite seu nome'
        value={nome}
        onChangeText={setNome}
      />
      <TextInput
        style ={styles.input}
        placeholder='Digite seu E-mail'
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style ={styles.input}
        placeholder='Digite sua senha'
        secureTextEntry
        value={senha}
        onChangeText={setSenha}
      />

      <TouchableOpacity style={styles.botao} onPress={ValidarDados}><Text style={styles.textoBotao}>Entrar</Text></TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  
  titulo: {
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 40,
    margin: 20
  },
  
  botao: {
    backgroundColor: '#1E90FF',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
  },

  textoBotao: {
    color: '#fff',
  },

  input: {
    height: 40,
    borderColor: 'black',
    borderWidth: 2,
    marginBottom: 10,
    padding: 10, 
    width: 200,
  },

});
