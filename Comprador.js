export default class Comprador {

    constructor() { }

    montarCompradores(id, comprador, formaPagamento) {
        const div = document.createElement('div');
        div.className = `comprador flex-ac-jc ${formaPagamento ? 'pago' : ''}`;
        div.innerHTML = `<p>${id}</p><p>${comprador}</p><p>${formaPagamento}</p>`;
        return div;
    }
}