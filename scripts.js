const numeros = document.querySelector('#numeros');

fetch('numeros.json')
    .then(response => response.json())
    .then(data => {
        let comprados = 0;
        let numPagos = []
        data.forEach(n => {
            if (n.comprador != '') {
                numeros.innerHTML += `<div class="numero comprado flex-ac-jc"><p>${n.id}</p></div>`;
                comprados++;
            } else {
                numeros.innerHTML += `<div class="numero flex-ac-jc"><p>${n.id}</p></div>`;
            }

            if (n.formaPagamento != '') {
                numPagos.push(n.comprador);
            }
        });

        console.log(`Comprados: ` + comprados);
        console.log(`Não comprados: ` + (data.length - comprados));
        console.log(`Compradores: ` + numPagos);
        
    });