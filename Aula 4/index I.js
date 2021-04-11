//imports
import React from 'react'
import { AppRegistry, View, Image } from 'react-native'

//formatações
const Estilos = {
   principal:{
       paddingTop: 40
   }
};


//componentes
const App = () => {

    const { principal} = Estilos;

    return (
        <View style ={principal}>
            
           <Image source={ require('./imgs/uvas.png') } />

        </View>
    );
};

//Renderizar
AppRegistry.registerComponent('app2', () => App);img