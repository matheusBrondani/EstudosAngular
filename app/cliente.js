System.register([], function(exports_1) {
    var Cliente;
    return {
        setters:[],
        execute: function() {
            Cliente = (function () {
                function Cliente(id, nome, saldo, CPF) {
                    this.id = id;
                    this.nome = nome;
                    this.saldo = saldo;
                    this.CPF = CPF;
                }
                return Cliente;
            })();
            exports_1("Cliente", Cliente);
        }
    }
});
//# sourceMappingURL=cliente.js.map