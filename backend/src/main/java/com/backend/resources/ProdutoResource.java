package com.backend.resources;

import com.backend.domain.Automovel;
import com.backend.domain.Produto;
import com.backend.domain.Residencia;
import com.backend.services.ProdutoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;

@RestController
@RequestMapping(value = "/produtos")
public class ProdutoResource {

    @Autowired
    private ProdutoService service;


    @GetMapping
    public ResponseEntity<List<Produto>> findAll() {
        List<Produto> list = service.findAll();
        return ResponseEntity.ok().body(list);
    }

    @GetMapping(path = "/automovel")
    public ResponseEntity<List<Automovel>> findAllAutomovel() {
        List<Automovel> list = service.findAllAutomovel();
        return ResponseEntity.ok().body(list);
    }

    @PostMapping(path = "/residencia")
    public ResponseEntity<Void> insert(@RequestBody Residencia obj) {
        Produto produto = service.insert(obj);
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest()
                .path("/{id}").buildAndExpand(produto.getId()).toUri();
        return ResponseEntity.created(uri).build();
    }
    @PostMapping(path = "/automovel")
    public ResponseEntity<Void> insert(@RequestBody Automovel obj) {
        Produto produto = service.insert(obj);
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest()
                .path("/{id}").buildAndExpand(produto.getId()).toUri();
        return ResponseEntity.created(uri).build();
    }
    @GetMapping(value = "/{id}")
    public ResponseEntity<?> findProdutoById(@PathVariable Integer  id ) {
        Produto obj = service.findProdutoById(id);
        return ResponseEntity.ok().body(obj);
    }

    @GetMapping(path = "/residencia")
    public ResponseEntity<?> findResidenciaByfilter(@RequestParam(value = "qtd_quartos", required = false) Integer qtd_quartos,
                                                    @RequestParam(value = "qtdBanheiros", required = false) Integer qtdBanheiros,
                                                    @RequestParam(value = "qtdVagasNaGaragem", required = false) Integer qtdVagasNaGaragem,
                                                    @RequestParam(value = "minValor", required = false) Double minValor,
                                                    @RequestParam(value = "maxValor", required = false) Double maxValor,
                                                    @RequestParam(value = "minMetrosQuadrados", required = false) Double minMetrosQuadrados,
                                                    @RequestParam(value = "maxMetrosQuadrados", required = false) Double maxMetrosQuadrados
                                                        ) {
        List<Residencia> list = service.findFiltroResidencia(qtd_quartos,qtdBanheiros,qtdVagasNaGaragem,minValor,maxValor, minMetrosQuadrados, maxMetrosQuadrados);
        return ResponseEntity.ok().body(list);
    }

    @GetMapping(value = "anunciante/{id}")
    public ResponseEntity<?> findProdutoByAnunciante(@PathVariable Integer  id ) {
        List<Produto> list = service.findProdutoByAnunciante(id);
        return ResponseEntity.ok().body(list);
    }
}
