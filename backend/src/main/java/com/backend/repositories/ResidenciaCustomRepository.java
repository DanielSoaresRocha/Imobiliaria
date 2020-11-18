package com.backend.repositories;

import com.backend.domain.Residencia;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.TypedQuery;
import java.util.List;

@Repository
public class ResidenciaCustomRepository {

    private final EntityManager em;
    public ResidenciaCustomRepository(EntityManager em){
        this.em = em;
    }

    public List<Residencia> find (Integer qtdQuartos, Integer qtdBanheiros, Integer qtdVagasNaGaragem,Double minValor, Double maxValor, Double minMetrosQuadrados, Double maxMetrosQuadrados){
        String query = "SELECT obj FROM Residencia obj ";
        String condicao = "WHERE";
        if(qtdQuartos != null){
            query += condicao + " obj.qtdQuartos >= :qtdQuartos";
            condicao = " AND ";
        }
        if(qtdBanheiros != null){
            query += condicao + " obj.qtdBanheiros >= :qtdBanheiros";
            condicao = " AND ";
        }
        if(qtdVagasNaGaragem != null){
            query += condicao + " obj.qtdVagasNaGaragem >= :qtdVagasNaGaragem";
            condicao = " AND ";
        }
        if(minValor != null && maxValor != null){
            query += condicao + " obj.valor BETWEEN :minValor AND :maxValor";
            condicao = " AND ";
        }
        if(minMetrosQuadrados != null && maxMetrosQuadrados != null){
            query += condicao + " obj.metrosQuadrados BETWEEN :minMetrosQuadrados AND :maxMetrosQuadrados";
        }


        TypedQuery<Residencia> q = em.createQuery(query, Residencia.class);

        if(qtdQuartos != null){
            q.setParameter("qtdQuartos",qtdQuartos);
        }
        if(qtdBanheiros != null){
            q.setParameter("qtdBanheiros",qtdBanheiros);
        }
        if(qtdVagasNaGaragem != null){
            q.setParameter("qtdVagasNaGaragem",qtdVagasNaGaragem);
        }
        if(minValor != null && maxValor != null){
            q.setParameter("minValor",minValor);
            q.setParameter("maxValor",maxValor);
        }
        if(minMetrosQuadrados != null && maxMetrosQuadrados != null) {
            q.setParameter("minMetrosQuadrados",minMetrosQuadrados);
            q.setParameter("maxMetrosQuadrados",maxMetrosQuadrados);
        }
            return q.getResultList();
    }

}
