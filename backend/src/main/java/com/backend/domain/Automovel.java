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





}
