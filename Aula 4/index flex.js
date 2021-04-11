//imports
import React from 'react'
import { Text, AppRegistry, View } from 'react-native'

//formatações
const Estilos = {

   principal:{
       flex:1,// 1:1
    backgroundColor: 'black'
   },
   top:{
    flex:1,//1:5
    backgroundColor: 'aquamarine'
   },
   body:{
    flex:3,//1:5
    backgroundColor: 'blue'
   },
   footer:{
    flex:1,//1:5
    backgroundColor: 'chartreuse'
   }
};

//componentes
const App = () => {

    const { principal,top,body,footer } = Estilos;

    return (
        <View style ={principal}>
            <Text style={top}>Top</Text>
            <Text style={body}>Body</Text>
            <Text style={footer}>Footer</Text>
        </View>
    );
};

//Renderizar
AppRegistry.registerComponent('app2', () => App);