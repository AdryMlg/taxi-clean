import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function ConductorScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Panel Conductor</Text>
      <Text>Ver cierres diarios, mensuales y registrar cobros.</Text>
      <Button title="Cerrar sesión" onPress={() => navigation.replace('Login')} />
    </View>
  );
}
const styles = StyleSheet.create({ container:{flex:1,justifyContent:'center',alignItems:'center'}, title:{fontSize:24,fontWeight:'bold',marginBottom:10} });
