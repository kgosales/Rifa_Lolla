const numDisponiveis = document.querySelector('#quantidade-numeros-disponiveis');
const numComprados = document.querySelector('#quantidade-numeros-comprados');
const faturamento = document.querySelector('#faturamento');
const lucroPrevisto = document.querySelector('#lucro-previsto');
const lucroReal = document.querySelector('#lucro-real');
const numPagos = document.querySelector('#pagos');

const pagamentosDinheiro = document.querySelector('#pagamentos-dinheiro');
const pagamentosPix = document.querySelector('#pagamentos-pix');

const barraPagamentoDinheiro = document.querySelector('#barra-progresso-dinheiro');
const barraPagamentoPix = document.querySelector('#barra-progresso-pix');

fetch('numeros.json')
    .then(response => response.json())
    .then(data => {

        let comprados = data.filter(n => n.comprador != '');

        numDisponiveis.innerHTML = data.length - comprados.length;
        numComprados.innerHTML = comprados.length;

        let pagamentos = comprados.filter(n => n.formaPagamento != '');

        faturamento.innerHTML = comprados.length * 20
        lucroPrevisto.innerHTML = (comprados.length * 20) - 250
        lucroReal.innerHTML = (pagamentos.length * 20) - 250

        numPagos.innerHTML = pagamentos.length
        pagamentosDinheiro.innerHTML = pagamentos.filter(n => n.formaPagamento == 'Dinheiro').length
        pagamentosPix.innerHTML = pagamentos.filter(n => n.formaPagamento == 'Pix').length

        barraPagamentoDinheiro.style.width = (pagamentos.filter(n => n.formaPagamento == 'Dinheiro').length / pagamentos.length) * 100 + "%";
        barraPagamentoPix.style.width = (pagamentos.filter(n => n.formaPagamento == 'Pix').length / pagamentos.length) * 100 + "%";
    });