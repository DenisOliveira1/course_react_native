//imports
import React from 'react'
import { Text, AppRegistry, View } from 'react-native'

//formatações
const Estilos = {

    estiloTexto: {
        fontSize: 40,
        backgroundColor: '#00bfff',
        height: 60,
        width: 60

    },

    estiloView: {
        backgroundColor: '#8fbc8f',
        height: 300,
        justifyContent: 'center',//Alinhamento na vertical
        alignItems: 'flex-end' //Alinhamento na horizontal
    }
};

//componentes
const App = () => {

    const { estiloTexto,estiloView } = Estilos;

    return (
        <View style ={estiloView}>
            <Text style={estiloTexto}>Frases do Dia</Text>
        </View>
    );
};

//Renderizar
AppRegistry.registerComponent('app2', () => App);