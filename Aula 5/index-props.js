import React, {Component} from 'react'
import {AppRegistry, Text, View} from 'react-native';

class MeuComponente extends Component{
    render(){
        return(
            <View>
                <Text>{this.props.propriedade1}</Text>
                <Text>{this.props.xyz}</Text> {/* A {} indica uma prop */}
                <Text>{this.props.prop}</Text>
            </View>
        )
    }
}
class app3 extends Component{
    render(){
        return(
            <MeuComponente propriedade1 = 'Lobo' xyz = 'Leão' prop = 'Elefante'></MeuComponente>
        );
    }
}
AppRegistry.registerComponent('app3', () => app3);
