package com.backend.services;

import com.backend.domain.Automovel;
import com.backend.domain.Produto;
import com.backend.domain.Residencia;
import com.backend.repositories.AutomovelRepository;
import com.backend.repositories.ProdutoRepository;
import com.backend.repositories.ResidenciaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProdutoService {

    @Autowired
    private ProdutoRepository repo;

    @Autowired
    private ResidenciaRepository residenciaRepository;

    @Autowired
    private AutomovelRepository automovelRepository;

    public List<Produto> findAll() {
        return repo.findAll();
    }
    public List<Residencia> findAllResidencia() { return residenciaRepository.findAll();}
    public List<Automovel> findAllAutomovel() { return automovelRepository.findAll();}

    public Produto insert(Produto obj) {
        obj.setId(null);
        return repo.save(obj);
    }
}
