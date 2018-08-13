import {Component} from 'angular2/core';
import {Cliente} from './cliente';
import {CpfPipe} from './pipes/cpfMask';

@Component({
    selector: 'jurubeba',
    templateUrl: 'app/app-component.html', pipes: [CpfPipe]
})
export class AppComponent{

    public tarecos: string;
    public valorTxtCoisa: string;
    public coisas: string[];
    public listClientes: Cliente[];
    public chosenOne: Cliente;

    constructor(){
        this.tarecos = "de Bagulhos !!";
        this.coisas = [
            'Teclado',
            'Celular',
            'Birita'
        ];

        this.listClientes = [
            new Cliente(1,'Luke',1000121.00,'36214598702'),
            new Cliente(2,'Matheus',11333.00,'65498715924'),
            new Cliente(3,'Jo',12323.123,'95178574195'),
            new Cliente(4,'Vader',1111.00,'14725836998'),
            new Cliente(5,'Ananias',1222.00,'32165498725'),
            new Cliente(6,'Galvão',1500.00,'12345678996')
        ];

        this.chosenOne = this.listClientes[0];
    }

    addCoisaLista () {
        if(this.valorTxtCoisa != ''){
            this.coisas.push(this.valorTxtCoisa);
            this.valorTxtCoisa = '';
        }
    }

    remove (index:number) {
        this.coisas.splice(index, 1);
    }

    selecionaCliente (index:number) {
        this.chosenOne = this.listClientes[index];
    }
}