export default class Numeros {
    constructor(numeros) {
        this.numeros = numeros;
        this.valorPremiacao = 250;
    }

    getNumeros() {
        return this.numeros;
    }

    // getDisponiveis(quantidade = false) {
    //     let disponiveis = this.numeros.filter(numero => !numero.comprador);
    //     return quantidade ? disponiveis.length : disponiveis;
    // }

    getDisponiveis() {
        return this.numeros.filter(numero => !numero.comprador);
    }

    getQuantidadeDisponiveis() {
        return this.getDisponiveis().length;
    }

    getComprados() {
        return this.numeros.filter(numero => numero.comprador);
    }

    getQuantidadeComprados() {
        return this.getComprados().length;
    }

    getPagos() {
        return this.getComprados().filter(comprador => comprador.formaPagamento);
    }

    getQuantidadePagos() {
        return this.getPagos().length;
    }

    getNaoPagos() {
        return this.getComprados().filter(comprador => !comprador.formaPagamento);
    }

    getQuantidadeNaoPagos() {
        return this.getNaoPagos().length;
    }

    getPorcentagemPagos(pagos = true) {
        if (pagos) return (this.getQuantidadePagos() / this.getQuantidadeComprados()) * 100;
        else return (this.getQuantidadeNaoPagos() / this.getQuantidadeComprados()) * 100;
    }

    getFaturamento() {
        return this.getQuantidadeComprados() * 20;
    }

    getLucroPrevisto() {
        return (this.getQuantidadeComprados() * 20) - this.valorPremiacao;
    }

    getLucroEfetivado() {
        return this.getPagos().length * 20;
    }

    getLucroReal() {
        return (this.getPagos().length * 20) - this.valorPremiacao;
    }

    getQuantidadeMetodosPagamento(metodo) {
        return this.getPagos().filter(comprador => comprador.formaPagamento === metodo).length;
    }

    getPorcentagemMetodosPagamento(metodo) {
        return (this.getQuantidadeMetodosPagamento(metodo) / this.getQuantidadePagos()) * 100;
    }
}