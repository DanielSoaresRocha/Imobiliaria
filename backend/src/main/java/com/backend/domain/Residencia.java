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


}
