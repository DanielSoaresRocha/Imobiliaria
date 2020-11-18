package com.backend.domain;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Residencia  extends Produto {

    private String logradouro;
    private String bairro;
    private String cep;
    private String numero;
    private String complemento;
    private String cidade;
    private String estado;
    private Double metrosQuadrados;
    private Integer qtdQuartos;
    private Integer qtdBanheiros;
    private Integer qtdVagasNaGaragem;
    private Boolean isVenda;
    private Double valorCondominio;
    private Double valorIptu;


    public Residencia(Integer id, String nome, Double valor, String descricao, String logradouro, String bairro,
                      String cep, String numero, String complemento, String cidade, String estado, Double metrosQuadrados, Integer qtdQuartos, Integer qtdBanheiros, Integer qtdVagasNaGaragem, Boolean isVenda, Double valorCondominio, Double valorIptu ) {
        super(id, nome, valor, descricao);
        this.logradouro = logradouro;
        this.bairro = bairro;
        this.cep = cep;
        this.numero = numero;
        this.complemento = complemento;
        this.cidade = cidade;
        this.estado = estado;
        this.metrosQuadrados = metrosQuadrados;
        this.qtdQuartos = qtdQuartos;
        this.qtdBanheiros = qtdBanheiros;
        this.qtdVagasNaGaragem = qtdVagasNaGaragem;
        this.isVenda = isVenda;
        this.valorCondominio = valorCondominio;
        this.valorIptu = valorIptu;
    }
}
