package com.backend.domain;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Automovel extends Produto{

    private String modelo;
    private String cor;
    private String quilometragem;
    private String marca;
    private Integer ano;
    private Integer portas;
    private String cambio;
    private Double potenciaMotor;
    private String combustivel;

    public Automovel(Integer id, String nome, Double valor, String descricao, String modelo, String cor, String quilometragem, String marca, Integer ano, Integer portas, String cambio, Double potenciaMotor, String combustivel) {
        super(id, nome, valor, descricao);
        this.modelo = modelo;
        this.cor = cor;
        this.quilometragem = quilometragem;
        this.marca = marca;
        this.ano = ano;
        this.portas = portas;
        this.cambio = cambio;
        this.potenciaMotor = potenciaMotor;
        this.combustivel = combustivel;
    }
}
