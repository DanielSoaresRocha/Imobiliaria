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

    @GetMapping(path = "/residencia")
    public ResponseEntity<List<Residencia>> findAllResidencia() {
        List<Residencia> list = service.findAllResidencia();
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
}
