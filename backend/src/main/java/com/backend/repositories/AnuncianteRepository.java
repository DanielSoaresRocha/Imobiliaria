package com.backend.repositories;

import com.backend.domain.Anunciante;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.transaction.annotation.Transactional;

public interface AnuncianteRepository extends JpaRepository<Anunciante, Integer> {
    @Transactional(readOnly=true)
    Anunciante findByEmail(String email);
}

