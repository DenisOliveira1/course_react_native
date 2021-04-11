import React, {Component} from 'react'
import {AppRegistry, Text, View, Button} from 'react-native';

class MeuComponente extends Component{
    render(){ {/*Declaração do nosso componente */}
        return(
            <View>
                <Text>{this.props.teste}</Text>
            </View>
        )
    }
}

class app3 extends Component{
    constructor(props){{/*Construtor do componente */}
            super(props);

            this.state = {texto : 'Texto teste 2'};
    }

    alteraTexto(){
        this.setState({texto : 'State foi alterado'})
    }//a variável state sempre deve ser alterada pela função setState

    render(){
        return(
            <View>
                <MeuComponente teste = {this.state.texto}></MeuComponente>
                <Button /*chamada do componente  passando parâmetros */
                title = 'Botão'
                onPress ={ () => {this.alteraTexto()}}//é usada arrow function para não chamar na criação
                />
            </View>
        );
    }
}
AppRegistry.registerComponent('app3', () => app3);
