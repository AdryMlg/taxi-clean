import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { login } from '../utils/auth';

export default function LoginScreen({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('Director');

  const onLogin = () => {
    const res = login(username, password, role);
    if (res.success) navigation.replace(role);
    else Alert.alert('Error', 'Usuario o contraseña incorrectos');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Taxi · Login</Text>
      <TextInput style={styles.input} placeholder="Usuario" value={username} onChangeText={setUsername}/>
      <TextInput style={styles.input} placeholder="Contraseña" secureTextEntry value={password} onChangeText={setPassword}/>
      <Picker selectedValue={role} onValueChange={setRole} style={styles.picker}>
        <Picker.Item label="Director" value="Director" />
        <Picker.Item label="Jefe" value="Jefe" />
        <Picker.Item label="Conductor" value="Conductor" />
      </Picker>
      <Button title="Entrar" onPress={onLogin} />
      <Text style={{marginTop:12,opacity:0.6}}>Usuario: Adry · Contraseña: 123456</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container:{flex:1,justifyContent:'center',alignItems:'center',padding:20},
  title:{fontSize:24,fontWeight:'bold',marginBottom:20},
  input:{borderWidth:1,borderColor:'#ccc',width:'100%',padding:10,marginBottom:12,borderRadius:8},
  picker:{width:'100%',marginBottom:16}
});
