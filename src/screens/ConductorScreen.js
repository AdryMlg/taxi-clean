import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
export default function ConductorScreen({ navigation }) {
  return (
    <View style={styles.c}>
      <Text style={styles.t}>Panel Conductor</Text>
      <Text>Ver cierres del día, mes y contabilizar carreras.</Text>
      <Button title="Cerrar sesión" onPress={()=>navigation.replace('Login')} />
    </View>
  );
}
const styles = StyleSheet.create({ c:{flex:1,justifyContent:'center',alignItems:'center',padding:20}, t:{fontSize:22,fontWeight:'bold',marginBottom:10} });
