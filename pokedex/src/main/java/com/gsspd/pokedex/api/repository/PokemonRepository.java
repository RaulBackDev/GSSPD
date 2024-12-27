package com.gsspd.pokedex.api.repository;

import com.gsspd.pokedex.model.PokemonEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PokemonRepository extends 
        JpaRepository<PokemonEntity, Integer> {
    PokemonEntity findByNome(String nome);
}
