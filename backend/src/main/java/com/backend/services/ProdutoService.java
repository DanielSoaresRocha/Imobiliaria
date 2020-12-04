package com.backend.services;

import com.backend.domain.Anunciante;
import com.backend.domain.Automovel;
import com.backend.domain.Produto;
import com.backend.domain.Residencia;
import com.backend.repositories.*;
import com.backend.services.exceptions.DataIntegrityException;
import com.backend.services.exceptions.ObjectNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProdutoService {

    @Autowired
    private ProdutoRepository repo;

    @Autowired
    private ResidenciaRepository residenciaRepository;

    @Autowired
    private AutomovelRepository automovelRepository;

    @Autowired
    private ResidenciaCustomRepository residenciaCustomRepository;

    @Autowired
    private AnuncianteService anuncianteService;

    public List<Produto> findAll() {
        return repo.findAll();
    }

    public List<Residencia> findAllResidencia() {
        return residenciaRepository.findAll();
    }

    public List<Automovel> findAllAutomovel() {
        return automovelRepository.findAll();
    }

    public Produto insert(Produto obj) {
        obj.setId(null);
        obj.setAnunciante(anuncianteService.findByEmail(anuncianteService.buscarAnucienteLogado()));
        return repo.save(obj);
    }

    public Produto findProdutoById(Integer id) {
        Optional<Produto> obj = repo.findById(id);
        return obj.orElseThrow(() -> new ObjectNotFoundException(
                "Objeto não encontrado! Id: " + id + ", Tipo: " + Produto.class.getName()));
    }
    public List<Residencia> findFiltroResidencia(Integer qtdQuartos, Integer qtdBanheiros, Integer qtdVagasNaGaragem,Double minValor, Double maxValor, Double minMetrosQuadrados, Double maxMetrosQuadrados){
        return residenciaCustomRepository.find(qtdQuartos,qtdBanheiros,qtdVagasNaGaragem,minValor,maxValor, minMetrosQuadrados, maxMetrosQuadrados);
    }

    public List<Produto> findProdutoByAnunciante(Integer id) {
        Optional<Anunciante> obj = anuncianteService.find(id);
        return repo.findByAnunciante(obj);
    }



}
