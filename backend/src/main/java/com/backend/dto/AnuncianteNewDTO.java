package com.backend.dto;


import com.backend.services.validation.ClienteInsert;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotEmpty;
import java.io.Serializable;


@Data
@NoArgsConstructor
@AllArgsConstructor
@ClienteInsert
public class AnuncianteNewDTO implements Serializable {
    private static final long serialVersionUID = 1L;

    @NotEmpty(message="Preenchimento obrigatório")
    private String nome;

    @NotEmpty(message="Preenchimento obrigatório")
    @Email(message="Email inválido")
    private String email;

    @NotEmpty(message="Preenchimento obrigatório")
    private String cpfOuCnpj;

    private Integer tipo;

    @NotEmpty(message="Preenchimento obrigatório")
    private String senha;




    @NotEmpty(message="Preenchimento obrigatório")
    private String telefone1;

    private String telefone2;

    private String telefone3;



}
