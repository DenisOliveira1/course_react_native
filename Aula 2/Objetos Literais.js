class Animal{

	constructor(cor, peso){
  this.cor = cor;
  this.peso = peso
  }
  dormir(){
  document.write("ZZZzzz ZZZzzz");
  }
}
class Cao extends Animal{
	constructor(cor, peso, raca){
		super(cor, peso);
    this.raca =raca;
	}
	latir(){
	document.write("<BR> Au Au");
}
	dormirIgualCao(){
  	super.dormir();
		document.write("Au Au");
	}
}


var rex = new Cao("preto", "10", "Vira-Lata Caramelo");

var objetoLiteral = {
	cor:"Preto",
	peso:"20",
	raca:"rottweiler",
  filhotes: {filhote1: "Lesse", filhote2: "Tequila"}
};

document.write("<br>" +objetoLiteral);//object Object
document.write("<br>" + objetoLiteral.filhotes)//object Object
document.write("<br>" + objetoLiteral.filhotes.filhote1);//object Object Lesse
document.write("<br>" + objetoLiteral.filhotes.filhote2);//object Object Lesse
