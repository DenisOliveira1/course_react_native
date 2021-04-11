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


var rex = new Cao("preto", "10", "SRD");
rex.dormirIgualCao();
document.write("<br> Raça do Cão é: " + rex.raca + " e Rex tem a cor: " + rex.cor);
