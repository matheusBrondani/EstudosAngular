System.register(['angular2/core', './cliente', './pipes/cpfMask'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, cliente_1, cpfMask_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (cliente_1_1) {
                cliente_1 = cliente_1_1;
            },
            function (cpfMask_1_1) {
                cpfMask_1 = cpfMask_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.tarecos = "de Bagulhos !!";
                    this.coisas = [
                        'Teclado',
                        'Celular',
                        'Birita'
                    ];
                    this.listClientes = [
                        new cliente_1.Cliente(1, 'Luke', 1000121.00, '36214598702'),
                        new cliente_1.Cliente(2, 'Matheus', 11333.00, '65498715924'),
                        new cliente_1.Cliente(3, 'Jo', 12323.123, '95178574195'),
                        new cliente_1.Cliente(4, 'Vader', 1111.00, '14725836998'),
                        new cliente_1.Cliente(5, 'Ananias', 1222.00, '32165498725'),
                        new cliente_1.Cliente(6, 'Galvão', 1500.00, '12345678996')
                    ];
                    this.chosenOne = this.listClientes[0];
                }
                AppComponent.prototype.addCoisaLista = function () {
                    if (this.valorTxtCoisa != '') {
                        this.coisas.push(this.valorTxtCoisa);
                        this.valorTxtCoisa = '';
                    }
                };
                AppComponent.prototype.remove = function (index) {
                    this.coisas.splice(index, 1);
                };
                AppComponent.prototype.selecionaCliente = function (index) {
                    this.chosenOne = this.listClientes[index];
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'jurubeba',
                        templateUrl: 'app/app-component.html', pipes: [cpfMask_1.CpfPipe]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app-component.js.map