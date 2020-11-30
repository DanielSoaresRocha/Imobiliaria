export class House {
    logradouro: string;
    bairro: string;
    cep: string;
    numero: string;
    complemento: string;
    cidade: string;
    estado:  string;
    metrosQuadrados: number;
    qtdQuartos: number;
    qtdBanheiros: number;
    qtdVagasNaGaragem: number;
    id: number;
    nome: string;
    valor: number;
    descricao: string;

    constructor(metrosQuadrados?,qtdQuartos?, qtdBanheiros?, qtdVagasNaGaragem?,nome?, valor?){
        this.metrosQuadrados = metrosQuadrados;
        this.qtdQuartos = qtdQuartos;
        this.qtdBanheiros = qtdBanheiros;
        this.qtdVagasNaGaragem = qtdVagasNaGaragem;
        this.nome = nome;
        this.valor = valor;
        }
}
