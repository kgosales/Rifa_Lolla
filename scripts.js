import Comprador from './Comprador.js';
import Numeros from './Numeros.js';
import Dashboard from './Dashboard.js';

// const containerCompradores = document.querySelector('#container-compradores');

fetch('numeros.json')
    .then(response => response.json())
    .then(data => {

        const numeros = new Numeros(data);
        const dashboard = new Dashboard();
        const comprador = new Comprador();

        const informacoes = [
            { elemento: "#quantidade-numeros-disponiveis", dados: numeros.getQuantidadeDisponiveis() },
            { elemento: "#quantidade-numeros-comprados", dados: numeros.getQuantidadeComprados() },
            { elemento: "#faturamento", dados: `R$${numeros.getFaturamento()}` },
            { elemento: "#lucro-previsto", dados: `R$${numeros.getLucroPrevisto()}` },
            { elemento: "#lucro-efetivado", dados: `R$${numeros.getLucroEfetivado()}` },
            { elemento: "#lucro-real", dados: `R$${numeros.getLucroReal()}` },
            { elemento: "#num-pagos", dados: numeros.getQuantidadePagos() },
            { elemento: "#num-not-pagos", dados: numeros.getQuantidadeNaoPagos() },
            { elemento: "#num-dinheiro", dados: numeros.getQuantidadeMetodosPagamento('Dinheiro') },
            { elemento: "#num-pix", dados: numeros.getQuantidadeMetodosPagamento('Pix') },
        ]

        const progressos = [
            { elemento: "#progresso-pagos", progresso: numeros.getPorcentagemPagos() },
            { elemento: "#progresso-not-pagos", progresso: numeros.getPorcentagemPagos(false) },
            { elemento: "#progresso-dinheiro", progresso: numeros.getPorcentagemMetodosPagamento('Dinheiro') },
            { elemento: "#progresso-pix", progresso: numeros.getPorcentagemMetodosPagamento('Pix') },
        ];

        informacoes.forEach(informacao => {
            dashboard.setDados(informacao.elemento, informacao.dados);
        });

        progressos.forEach(progresso => {
            dashboard.setProgresso(progresso.elemento, progresso.progresso);
        });

        // numeros.getComprados().forEach(listaComprador => {
        //     document.querySelector('#container-compradores').appendChild(comprador.montarCompradores(listaComprador.id, listaComprador.comprador, listaComprador.formaPagamento));
        // });

        let filtro = "NPagos"

        switch (filtro) {
            case "Todos":
                numeros.getNumeros().forEach(numero => {
                    document.querySelector('#container-compradores').appendChild(comprador.montarCompradores(numero.id, numero.comprador, numero.formaPagamento));
                })
                break;
            case "Comprados":
                numeros.getComprados().forEach(comprados => {
                    document.querySelector('#container-compradores').appendChild(comprador.montarCompradores(comprados.id, comprados.comprador, comprados.formaPagamento));
                })
                break;
            case "Pagos":
                numeros.getPagos().forEach(pagos => {
                    document.querySelector('#container-compradores').appendChild(comprador.montarCompradores(pagos.id, pagos.comprador, pagos.formaPagamento));
                })
                break;
            case "NPagos":
                numeros.getNaoPagos().forEach(naoPagos => {
                    document.querySelector('#container-compradores').appendChild(comprador.montarCompradores(naoPagos.id, naoPagos.comprador, naoPagos.formaPagamento));
                })
                break;
            default:
                break;
        }

    });