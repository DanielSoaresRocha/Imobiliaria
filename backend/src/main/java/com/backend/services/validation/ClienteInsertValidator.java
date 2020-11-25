package com.backend.services.validation;

import java.util.ArrayList;
import java.util.List;

import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;

import com.backend.domain.Anunciante;
import com.backend.domain.enums.TipoCliente;
import com.backend.dto.AnuncianteNewDTO;
import com.backend.resources.exception.FieldMessage;
import com.backend.services.validation.utils.BR;

public class ClienteInsertValidator implements ConstraintValidator<ClienteInsert, AnuncianteNewDTO> {

    @Override
    public void initialize(ClienteInsert ann) {
    }

    @Override
    public boolean isValid(AnuncianteNewDTO objDto, ConstraintValidatorContext context) {

        List<FieldMessage> list = new ArrayList<>();

        if (objDto.getTipo().equals(TipoCliente.PESSOAFISICA.getCod()) && !BR.isValidCPF(objDto.getCpfOuCnpj())) {
            list.add(new FieldMessage("cpfOuCnpj", "CPF inválido"));
        }

        if (objDto.getTipo().equals(TipoCliente.PESSOAJURIDICA.getCod()) && !BR.isValidCNPJ(objDto.getCpfOuCnpj())) {
            list.add(new FieldMessage("cpfOuCnpj", "CNPJ inválido"));
        }

        for (FieldMessage e : list) {
            context.disableDefaultConstraintViolation();
            context.buildConstraintViolationWithTemplate(e.getMessage()).addPropertyNode(e.getFieldName())
                    .addConstraintViolation();
        }
        return list.isEmpty();
    }
}