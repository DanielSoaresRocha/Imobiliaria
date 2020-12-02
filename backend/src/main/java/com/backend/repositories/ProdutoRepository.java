package com.backend.repositories;

import com.backend.domain.Anunciante;
import com.backend.domain.Produto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Repository
public interface ProdutoRepository extends JpaRepository<Produto, Integer> {
    @Transactional(readOnly=true)
    List<Produto> findByAnunciante(Optional<Anunciante> obj);
}
