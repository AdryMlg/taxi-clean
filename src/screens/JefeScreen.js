import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
export default function JefeScreen({ navigation }) {
  return (
    <View style={styles.c}>
      <Text style={styles.t}>Panel Jefe</Text>
      <Text>Conductores asignados, geolocalización, cierres.</Text>
      <Button title="Cerrar sesión" onPress={()=>navigation.replace('Login')} />
    </View>
  );
}
const styles = StyleSheet.create({ c:{flex:1,justifyContent:'center',alignItems:'center',padding:20}, t:{fontSize:22,fontWeight:'bold',marginBottom:10} });
