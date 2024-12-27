package com.gsspd.pokedex.api.apicontroller;

import com.gsspd.pokedex.api.service.PokemonService;
import com.gsspd.pokedex.model.PokemonEntity;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/gsspd")
@CrossOrigin(origins = "http://127.0.0.1:5500")
public class PokemonController {
    @Autowired
    PokemonService pokemonSvc;
    
    //GET REQUEST
    @GetMapping("/pesquisar")
    public ResponseEntity<List<PokemonEntity>> pesquisarPokemons() {
        List<PokemonEntity> pokemonList = pokemonSvc.readAll();
        
        if(pokemonList.isEmpty()) {
            return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
        }
        else {
            return new ResponseEntity<>(pokemonList, HttpStatus.OK);
        }
    }
    
    @GetMapping("/pesquisar/{nome}")
    public ResponseEntity<PokemonEntity> pesquisarPokemonPorNome(
            @PathVariable("nome") String nome) {
        PokemonEntity pokemon = pokemonSvc.readByNome(nome);
        
        if(pokemon == null) {
            return new ResponseEntity(null, HttpStatus.NOT_FOUND);
        }
        else {
            return new ResponseEntity(pokemon, HttpStatus.OK);
        }
    }
}
