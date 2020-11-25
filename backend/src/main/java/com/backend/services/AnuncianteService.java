package com.backend.services;

import com.backend.domain.Anunciante;
import com.backend.domain.enums.TipoCliente;
import com.backend.dto.AnuncianteDTO;
import com.backend.dto.AnuncianteNewDTO;
import com.backend.repositories.AnuncianteRepository;
import com.backend.services.exceptions.DataIntegrityException;
import com.backend.services.exceptions.ObjectNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AnuncianteService {
    @Autowired
    private AnuncianteRepository anuncianteRepository;

    public Optional<Anunciante> find(Integer id) {

        Optional<Anunciante> obj = anuncianteRepository.findById(id);
        if (!obj.isPresent()) {
            throw new ObjectNotFoundException(
                    "Anunciante não encontrado! Id: " + id + ", Tipo: " + Anunciante.class.getName());
        }
        return obj;
    }

    public Anunciante insert(Anunciante obj) {
        obj.setId(null);
        obj = anuncianteRepository.save(obj);
        return obj;
    }

    public Anunciante update(Anunciante obj) {
        Optional<Anunciante> newObj = find(obj.getId());
        updateData(newObj, obj);
        return anuncianteRepository.save(newObj.get());
    }
    private void updateData(Optional<Anunciante> newObj, Anunciante obj) {
        newObj.get().setNome(obj.getNome());
        newObj.get().setEmail(obj.getEmail());
    }

    public void delete(Integer id) {
        find(id);
        try {
            anuncianteRepository.deleteById(id);
        } catch (DataIntegrityViolationException e) {
            throw new DataIntegrityException("Não é possível excluir porque há produtos relacionados.");
        }
    }

    public List<Anunciante> findAll() {
        return anuncianteRepository.findAll();
    }

    public Anunciante findByEmail(String email) {


        Anunciante obj = anuncianteRepository.findByEmail(email);
        if (obj == null) {
            throw new ObjectNotFoundException(
                    "Anunciante não encontrado!  Tipo: " + Anunciante.class.getName());
        }
        return obj;
    }

    public Anunciante fromDTO(AnuncianteDTO objDto) {
        return new Anunciante(objDto.getId(), objDto.getNome(), objDto.getEmail(), null, null);
    }

    public Anunciante fromDTO(AnuncianteNewDTO objDto) {
        Anunciante cli = new Anunciante(null, objDto.getNome(), objDto.getEmail(), objDto.getCpfOuCnpj(),
                TipoCliente.toEnum(objDto.getTipo()));
        cli.getTelefones().add(objDto.getTelefone1());
        if (objDto.getTelefone2() != null) {
            cli.getTelefones().add(objDto.getTelefone2());
        }
        if (objDto.getTelefone3() != null) {
            cli.getTelefones().add(objDto.getTelefone3());
        }
        return cli;
    }



}