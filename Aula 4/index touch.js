//imports
import React from 'react'
import { Text, AppRegistry, View, Button, TouchableOpacity } from 'react-native'

//formatações
const Estilos = {

   principal:{
       paddingTop: 40
   },
   botao:{
    backgroundColor: 'darkseagreen',
    padding: 10,
    borderColor: 'forestgreen',
    borderWidth:3,
    borderRadius: 20
   },
   textoBotao:{
       color: '#fff',
       fontSize: 16,
       alignSelf: 'center'
   }
};

const botaoPressionado = () =>{
    alert('Botão foi pressionado');
}

//componentes
const App = () => {

    const { principal,botao, textoBotao} = Estilos;

    return (
        <View style ={principal}>
            <TouchableOpacity style ={botao}>
                <Text style ={textoBotao}>Clique Aqui</Text>
            </TouchableOpacity>
        </View>
    );
};

//Renderizar
AppRegistry.registerComponent('app2', () => App);