const numComprados = document.querySelector('#quantidade-numeros-disponiveis');
const numDisponiveis = document.querySelector('#quantidade-numeros-comprados');

fetch('numeros.json')
    .then(response => response.json())
    .then(data => {

        let comprados = data.filter(n => n.comprador != '');

        

    });