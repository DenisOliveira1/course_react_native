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

latir(){
	document.write("<BR> Au Au");
}
}

class Passaro extends Animal{

voar(){
	document.write("Voar Voar Subir Subir");
}
}

var rex = new Cao();
rex.dormir();
rex.latir();
let falcao = new Passaro("azul", 4);
document.write("<br>" + falcao.cor);
