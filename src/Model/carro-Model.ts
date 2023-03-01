export default class CarroModel{
    id:number;
    ano:number;
    placa:string;
    renavam:string;
    valorFipe:number;
    marca:string;
    modelo:string;

    constructor(id:number,ano:number,placa:string,renavam:string,valorFipe:number,marca:string,modelo:string){
        this.id=id;
        this.placa=placa;
        this.ano=ano;
        this.renavam=renavam;
        this.valorFipe=valorFipe;
        this.marca=marca;
        this.modelo=modelo;

    }
    dirigir():void{
        console.log(`Voce esta dirigindo um ${this.marca}${this.modelo}`);

    }
    vender():void{
        console.log(`Voce esta vendendo o carro por${this.valorFipe}`);
    }
}