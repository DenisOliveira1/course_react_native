//imports
import React from 'react'
import { Text, AppRegistry, View, Button,Image, TouchableOpacity,Alert } from 'react-native'

//formatações
const Estilos = {

   principal:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
   },
   botao:{
        backgroundColor:'#538530',
        paddingVertical: 10,
        paddingHorizontal:40,
        marginTop: 20
   },
   textoBotao:{
       color: 'white',
       fontSize: 16,
       fontWeight: 'bold'
   }
};

const gerarNovaFrase = () =>{

    var numeroAleatorio = Math.random();
    numeroAleatorio = Math.floor(numeroAleatorio * 5);
    
    //frases
    var frases  = Array();
    frases[0] = 'A injustiça em qualquer lugar é uma ameaça à justiça em todo lugar.';
    frases[1] = 'Democracia = governo em que o povo exerce a soberania.';
    frases[2] = 'um mago nunca se atrasa Frodo Bolseiro.';  
    frases[3] = 'Amai-vos uns aos outros, como eu vos amei.';
    frases[4] = 'Quando me tornei vegetariano, poupei dois seres, o outro e eu.';

    var fraseEscolhida = frases[numeroAleatorio];
    Alert.alert(fraseEscolhida);
}

//componentes
const App = () => {

    const { principal,botao,textoBotao} = Estilos;

    return (
        <View style ={principal}>
            <Image source={ require('./imgs/logo.png')} />

            <TouchableOpacity 
            onPress= {gerarNovaFrase}
            style ={botao}>
                
                <Text style ={textoBotao}>Nova Frase</Text>
            </TouchableOpacity>
        </View>
    );
};

//Renderizar
AppRegistry.registerComponent('app2', () => App);