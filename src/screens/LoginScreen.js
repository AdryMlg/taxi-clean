import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, Picker } from 'react-native';
import { login } from '../utils/auth';

export default function LoginScreen({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('Director');

  const handleLogin = () => {
    const result = login(username, password, role);
    if (result.success) {
      navigation.replace(role);
    } else {
      Alert.alert('Error', 'Usuario o contraseña incorrectos');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login Taxi</Text>

      <TextInput
        style={styles.input}
        placeholder="Usuario"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <Picker selectedValue={role} onValueChange={setRole} style={styles.picker}>
        <Picker.Item label="Director" value="Director" />
        <Picker.Item label="Jefe" value="Jefe" />
        <Picker.Item label="Conductor" value="Conductor" />
      </Picker>

      <Button title="Entrar" onPress={handleLogin} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  title: { fontSize: 26, fontWeight: 'bold', marginBottom: 30 },
  input: { borderWidth: 1, width: '100%', padding: 10, marginBottom: 15, borderRadius: 8 },
  picker: { width: '100%', marginBottom: 20 },
});
