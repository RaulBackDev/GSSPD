package com.gsspd.pokedex.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import java.math.BigDecimal;
import lombok.Data;

@Data
@Entity
@Table(name="pokemon")
public class PokemonEntity {
    
    @Id
    private Integer id;
    
    @Column(name="nome", nullable=false)
    @NotNull(message="O campo Nome não foi informado.")
    @NotBlank(message="O campo Nome não foi informado.")
    @Size(max=40, message="O campo Nome aceito no máximo 40 caracteres.")
    private String nome;
    
    @Column(name="altura", nullable=false, precision=4, scale=2)
    @NotNull(message="O campo Altura não foi informado.")
    @Min(value=0, message="O campo Altura aceita no mínimo 0")
    @Max(value=30, message="O campo Altura aceita no máximo 30")
    private BigDecimal altura;
    
    @Column(name="peso", nullable=false, precision=6, scale=2)
    @NotNull(message="O campo Peso não foi informado.")
    @Min(value=0, message="O campo Peso aceita no mínimo 0")
    @Max(value=1500, message="O campo Peso aceita no máximo 1500")
    private BigDecimal peso;
    
    @Column(name="tipo", nullable=false)
    @NotNull(message="O campo Tipo não foi informado.")
    @NotBlank(message="O campo Tipo não foi informado.")
    @Size(max=14, message="O campo Tipo aceita no máximo 14 caracters")
    private String tipo;
    
    @Column(name="tipo2")
    @Size(max=14, message="O campo Tipo2 aceita no máximo 14 caracters")
    private String tipo2;
 
    @Column(name="preevolucao")
    @Size(max=40, message="O campo Pre-Evolução aceito no máximo 40 caracteres.")
    private String preEvolucao;
    
    @Column(name="evolucao")
    @Size(max=40, message="O campo Evolução aceito no máximo 40 caracteres.")
    private String evolucao;
    
    @Column(name="imgsrc", nullable=false)
    @NotNull(message = "O campo Img Src não foi informado.")
    @NotBlank(message = "O campo Img Src não foi informado.")
    @Size(max=100, message="O campo Img Src aceita no máximo 100 caracteres")
    private String imgSrc;
}
