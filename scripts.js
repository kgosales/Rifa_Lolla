const numDisponiveis = document.querySelector('#quantidade-numeros-disponiveis');
const numComprados = document.querySelector('#quantidade-numeros-comprados');
const faturamento = document.querySelector('#faturamento');
const lucroPrevisto = document.querySelector('#lucro-previsto');
const lucroEfetivado = document.querySelector('#lucro-efetivado');
const lucroReal = document.querySelector('#lucro-real');

const numPagos = document.querySelector('#num-pagos');
const numNotPagos = document.querySelector('#num-not-pagos');
const progressoPagos = document.querySelector('#progresso-pagos');
const progressoNotPagos = document.querySelector('#progresso-not-pagos');

const pagamentosDinheiro = document.querySelector('#num-dinheiro');
const pagamentosPix = document.querySelector('#num-pix');
const progressoDinheiro = document.querySelector('#progresso-dinheiro');
const progressoPix = document.querySelector('#progresso-pix');

fetch('numeros.json')
    .then(response => response.json())
    .then(data => {

        let comprados = data.filter(n => n.comprador != '');

        numDisponiveis.innerHTML = data.length - comprados.length;
        numComprados.innerHTML = comprados.length;

        let pagamentos = comprados.filter(n => n.formaPagamento != '');

        faturamento.innerHTML = `R$${comprados.length * 20}`
        lucroPrevisto.innerHTML = `R$${(comprados.length * 20) - 250}`
        lucroEfetivado.innerHTML = `R$${pagamentos.length * 20}`
        lucroReal.innerHTML = `R$${(pagamentos.length * 20) - 250}`

        numPagos.innerHTML = pagamentos.length
        numNotPagos.innerHTML = comprados.length - pagamentos.length

        progressoPagos.style.width = (pagamentos.length / comprados.length) * 100 + "%";
        progressoNotPagos.style.width = ((comprados.length - pagamentos.length) / comprados.length) * 100 + "%";

        pagamentosDinheiro.innerHTML = pagamentos.filter(n => n.formaPagamento == 'Dinheiro').length
        pagamentosPix.innerHTML = pagamentos.filter(n => n.formaPagamento == 'Pix').length

        progressoDinheiro.style.width = (pagamentos.filter(n => n.formaPagamento == 'Dinheiro').length / pagamentos.length) * 100 + "%";
        progressoPix.style.width = (pagamentos.filter(n => n.formaPagamento == 'Pix').length / pagamentos.length) * 100 + "%";
    });