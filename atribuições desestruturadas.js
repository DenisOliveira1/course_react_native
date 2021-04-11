[a,b,c,d]=[10,15,40,75];//atribuição desestruturada Array
document.write(a);

({nome, idade, sexo} = {nome:"Leonel", idade: 20, sexo:"M"})
//atribuição desestruturada para objetos literais

document.write("<br>" + idade);

//Exemplo 
var {Text, View, Button, AppRegistry} = require('react-native');
