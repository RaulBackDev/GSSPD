package com.gsspd.pokedex.api.service;

import com.gsspd.pokedex.api.repository.PokemonRepository;
import com.gsspd.pokedex.model.PokemonEntity;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PokemonService {
    @Autowired
    PokemonRepository pokemonRepo;
    
    //Buscar todos os Pokemon
    public List<PokemonEntity> readAll() {
        return pokemonRepo.findAll();
    }
    
    //Buscar Pokemon por nome
    public PokemonEntity readByNome(String nome) {
        return pokemonRepo.findByNome(nome);
    }
}
