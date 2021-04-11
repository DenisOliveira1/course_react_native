import React, {Component} from 'react'
import {AppRegistry, Text, View, Button, StyleSheet} from 'react-native';



class app3 extends Component{
    constructor(props){//por padrão recebe props
    super(props);// chama o props da classe pai

    this.state = {escolhaUsuario : ''}
    //cria vazio para alterar durante o ciclo de vida
    }

    jokenpo(opcaoEscolhida){
        this.setState ({escolhaUsuario : opcaoEscolhida});
    }

    render(){
        return(
            <View>
                <Text>Escolha do Computador </Text>
                <Text>Escolha do Usuário : {this.state.escolhaUsuario/*var*/} </Text>
                <Text>Resultado</Text>
                <Button title = 'PEDRA' onPress={() => {this.jokenpo('PEDRA')}}/>
                <Button title = 'PAPEL' onPress={() => {this.jokenpo('PAPEL')}}/>
                <Button title = 'TESOURA' onPress={() => {this.jokenpo('TESOURA')}}/>
            </View>
        );
    }
}
AppRegistry.registerComponent('app3', () => app3);
