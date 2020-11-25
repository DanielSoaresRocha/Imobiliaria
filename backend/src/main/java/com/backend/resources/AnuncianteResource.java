package com.backend.resources;

import com.backend.domain.Anunciante;
import com.backend.dto.AnuncianteDTO;
import com.backend.dto.AnuncianteNewDTO;
import com.backend.services.AnuncianteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;


import javax.validation.Valid;
import java.net.URI;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(value = "/anunciantes")
public class AnuncianteResource {

    @Autowired
    private AnuncianteService service;

    @GetMapping
    public ResponseEntity<List<Anunciante>> findAll() {
        List<Anunciante> list = service.findAll();
        return ResponseEntity.ok().body(list);
    }

    @GetMapping(value = "/{id}")
    public ResponseEntity<?> find(@PathVariable Integer  id ) {
        Optional<Anunciante> obj = service.find(id);
        return ResponseEntity.ok().body(obj);
    }
    @GetMapping(value = "/email")
    public ResponseEntity<Anunciante> find(@RequestParam(value="value") String email) {
        Anunciante obj = service.findByEmail(email);
        return ResponseEntity.ok().body(obj);
    }


    @PostMapping
    public ResponseEntity<Void> insert(@Valid @RequestBody AnuncianteNewDTO objDto) {
        Anunciante obj = service.fromDTO(objDto);
        obj = service.insert(obj);
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest()
                .path("/{id}").buildAndExpand(obj.getId()).toUri();
        return ResponseEntity.created(uri).build();
    }

    @PutMapping(value = "/{id}")
    public ResponseEntity<Void> update(@Valid @RequestBody AnuncianteDTO objDto, @PathVariable Integer id) {
        Anunciante obj = service.fromDTO(objDto);
        obj.setId(id);
        service.update(obj);
        return ResponseEntity.noContent().build();
    }

    @DeleteMapping(value="/{id}")
    public ResponseEntity<Void> delete(@PathVariable Integer id) {
        service.delete(id);
        return ResponseEntity.noContent().build();
    }

}
