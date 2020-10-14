package com.backend.repositories;

import com.backend.domain.Automovel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AutomovelRepository extends JpaRepository<Automovel, Integer> {
}
