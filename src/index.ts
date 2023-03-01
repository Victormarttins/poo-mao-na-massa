import PasseioModel from "./Model/passeio-model";
import CarroModel from "./Model/carro-model";
import CaminhoneteModel from "./Model/caminhonete-model";

var chevette = new PasseioModel(1,1986,'lkj-668','2556841368',5000,'Gm','Chevette 1.6 Alcool','Sedam',5);

//Aqui estou comprando um chevette\\
chevette.comprar();
//Aqui estou dirigindo um chevette\\
chevette.dirigir();
//Aqui estou comprando um chevette\\
chevette.vender();

var carro:CarroModel;

carro = chevette

carro.modelo='Corvette';

carro.dirigir();
//===============================//

var Camaro = new PasseioModel(1,2022,'lkj-668','2556841368',5000,'Gm','Chevette 1.6 Alcool','Cupe',5);



//===========================//