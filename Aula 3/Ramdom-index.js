import React from 'react';
import { Text, View, Button, AppRegistry } from 'react-native';

const geraNumeroAleatorio = () => {
  var numero_aleatorio = Math.random();

  numero_aleatorio = Math.floor(numero_aleatorio * 10);
  alert(numero_aleatorio);
}


const App = () => {

  return (
    <View>
      <Text>Gerador de n�meros rand�micos!!!</Text>
      <Button 
        title="Gerar um n�mero rand�mico"
        onPress={geraNumeroAleatorio}
      />
    </View>
  );
};

AppRegistry.registerComponent('app1', () => App);