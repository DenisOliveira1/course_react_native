//imports
import React from 'react'
import { Text, AppRegistry, View, Button } from 'react-native'

//formatações
const Estilos = {

   principal:{
       paddingTop: 40
   }
};

const botaoPressionado = () =>{
    alert('Botão foi pressionado');
}

//componentes
const App = () => {

    const { principal} = Estilos;

    return (
        <View style ={principal}>
            <Button
            onPress={botaoPressionado}
            title ="Clique Aqui"
            color= "blue"
            accessibilityLabel= "Este Botão executa uma tarefa"
            />
        </View>
    );
};

//Renderizar
AppRegistry.registerComponent('app2', () => App);