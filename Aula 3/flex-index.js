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
        justifyContent: 'flex-start',
        alighnItens: 'center'
    }
};

//componentes
const App = () => {

    const { estiloTexto,estiloView } = Estilos;

    return (
        <View style ={estiloView}>
            <Text style={estiloTexto}></Text>
        </View>
    );
};

//Renderizar
AppRegistry.registerComponent('app2', () => App);