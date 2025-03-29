export default class Dashboard {
    constructor() { }

    setDados(elemento, dados) {
        document.querySelector(elemento).innerHTML = dados;
    }

    setProgresso(elemento, dados) {
        document.querySelector(elemento).style.width = dados + '%';
    }

    montarCompradores(id, comprador, formaPagamento) {
        const div = document.createElement('div');
        div.className = `comprador flex-ac-jc ${formaPagamento ? 'pago' : ''}`;
        div.innerHTML = `<p>${id}</p><p>${comprador}</p><p>${formaPagamento}</p>`;
        return div;
    }

    filtrarCompradores(filtro, compradores) {

    }
}