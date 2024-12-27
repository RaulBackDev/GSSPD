//Diretorio das imagens dos Pokemon
const pkmImgDir = '/images/pokemon_images/';

//Tipos
const tipoArray = [
    'Normal', 'Fogo', 'Água', 'Grama', 'Voador', 'Lutador', 'Veneno', 'Elétrico', 'Terra', 
    'Pedra', 'Psíquico', 'Gelo', 'Inseto', 'Fantasma', 'Dragão'
];

// Pokémon da primeira geração

const pokemonArray = [
    // Bulbasaur
    {
        id: 1,
        nome: 'Bulbasaur',
        altura: 0.7,
        peso: 6.9,
        tipo: tipoArray[3] + ', ' + tipoArray[6],
        preEvolucao: 'Nenhuma',
        evolucao: 'Ivysaur',
        imgSrc: pkmImgDir + 'Bulbasaur.png'
    },
    // Ivysaur
    {
        id: 2,
        nome: 'Ivysaur',
        altura: 1.0,
        peso: 13.0,
        tipo: tipoArray[3] + ', ' + tipoArray[6],
        preEvolucao: 'Bulbasaur',
        evolucao: 'Venusaur',
        imgSrc: pkmImgDir + 'Ivysaur.png'
    },
    // Venusaur
    {
        id: 3,
        nome: 'Venusaur',
        altura: 2.0,
        peso: 100.0,
        tipo: tipoArray[3] + ', ' + tipoArray[6],
        preEvolucao: 'Ivysaur',
        evolucao: 'Nenhuma',
        imgSrc: pkmImgDir + 'Venusaur.png'
    },
    // Charmander
    {
        id: 4,
        nome: 'Charmander',
        altura: 0.6,
        peso: 8.5,
        tipo: tipoArray[1],
        preEvolucao: 'Nenhuma',
        evolucao: 'Charmeleon',
        imgSrc: pkmImgDir + 'Charmander.png'
    },
    // Charmeleon
    {
        id: 5,
        nome: 'Charmeleon',
        altura: 1.1,
        peso: 19.0,
        tipo: tipoArray[1],
        preEvolucao: 'Charmander',
        evolucao: 'Charizard',
        imgSrc: pkmImgDir + 'Charmeleon.png'
    },
    // Charizard
    {
        id: 6,
        nome: 'Charizard',
        altura: 1.7,
        peso: 90.5,
        tipo: tipoArray[1] + ', ' + tipoArray[4],
        preEvolucao: 'Charmeleon',
        evolucao: 'Nenhuma',
        imgSrc: pkmImgDir + 'Charizard.png'
    },
    // Squirtle
    {
        id: 7,
        nome: 'Squirtle',
        altura: 0.5,
        peso: 9.0,
        tipo: tipoArray[2],
        preEvolucao: 'Nenhuma',
        evolucao: 'Wartortle',
        imgSrc: pkmImgDir + 'Squirtle.png'
    },
    // Wartortle
    {
        id: 8,
        nome: 'Wartortle',
        altura: 1.0,
        peso: 22.5,
        tipo: tipoArray[2],
        preEvolucao: 'Squirtle',
        evolucao: 'Blastoise',
        imgSrc: pkmImgDir + 'Wartortle.png'
    },
    // Blastoise
    {
        id: 9,
        nome: 'Blastoise',
        altura: 1.6,
        peso: 85.5,
        tipo: tipoArray[2],
        preEvolucao: 'Wartortle',
        evolucao: 'Nenhuma',
        imgSrc: pkmImgDir + 'Blastoise.png'
    },
    // Caterpie
    {
        id: 10,
        nome: 'Caterpie',
        altura: 0.3,
        peso: 2.9,
        tipo: tipoArray[12],
        preEvolucao: 'Nenhuma',
        evolucao: 'Metapod',
        imgSrc: pkmImgDir + 'Caterpie.png'
    },
    // Metapod
    {
        id: 11,
        nome: 'Metapod',
        altura: 0.7,
        peso: 9.9,
        tipo: tipoArray[12],
        preEvolucao: 'Caterpie',
        evolucao: 'Butterfree',
        imgSrc: pkmImgDir + 'Metapod.png'
    },
    // Butterfree
    {
        id: 12,
        nome: 'Butterfree',
        altura: 1.1,
        peso: 32.0,
        tipo: tipoArray[12] + ', ' + tipoArray[4],
        preEvolucao: 'Metapod',
        evolucao: 'Nenhuma',
        imgSrc: pkmImgDir + 'Butterfree.png'
    },
    // Weedle
    {
        id: 13,
        nome: 'Weedle',
        altura: 0.3,
        peso: 3.2,
        tipo: tipoArray[12] + ', ' + tipoArray[6],
        preEvolucao: 'Nenhuma',
        evolucao: 'Kakuna',
        imgSrc: pkmImgDir + 'Weedle.png'
    },
    // Kakuna
    {
        id: 14,
        nome: 'Kakuna',
        altura: 0.6,
        peso: 10.0,
        tipo: tipoArray[12] + ', ' + tipoArray[6],
        preEvolucao: 'Weedle',
        evolucao: 'Beedrill',
        imgSrc: pkmImgDir + 'Kakuna.png'
    },
    // Beedrill
    {
        id: 15,
        nome: 'Beedrill',
        altura: 1.0,
        peso: 29.5,
        tipo: tipoArray[12] + ', ' + tipoArray[6],
        preEvolucao: 'Kakuna',
        evolucao: 'Nenhuma',
        imgSrc: pkmImgDir + 'Beedrill.png'
    },
    // Pidgey
    {
        id: 16,
        nome: 'Pidgey',
        altura: 0.3,
        peso: 1.8,
        tipo: tipoArray[0] + ', ' + tipoArray[4],
        preEvolucao: 'Nenhuma',
        evolucao: 'Pidgeotto',
        imgSrc: pkmImgDir + 'Pidgey.png'
    },
    // Pidgeotto
    {
        id: 17,
        nome: 'Pidgeotto',
        altura: 1.1,
        peso: 30.0,
        tipo: tipoArray[0] + ', ' + tipoArray[4],
        preEvolucao: 'Pidgey',
        evolucao: 'Pidgeot',
        imgSrc: pkmImgDir + 'Pidgeotto.png'
    },
    // Pidgeot
    {
        id: 18,
        nome: 'Pidgeot',
        altura: 1.5,
        peso: 39.5,
        tipo: tipoArray[0] + ', ' + tipoArray[4],
        preEvolucao: 'Pidgeotto',
        evolucao: 'Nenhuma',
        imgSrc: pkmImgDir + 'Pidgeot.png'
    },
    // Rattata
    {
        id: 19,
        nome: 'Rattata',
        altura: 0.3,
        peso: 3.5,
        tipo: tipoArray[0],
        preEvolucao: 'Nenhuma',
        evolucao: 'Raticate',
        imgSrc: pkmImgDir + 'Rattata.png'
    },
    // Raticate
    {
        id: 20,
        nome: 'Raticate',
        altura: 0.7,
        peso: 18.5,
        tipo: tipoArray[0],
        preEvolucao: 'Rattata',
        evolucao: 'Nenhuma',
        imgSrc: pkmImgDir + 'Raticate.png'
    },
     // Spearow
     {
        id: 21,
        nome: 'Spearow',
        altura: 0.3,
        peso: 2.0,
        tipo: tipoArray[0] + ', ' + tipoArray[4],
        preEvolucao: 'Nenhuma',
        evolucao: 'Fearow',
        imgSrc: pkmImgDir + 'Spearow.png'
    },
    // Fearow
    {
        id: 22,
        nome: 'Fearow',
        altura: 1.2,
        peso: 38.0,
        tipo: tipoArray[0] + ', ' + tipoArray[4],
        preEvolucao: 'Spearow',
        evolucao: 'Nenhuma',
        imgSrc: pkmImgDir + 'Fearow.png'
    },
    // Ekans
    {
        id: 23,
        nome: 'Ekans',
        altura: 2.0,
        peso: 6.9,
        tipo: tipoArray[6],
        preEvolucao: 'Nenhuma',
        evolucao: 'Arbok',
        imgSrc: pkmImgDir + 'Ekans.png'
    },
    // Arbok
    {
        id: 24,
        nome: 'Arbok',
        altura: 3.5,
        peso: 65.0,
        tipo: tipoArray[6],
        preEvolucao: 'Ekans',
        evolucao: 'Nenhuma',
        imgSrc: pkmImgDir + 'Arbok.png'
    },
    // Pikachu
    {
        id: 25,
        nome: 'Pikachu',
        altura: 0.4,
        peso: 6.0,
        tipo: tipoArray[7],
        preEvolucao: 'Pichu',
        evolucao: 'Raichu',
        imgSrc: pkmImgDir + 'Pikachu.png'
    },
    // Raichu
    {
        id: 26,
        nome: 'Raichu',
        altura: 0.8,
        peso: 30.0,
        tipo: tipoArray[7],
        preEvolucao: 'Pikachu',
        evolucao: 'Nenhuma',
        imgSrc: pkmImgDir + 'Raichu.png'
    },
    // Sandshrew
    {
        id: 27,
        nome: 'Sandshrew',
        altura: 0.6,
        peso: 12.0,
        tipo: tipoArray[8],
        preEvolucao: 'Nenhuma',
        evolucao: 'Sandslash',
        imgSrc: pkmImgDir + 'Sandshrew.png'
    },
    // Sandslash
    {
        id: 28,
        nome: 'Sandslash',
        altura: 1.0,
        peso: 29.5,
        tipo: tipoArray[8],
        preEvolucao: 'Sandshrew',
        evolucao: 'Nenhuma',
        imgSrc: pkmImgDir + 'Sandslash.png'
    },
    // Nidoran♀
    {
        id: 29,
        nome: 'Nidoran♀',
        altura: 0.4,
        peso: 7.0,
        tipo: tipoArray[6],
        preEvolucao: 'Nenhuma',
        evolucao: 'Nidorina',
        imgSrc: pkmImgDir + 'Nidoran (Female).png'
    },
    // Nidorina
    {
        id: 30,
        nome: 'Nidorina',
        altura: 0.8,
        peso: 20.0,
        tipo: tipoArray[6],
        preEvolucao: 'Nidoran♀',
        evolucao: 'Nidoqueen',
        imgSrc: pkmImgDir + 'Nidorina.png'
    },
    // Nidoqueen
    {
        id: 31,
        nome: 'Nidoqueen',
        altura: 1.3,
        peso: 60.0,
        tipo: tipoArray[6] + ', ' + tipoArray[8],
        preEvolucao: 'Nidorina',
        evolucao: 'Nenhuma',
        imgSrc: pkmImgDir + 'Nidoqueen.png'
    },
    // Nidoran♂
    {
        id: 32,
        nome: 'Nidoran♂',
        altura: 0.5,
        peso: 9.0,
        tipo: tipoArray[6],
        preEvolucao: 'Nenhuma',
        evolucao: 'Nidorino',
        imgSrc: pkmImgDir + 'Nidoran (Male).png'
    },
    // Nidorino
    {
        id: 33,
        nome: 'Nidorino',
        altura: 0.9,
        peso: 19.5,
        tipo: tipoArray[6],
        preEvolucao: 'Nidoran♂',
        evolucao: 'Nidoking',
        imgSrc: pkmImgDir + 'Nidorino.png'
    },
    // Nidoking
    {
        id: 34,
        nome: 'Nidoking',
        altura: 1.4,
        peso: 62.0,
        tipo: tipoArray[6] + ', ' + tipoArray[8],
        preEvolucao: 'Nidorino',
        evolucao: 'Nenhuma',
        imgSrc: pkmImgDir + 'Nidoking.png'
    },
    // Clefairy
    {
        id: 35,
        nome: 'Clefairy',
        altura: 0.6,
        peso: 7.5,
        tipo: tipoArray[0],
        preEvolucao: 'Cleffa',
        evolucao: 'Clefable',
        imgSrc: pkmImgDir + 'Clefairy.png'
    },
    // Clefable
    {
        id: 36,
        nome: 'Clefable',
        altura: 1.3,
        peso: 40.0,
        tipo: tipoArray[0],
        preEvolucao: 'Clefairy',
        evolucao: 'Nenhuma',
        imgSrc: pkmImgDir + 'Clefable.png'
    },
    // Vulpix
    {
        id: 37,
        nome: 'Vulpix',
        altura: 0.6,
        peso: 9.9,
        tipo: tipoArray[1],
        preEvolucao: 'Nenhuma',
        evolucao: 'Ninetales',
        imgSrc: pkmImgDir + 'Vulpix.png'
    },
    // Ninetales
    {
        id: 38,
        nome: 'Ninetales',
        altura: 1.1,
        peso: 19.9,
        tipo: tipoArray[1],
        preEvolucao: 'Vulpix',
        evolucao: 'Nenhuma',
        imgSrc: pkmImgDir + 'Ninetales.png'
    },
    // Jigglypuff
    {
        id: 39,
        nome: 'Jigglypuff',
        altura: 0.5,
        peso: 5.5,
        tipo: tipoArray[0],
        preEvolucao: 'Igglybuff',
        evolucao: 'Wigglytuff',
        imgSrc: pkmImgDir + 'Jigglypuff.png'
    },
    // Wigglytuff
    {
        id: 40,
        nome: 'Wigglytuff',
        altura: 1.0,
        peso: 12.0,
        tipo: tipoArray[0],
        preEvolucao: 'Jigglypuff',
        evolucao: 'Nenhuma',
        imgSrc: pkmImgDir + 'Wigglytuff.png'
    },
    // Zubat
    {
        id: 41,
        nome: 'Zubat',
        altura: 0.8,
        peso: 7.5,
        tipo: tipoArray[6] + ', ' + tipoArray[4],
        preEvolucao: 'Nenhuma',
        evolucao: 'Golbat',
        imgSrc: pkmImgDir + 'Zubat.png'
    },
    // Golbat
    {
        id: 42,
        nome: 'Golbat',
        altura: 1.6,
        peso: 55.0,
        tipo: tipoArray[6] + ', ' + tipoArray[4],
        preEvolucao: 'Zubat',
        evolucao: 'Nenhuma',
        imgSrc: pkmImgDir + 'Golbat.png'
    },
    // Oddish
    {
        id: 43,
        nome: 'Oddish',
        altura: 0.5,
        peso: 5.4,
        tipo: tipoArray[3] + ', ' + tipoArray[6],
        preEvolucao: 'Nenhuma',
        evolucao: 'Gloom',
        imgSrc: pkmImgDir + 'Oddish.png'
    },
    // Gloom
    {
        id: 44,
        nome: 'Gloom',
        altura: 0.8,
        peso: 8.6,
        tipo: tipoArray[3] + ', ' + tipoArray[6],
        preEvolucao: 'Oddish',
        evolucao: 'Vileplume',
        imgSrc: pkmImgDir + 'Gloom.png'
    },
    // Vileplume
    {
        id: 45,
        nome: 'Vileplume',
        altura: 1.2,
        peso: 18.6,
        tipo: tipoArray[3] + ', ' + tipoArray[6],
        preEvolucao: 'Gloom',
        evolucao: 'Nenhuma',
        imgSrc: pkmImgDir + 'Vileplume.png'
    },
    // Paras
    {
        id: 46,
        nome: 'Paras',
        altura: 0.3,
        peso: 5.4,
        tipo: tipoArray[12] + ', ' + tipoArray[3],
        preEvolucao: 'Nenhuma',
        evolucao: 'Parasect',
        imgSrc: pkmImgDir + 'Paras.png'
    },
    // Parasect
    {
        id: 47,
        nome: 'Parasect',
        altura: 1.0,
        peso: 29.5,
        tipo: tipoArray[12] + ', ' + tipoArray[3],
        preEvolucao: 'Paras',
        evolucao: 'Nenhuma',
        imgSrc: pkmImgDir + 'Parasect.png'
    },
    // Venonat
    {
        id: 48,
        nome: 'Venonat',
        altura: 1.0,
        peso: 30.0,
        tipo: tipoArray[12] + ', ' + tipoArray[6],
        preEvolucao: 'Nenhuma',
        evolucao: 'Venomoth',
        imgSrc: pkmImgDir + 'Venonat.png'
    },
    // Venomoth
    {
        id: 49,
        nome: 'Venomoth',
        altura: 1.5,
        peso: 12.5,
        tipo: tipoArray[12] + ', ' + tipoArray[6],
        preEvolucao: 'Venonat',
        evolucao: 'Nenhuma',
        imgSrc: pkmImgDir + 'Venomoth.png'
    },
    // Diglett
    {
        id: 50,
        nome: 'Diglett',
        altura: 0.2,
        peso: 0.8,
        tipo: tipoArray[8],
        preEvolucao: 'Nenhuma',
        evolucao: 'Dugtrio',
        imgSrc: pkmImgDir + 'Diglett.png'
    },
    // Dugtrio
    {
        id: 51,
        nome: 'Dugtrio',
        altura: 0.7,
        peso: 33.3,
        tipo: tipoArray[8],
        preEvolucao: 'Diglett',
        evolucao: 'Nenhuma',
        imgSrc: pkmImgDir + 'Dugtrio.png'
    },
    // Meowth
    {
        id: 52,
        nome: 'Meowth',
        altura: 0.4,
        peso: 4.2,
        tipo: tipoArray[0],
        preEvolucao: 'Nenhuma',
        evolucao: 'Persian',
        imgSrc: pkmImgDir + 'Meowth.png'
    },
    // Persian
    {
        id: 53,
        nome: 'Persian',
        altura: 1.0,
        peso: 32.0,
        tipo: tipoArray[0],
        preEvolucao: 'Meowth',
        evolucao: 'Nenhuma',
        imgSrc: pkmImgDir + 'Persian.png'
    },
    // Psyduck
    {
        id: 54,
        nome: 'Psyduck',
        altura: 0.8,
        peso: 19.6,
        tipo: tipoArray[2],
        preEvolucao: 'Nenhuma',
        evolucao: 'Golduck',
        imgSrc: pkmImgDir + 'Psyduck.png'
    },
    // Golduck
    {
        id: 55,
        nome: 'Golduck',
        altura: 1.7,
        peso: 76.6,
        tipo: tipoArray[2],
        preEvolucao: 'Psyduck',
        evolucao: 'Nenhuma',
        imgSrc: pkmImgDir + 'Golduck.png'
    },
    // Mankey
    {
        id: 56,
        nome: 'Mankey',
        altura: 0.5,
        peso: 28.0,
        tipo: tipoArray[5],
        preEvolucao: 'Nenhuma',
        evolucao: 'Primeape',
        imgSrc: pkmImgDir + 'Mankey.png'
    },
    // Primeape
    {
        id: 57,
        nome: 'Primeape',
        altura: 1.0,
        peso: 32.0,
        tipo: tipoArray[5],
        preEvolucao: 'Mankey',
        evolucao: 'Nenhuma',
        imgSrc: pkmImgDir + 'Primeape.png'
    },
    // Growlithe
    {
        id: 58,
        nome: 'Growlithe',
        altura: 0.7,
        peso: 19.0,
        tipo: tipoArray[1],
        preEvolucao: 'Nenhuma',
        evolucao: 'Arcanine',
        imgSrc: pkmImgDir + 'Growlithe.png'
    },
    // Arcanine
    {
        id: 59,
        nome: 'Arcanine',
        altura: 1.9,
        peso: 155.0,
        tipo: tipoArray[1],
        preEvolucao: 'Growlithe',
        evolucao: 'Nenhuma',
        imgSrc: pkmImgDir + 'Arcanine.png'
    },
    // Poliwag
    {
        id: 60,
        nome: 'Poliwag',
        altura: 0.6,
        peso: 12.4,
        tipo: tipoArray[2],
        preEvolucao: 'Nenhuma',
        evolucao: 'Poliwhirl',
        imgSrc: pkmImgDir + 'Poliwag.png'
    },
    // Poliwhirl
    {
        id: 61,
        nome: 'Poliwhirl',
        altura: 1.0,
        peso: 20.0,
        tipo: tipoArray[2],
        preEvolucao: 'Poliwag',
        evolucao: 'Poliwrath',
        imgSrc: pkmImgDir + 'Poliwhirl.png'
    },
    // Poliwrath
    {
        id: 62,
        nome: 'Poliwrath',
        altura: 1.3,
        peso: 54.0,
        tipo: tipoArray[2] + ', ' + tipoArray[5],
        preEvolucao: 'Poliwhirl',
        evolucao: 'Nenhuma',
        imgSrc: pkmImgDir + 'Poliwrath.png'
    },
    // Abra
    {
        id: 63,
        nome: 'Abra',
        altura: 0.9,
        peso: 19.5,
        tipo: tipoArray[10],
        preEvolucao: 'Nenhuma',
        evolucao: 'Kadabra',
        imgSrc: pkmImgDir + 'Abra.png'
    },
    // Kadabra
    {
        id: 64,
        nome: 'Kadabra',
        altura: 1.3,
        peso: 56.5,
        tipo: tipoArray[10],
        preEvolucao: 'Abra',
        evolucao: 'Alakazam',
        imgSrc: pkmImgDir + 'Kadabra.png'
    },
    // Alakazam
    {
        id: 65,
        nome: 'Alakazam',
        altura: 1.5,
        peso: 48.0,
        tipo: tipoArray[10],
        preEvolucao: 'Kadabra',
        evolucao: 'Nenhuma',
        imgSrc: pkmImgDir + 'Alakazam.png'
    },
    // Machop
    {
        id: 66,
        nome: 'Machop',
        altura: 0.8,
        peso: 19.5,
        tipo: tipoArray[5],
        preEvolucao: 'Nenhuma',
        evolucao: 'Machoke',
        imgSrc: pkmImgDir + 'Machop.png'
    },
    // Machoke
    {
        id: 67,
        nome: 'Machoke',
        altura: 1.5,
        peso: 70.5,
        tipo: tipoArray[5],
        preEvolucao: 'Machop',
        evolucao: 'Machamp',
        imgSrc: pkmImgDir + 'Machoke.png'
    },
    // Machamp
    {
        id: 68,
        nome: 'Machamp',
        altura: 1.6,
        peso: 130.0,
        tipo: tipoArray[5],
        preEvolucao: 'Machoke',
        evolucao: 'Nenhuma',
        imgSrc: pkmImgDir + 'Machamp.png'
    },
    // Bellsprout
    {
        id: 69,
        nome: 'Bellsprout',
        altura: 0.7,
        peso: 4.0,
        tipo: tipoArray[3] + ', ' + tipoArray[6],
        preEvolucao: 'Nenhuma',
        evolucao: 'Weepinbell',
        imgSrc: pkmImgDir + 'Bellsprout.png'
    },
    // Weepinbell
    {
        id: 70,
        nome: 'Weepinbell',
        altura: 1.0,
        peso: 6.4,
        tipo: tipoArray[3] + ', ' + tipoArray[6],
        preEvolucao: 'Bellsprout',
        evolucao: 'Victreebel',
        imgSrc: pkmImgDir + 'Weepinbell.png'
    },
    // Victreebel
    {
        id: 71,
        nome: 'Victreebel',
        altura: 1.7,
        peso: 15.5,
        tipo: tipoArray[3] + ', ' + tipoArray[6],
        preEvolucao: 'Weepinbell',
        evolucao: 'Nenhuma',
        imgSrc: pkmImgDir + 'Victreebel.png'
    },
    // Tentacool
    {
        id: 72,
        nome: 'Tentacool',
        altura: 0.9,
        peso: 45.5,
        tipo: tipoArray[2] + ', ' + tipoArray[6],
        preEvolucao: 'Nenhuma',
        evolucao: 'Tentacruel',
        imgSrc: pkmImgDir + 'Tentacool.png'
    },
    // Tentacruel
    {
        id: 73,
        nome: 'Tentacruel',
        altura: 1.6,
        peso: 55.0,
        tipo: tipoArray[2] + ', ' + tipoArray[6],
        preEvolucao: 'Tentacool',
        evolucao: 'Nenhuma',
        imgSrc: pkmImgDir + 'Tentacruel.png'
    },
    // Geodude
    {
        id: 74,
        nome: 'Geodude',
        altura: 0.4,
        peso: 20.0,
        tipo: tipoArray[9] + ', ' + tipoArray[8],
        preEvolucao: 'Nenhuma',
        evolucao: 'Graveler',
        imgSrc: pkmImgDir + 'Geodude.png'
    },
    // Graveler
    {
        id: 75,
        nome: 'Graveler',
        altura: 1.0,
        peso: 105.0,
        tipo: tipoArray[9] + ', ' + tipoArray[8],
        preEvolucao: 'Geodude',
        evolucao: 'Golem',
        imgSrc: pkmImgDir + 'Graveler.png'
    },
    // Golem
    {
        id: 76,
        nome: 'Golem',
        altura: 1.4,
        peso: 300.0,
        tipo: tipoArray[9] + ', ' + tipoArray[8],
        preEvolucao: 'Graveler',
        evolucao: 'Nenhuma',
        imgSrc: pkmImgDir + 'Golem.png'
    },
    // Ponyta
    {
        id: 77,
        nome: 'Ponyta',
        altura: 1.0,
        peso: 30.0,
        tipo: tipoArray[1],
        preEvolucao: 'Nenhuma',
        evolucao: 'Rapidash',
        imgSrc: pkmImgDir + 'Ponyta.png'
    },
    // Rapidash
    {
        id: 78,
        nome: 'Rapidash',
        altura: 1.7,
        peso: 95.0,
        tipo: tipoArray[1],
        preEvolucao: 'Ponyta',
        evolucao: 'Nenhuma',
        imgSrc: pkmImgDir + 'Rapidash.png'
    },
    // Slowpoke
    {
        id: 79,
        nome: 'Slowpoke',
        altura: 1.2,
        peso: 36.0,
        tipo: tipoArray[2] + ', ' + tipoArray[10],
        preEvolucao: 'Nenhuma',
        evolucao: 'Slowbro',
        imgSrc: pkmImgDir + 'Slowpoke.png'
    },
    // Slowbro
    {
        id: 80,
        nome: 'Slowbro',
        altura: 1.6,
        peso: 78.5,
        tipo: tipoArray[2] + ', ' + tipoArray[10],
        preEvolucao: 'Slowpoke',
        evolucao: 'Nenhuma',
        imgSrc: pkmImgDir + 'Slowbro.png'
    },
    // Magnemite
    {
        id: 81,
        nome: 'Magnemite',
        altura: 0.3,
        peso: 6.0,
        tipo: tipoArray[7],
        preEvolucao: 'Nenhuma',
        evolucao: 'Magneton',
        imgSrc: pkmImgDir + 'Magnemite.png'
    },
    // Magneton
    {
        id: 82,
        nome: 'Magneton',
        altura: 1.0,
        peso: 60.0,
        tipo: tipoArray[7],
        preEvolucao: 'Magnemite',
        evolucao: 'Nenhuma',
        imgSrc: pkmImgDir + 'Magneton.png'
    },
    // Farfetch'd
    {
        id: 83,
        nome: 'Farfetch’d',
        altura: 0.8,
        peso: 15.0,
        tipo: tipoArray[0] + ', ' + tipoArray[4],
        preEvolucao: 'Nenhuma',
        evolucao: 'Nenhuma',
        imgSrc: pkmImgDir + 'Farfetchd.png'
    },
    // Doduo
    {
        id: 84,
        nome: 'Doduo',
        altura: 1.4,
        peso: 39.2,
        tipo: tipoArray[0] + ', ' + tipoArray[4],
        preEvolucao: 'Nenhuma',
        evolucao: 'Dodrio',
        imgSrc: pkmImgDir + 'Doduo.png'
    },
    // Dodrio
    {
        id: 85,
        nome: 'Dodrio',
        altura: 1.8,
        peso: 85.2,
        tipo: tipoArray[0] + ', ' + tipoArray[4],
        preEvolucao: 'Doduo',
        evolucao: 'Nenhuma',
        imgSrc: pkmImgDir + 'Dodrio.png'
    },
    // Seel
    {
        id: 86,
        nome: 'Seel',
        altura: 1.1,
        peso: 90.0,
        tipo: tipoArray[2],
        preEvolucao: 'Nenhuma',
        evolucao: 'Dewgong',
        imgSrc: pkmImgDir + 'Seel.png'
    },
    // Dewgong
    {
        id: 87,
        nome: 'Dewgong',
        altura: 1.7,
        peso: 120.0,
        tipo: tipoArray[2] + ', ' + tipoArray[11],
        preEvolucao: 'Seel',
        evolucao: 'Nenhuma',
        imgSrc: pkmImgDir + 'Dewgong.png'
    },
    // Grimer
    {
        id: 88,
        nome: 'Grimer',
        altura: 0.9,
        peso: 30.0,
        tipo: tipoArray[6],
        preEvolucao: 'Nenhuma',
        evolucao: 'Muk',
        imgSrc: pkmImgDir + 'Grimer.png'
    },
    // Muk
    {
        id: 89,
        nome: 'Muk',
        altura: 1.2,
        peso: 30.0,
        tipo: tipoArray[6],
        preEvolucao: 'Grimer',
        evolucao: 'Nenhuma',
        imgSrc: pkmImgDir + 'Muk.png'
    },
    // Shellder
    {
        id: 90,
        nome: 'Shellder',
        altura: 0.3,
        peso: 4.0,
        tipo: tipoArray[2],
        preEvolucao: 'Nenhuma',
        evolucao: 'Cloyster',
        imgSrc: pkmImgDir + 'Shellder.png'
    },
    // Cloyster
    {
        id: 91,
        nome: 'Cloyster',
        altura: 1.5,
        peso: 132.5,
        tipo: tipoArray[2] + ', ' + tipoArray[11],
        preEvolucao: 'Shellder',
        evolucao: 'Nenhuma',
        imgSrc: pkmImgDir + 'Cloyster.png'
    },
    // Gastly
    {
        id: 92,
        nome: 'Gastly',
        altura: 1.3,
        peso: 0.1,
        tipo: tipoArray[13] + ', ' + tipoArray[6],
        preEvolucao: 'Nenhuma',
        evolucao: 'Haunter',
        imgSrc: pkmImgDir + 'Gastly.png'
    },
    // Haunter
    {
        id: 93,
        nome: 'Haunter',
        altura: 1.6,
        peso: 0.1,
        tipo: tipoArray[13] + ', ' + tipoArray[6],
        preEvolucao: 'Gastly',
        evolucao: 'Gengar',
        imgSrc: pkmImgDir + 'Haunter.png'
    },
    // Gengar
    {
        id: 94,
        nome: 'Gengar',
        altura: 1.5,
        peso: 40.5,
        tipo: tipoArray[13] + ', ' + tipoArray[6],
        preEvolucao: 'Haunter',
        evolucao: 'Nenhuma',
        imgSrc: pkmImgDir + 'Gengar.png'
    },
    // Onix
    {
        id: 95,
        nome: 'Onix',
        altura: 8.8,
        peso: 210.0,
        tipo: tipoArray[8] + ', ' + tipoArray[9],
        preEvolucao: 'Nenhuma',
        evolucao: 'Nenhuma',
        imgSrc: pkmImgDir + 'Onix.png'
    },
    // Drowzee
    {
        id: 96,
        nome: 'Drowzee',
        altura: 1.0,
        peso: 32.4,
        tipo: tipoArray[10],
        preEvolucao: 'Nenhuma',
        evolucao: 'Hypno',
        imgSrc: pkmImgDir + 'Drowzee.png'
    },
    // Hypno
    {
        id: 97,
        nome: 'Hypno',
        altura: 1.6,
        peso: 75.6,
        tipo: tipoArray[10],
        preEvolucao: 'Drowzee',
        evolucao: 'Nenhuma',
        imgSrc: pkmImgDir + 'Hypno.png'
    },
    // Krabby
    {
        id: 98,
        nome: 'Krabby',
        altura: 0.4,
        peso: 6.5,
        tipo: tipoArray[2],
        preEvolucao: 'Nenhuma',
        evolucao: 'Kingler',
        imgSrc: pkmImgDir + 'Krabby.png'
    },
    // Kingler
    {
        id: 99,
        nome: 'Kingler',
        altura: 1.3,
        peso: 60.0,
        tipo: tipoArray[2],
        preEvolucao: 'Krabby',
        evolucao: 'Nenhuma',
        imgSrc: pkmImgDir + 'Kingler.png'
    },
    // Voltorb
    {
        id: 100,
        nome: 'Voltorb',
        altura: 0.5,
        peso: 10.4,
        tipo: tipoArray[7],
        preEvolucao: 'Nenhuma',
        evolucao: 'Electrode',
        imgSrc: pkmImgDir + 'Voltorb.png'
    },
    // Electrode
    {
        id: 101,
        nome: 'Electrode',
        altura: 1.2,
        peso: 66.6,
        tipo: tipoArray[7],
        preEvolucao: 'Voltorb',
        evolucao: 'Nenhuma',
        imgSrc: pkmImgDir + 'Electrode.png'
    },
    // Exeggcute
    {
        id: 102,
        nome: 'Exeggcute',
        altura: 0.4,
        peso: 2.5,
        tipo: tipoArray[3] + ', ' + tipoArray[10],
        preEvolucao: 'Nenhuma',
        evolucao: 'Exeggutor',
        imgSrc: pkmImgDir + 'Exeggcute.png'
    },
    // Exeggutor
    {
        id: 103,
        nome: 'Exeggutor',
        altura: 2.0,
        peso: 120.0,
        tipo: tipoArray[3] + ', ' + tipoArray[10],
        preEvolucao: 'Exeggcute',
        evolucao: 'Nenhuma',
        imgSrc: pkmImgDir + 'Exeggutor.png'
    },
    // Cubone
    {
        id: 104,
        nome: 'Cubone',
        altura: 0.4,
        peso: 6.5,
        tipo: tipoArray[8],
        preEvolucao: 'Nenhuma',
        evolucao: 'Marowak',
        imgSrc: pkmImgDir + 'Cubone.png'
    },
    // Marowak
    {
        id: 105,
        nome: 'Marowak',
        altura: 1.0,
        peso: 45.0,
        tipo: tipoArray[8],
        preEvolucao: 'Cubone',
        evolucao: 'Nenhuma',
        imgSrc: pkmImgDir + 'Marowak.png'
    },
    // Hitmonlee
    {
        id: 106,
        nome: 'Hitmonlee',
        altura: 1.5,
        peso: 49.8,
        tipo: tipoArray[5],
        preEvolucao: 'Nenhuma',
        evolucao: 'Nenhuma',
        imgSrc: pkmImgDir + 'Hitmonlee.png'
    },
    // Hitmonchan
    {
        id: 107,
        nome: 'Hitmonchan',
        altura: 1.4,
        peso: 50.2,
        tipo: tipoArray[5],
        preEvolucao: 'Nenhuma',
        evolucao: 'Nenhuma',
        imgSrc: pkmImgDir + 'Hitmonchan.png'
    },
    // Lickitung
    {
        id: 108,
        nome: 'Lickitung',
        altura: 1.2,
        peso: 65.5,
        tipo: tipoArray[0],
        preEvolucao: 'Nenhuma',
        evolucao: 'Nenhuma',
        imgSrc: pkmImgDir + 'Lickitung.png'
    },
    // Koffing
    {
        id: 109,
        nome: 'Koffing',
        altura: 0.6,
        peso: 1.0,
        tipo: tipoArray[6],
        preEvolucao: 'Nenhuma',
        evolucao: 'Weezing',
        imgSrc: pkmImgDir + 'Koffing.png'
    },
    // Weezing
    {
        id: 110,
        nome: 'Weezing',
        altura: 1.2,
        peso: 9.5,
        tipo: tipoArray[6],
        preEvolucao: 'Koffing',
        evolucao: 'Nenhuma',
        imgSrc: pkmImgDir + 'Weezing.png'
    },
    // Rhyhorn
    {
        id: 111,
        nome: 'Rhyhorn',
        altura: 1.0,
        peso: 115.0,
        tipo: tipoArray[8] + ', ' + tipoArray[9],
        preEvolucao: 'Nenhuma',
        evolucao: 'Rhydon',
        imgSrc: pkmImgDir + 'Rhyhorn.png'
    },
    // Rhydon
    {
        id: 112,
        nome: 'Rhydon',
        altura: 1.9,
        peso: 120.0,
        tipo: tipoArray[8] + ', ' + tipoArray[9],
        preEvolucao: 'Rhyhorn',
        evolucao: 'Nenhuma',
        imgSrc: pkmImgDir + 'Rhydon.png'
    },
    // Chansey
    {
        id: 113,
        nome: 'Chansey',
        altura: 1.1,
        peso: 34.6,
        tipo: tipoArray[0],
        preEvolucao: 'Nenhuma',
        evolucao: 'Nenhuma',
        imgSrc: pkmImgDir + 'Chansey.png'
    },
    // Tangela
    {
        id: 114,
        nome: 'Tangela',
        altura: 1.0,
        peso: 35.0,
        tipo: tipoArray[3],
        preEvolucao: 'Nenhuma',
        evolucao: 'Nenhuma',
        imgSrc: pkmImgDir + 'Tangela.png'
    },
    // Kangaskhan
    {
        id: 115,
        nome: 'Kangaskhan',
        altura: 2.2,
        peso: 80.0,
        tipo: tipoArray[0],
        preEvolucao: 'Nenhuma',
        evolucao: 'Nenhuma',
        imgSrc: pkmImgDir + 'Kangaskhan.png'
    },
    // Horsea
    {
        id: 116,
        nome: 'Horsea',
        altura: 0.4,
        peso: 8.0,
        tipo: tipoArray[2],
        preEvolucao: 'Nenhuma',
        evolucao: 'Seadra',
        imgSrc: pkmImgDir + 'Horsea.png'
    },
    // Seadra
    {
        id: 117,
        nome: 'Seadra',
        altura: 1.2,
        peso: 25.0,
        tipo: tipoArray[2],
        preEvolucao: 'Horsea',
        evolucao: 'Nenhuma',
        imgSrc: pkmImgDir + 'Seadra.png'
    },
    // Goldeen
    {
        id: 118,
        nome: 'Goldeen',
        altura: 0.6,
        peso: 15.0,
        tipo: tipoArray[2],
        preEvolucao: 'Nenhuma',
        evolucao: 'Seaking',
        imgSrc: pkmImgDir + 'Goldeen.png'
    },
    // Seaking
    {
        id: 119,
        nome: 'Seaking',
        altura: 1.3,
        peso: 39.0,
        tipo: tipoArray[2],
        preEvolucao: 'Goldeen',
        evolucao: 'Nenhuma',
        imgSrc: pkmImgDir + 'Seaking.png'
    },
    // Staryu
    {
        id: 120,
        nome: 'Staryu',
        altura: 0.8,
        peso: 34.5,
        tipo: tipoArray[2],
        preEvolucao: 'Nenhuma',
        evolucao: 'Starmie',
        imgSrc: pkmImgDir + 'Staryu.png'
    },
    // Starmie
    {
        id: 121,
        nome: 'Starmie',
        altura: 1.1,
        peso: 80.0,
        tipo: tipoArray[2] + ', ' + tipoArray[10],
        preEvolucao: 'Staryu',
        evolucao: 'Nenhuma',
        imgSrc: pkmImgDir + 'Starmie.png'
    },
    // Mr. Mime
    {
        id: 122,
        nome: 'Mr. Mime',
        altura: 1.3,
        peso: 54.5,
        tipo: tipoArray[10],
        preEvolucao: 'Nenhuma',
        evolucao: 'Nenhuma',
        imgSrc: pkmImgDir + 'Mr mime.png'
    },
    // Scyther
    {
        id: 123,
        nome: 'Scyther',
        altura: 1.5,
        peso: 56.0,
        tipo: tipoArray[12] + ', ' + tipoArray[4],
        preEvolucao: 'Nenhuma',
        evolucao: 'Nenhuma',
        imgSrc: pkmImgDir + 'Scyther.png'
    },
    // Jynx
    {
        id: 124,
        nome: 'Jynx',
        altura: 1.4,
        peso: 40.6,
        tipo: tipoArray[10] + ', ' + tipoArray[11],
        preEvolucao: 'Nenhuma',
        evolucao: 'Nenhuma',
        imgSrc: pkmImgDir + 'Jynx.png'
    },
    // Electabuzz
    {
        id: 125,
        nome: 'Electabuzz',
        altura: 1.1,
        peso: 30.0,
        tipo: tipoArray[7],
        preEvolucao: 'Nenhuma',
        evolucao: 'Nenhuma',
        imgSrc: pkmImgDir + 'Electabuzz.png'
    },
    // Magmar
    {
        id: 126,
        nome: 'Magmar',
        altura: 1.3,
        peso: 44.5,
        tipo: tipoArray[1],
        preEvolucao: 'Nenhuma',
        evolucao: 'Nenhuma',
        imgSrc: pkmImgDir + 'Magmar.png'
    },
    // Pinsir
    {
        id: 127,
        nome: 'Pinsir',
        altura: 1.5,
        peso: 55.0,
        tipo: tipoArray[12],
        preEvolucao: 'Nenhuma',
        evolucao: 'Nenhuma',
        imgSrc: pkmImgDir + 'Pinsir.png'
    },
    // Tauros
    {
        id: 128,
        nome: 'Tauros',
        altura: 1.4,
        peso: 88.4,
        tipo: tipoArray[0],
        preEvolucao: 'Nenhuma',
        evolucao: 'Nenhuma',
        imgSrc: pkmImgDir + 'Tauros.png'
    },
    // Magikarp
    {
        id: 129,
        nome: 'Magikarp',
        altura: 0.9,
        peso: 10.0,
        tipo: tipoArray[2],
        preEvolucao: 'Nenhuma',
        evolucao: 'Gyarados',
        imgSrc: pkmImgDir + 'Magikarp.png'
    },
    // Gyarados
    {
        id: 130,
        nome: 'Gyarados',
        altura: 6.5,
        peso: 235.0,
        tipo: tipoArray[2] + ', ' + tipoArray[4],
        preEvolucao: 'Magikarp',
        evolucao: 'Nenhuma',
        imgSrc: pkmImgDir + 'Gyarados.png'
    },
    // Lapras
    {
        id: 131,
        nome: 'Lapras',
        altura: 2.5,
        peso: 220.0,
        tipo: tipoArray[2] + ', ' + tipoArray[11],
        preEvolucao: 'Nenhuma',
        evolucao: 'Nenhuma',
        imgSrc: pkmImgDir + 'Lapras.png'
    },
    // Ditto
    {
        id: 132,
        nome: 'Ditto',
        altura: 0.3,
        peso: 4.0,
        tipo: tipoArray[0],
        preEvolucao: 'Nenhuma',
        evolucao: 'Nenhuma',
        imgSrc: pkmImgDir + 'Ditto.png'
    },
    // Eevee
    {
        id: 133,
        nome: 'Eevee',
        altura: 0.3,
        peso: 6.5,
        tipo: tipoArray[0],
        preEvolucao: 'Nenhuma',
        evolucao: 'Vaporeon, Jolteon, Flareon',
        imgSrc: pkmImgDir + 'Eevee.png'
    },
    // Vaporeon
    {
        id: 134,
        nome: 'Vaporeon',
        altura: 1.0,
        peso: 29.0,
        tipo: tipoArray[2],
        preEvolucao: 'Eevee',
        evolucao: 'Nenhuma',
        imgSrc: pkmImgDir + 'Vaporeon.png'
    },
    // Jolteon
    {
        id: 135,
        nome: 'Jolteon',
        altura: 0.8,
        peso: 24.5,
        tipo: tipoArray[7],
        preEvolucao: 'Eevee',
        evolucao: 'Nenhuma',
        imgSrc: pkmImgDir + 'Jolteon.png'
    },
    // Flareon
    {
        id: 136,
        nome: 'Flareon',
        altura: 0.9,
        peso: 25.0,
        tipo: tipoArray[1],
        preEvolucao: 'Eevee',
        evolucao: 'Nenhuma',
        imgSrc: pkmImgDir + 'Flareon.png'
    },
    // Porygon
    {
        id: 137,
        nome: 'Porygon',
        altura: 0.8,
        peso: 36.5,
        tipo: tipoArray[0],
        preEvolucao: 'Nenhuma',
        evolucao: 'Nenhuma',
        imgSrc: pkmImgDir + 'Porygon.png'
    },
    // Omanyte
    {
        id: 138,
        nome: 'Omanyte',
        altura: 0.4,
        peso: 7.5,
        tipo: tipoArray[2] + ', ' + tipoArray[9],
        preEvolucao: 'Nenhuma',
        evolucao: 'Omastar',
        imgSrc: pkmImgDir + 'Omanyte.png'
    },
    // Omastar
    {
        id: 139,
        nome: 'Omastar',
        altura: 1.0,
        peso: 35.0,
        tipo: tipoArray[2] + ', ' + tipoArray[9],
        preEvolucao: 'Omanyte',
        evolucao: 'Nenhuma',
        imgSrc: pkmImgDir + 'Omastar.png'
    },
    // Kabuto
    {
        id: 140,
        nome: 'Kabuto',
        altura: 0.5,
        peso: 11.5,
        tipo: tipoArray[2] + ', ' + tipoArray[9],
        preEvolucao: 'Nenhuma',
        evolucao: 'Kabutops',
        imgSrc: pkmImgDir + 'Kabuto.png'
    },
    // Kabutops
    {
        id: 141,
        nome: 'Kabutops',
        altura: 1.3,
        peso: 40.5,
        tipo: tipoArray[2] + ', ' + tipoArray[9],
        preEvolucao: 'Kabuto',
        evolucao: 'Nenhuma',
        imgSrc: pkmImgDir + 'Kabutops.png'
    },
    // Aerodactyl
    {
        id: 142,
        nome: 'Aerodactyl',
        altura: 1.8,
        peso: 59.0,
        tipo: tipoArray[9] + ', ' + tipoArray[4],
        preEvolucao: 'Nenhuma',
        evolucao: 'Nenhuma',
        imgSrc: pkmImgDir + 'Aerodactyl.png'
    },
    // Snorlax
    {
        id: 143,
        nome: 'Snorlax',
        altura: 2.1,
        peso: 460.0,
        tipo: tipoArray[0],
        preEvolucao: 'Nenhuma',
        evolucao: 'Nenhuma',
        imgSrc: pkmImgDir + 'Snorlax.png'
    },
    // Articuno
    {
        id: 144,
        nome: 'Articuno',
        altura: 1.7,
        peso: 55.4,
        tipo: tipoArray[11] + ', ' + tipoArray[4],
        preEvolucao: 'Nenhuma',
        evolucao: 'Nenhuma',
        imgSrc: pkmImgDir + 'Articuno.png'
    },
    // Zapdos
    {
        id: 145,
        nome: 'Zapdos',
        altura: 1.6,
        peso: 52.6,
        tipo: tipoArray[7] + ', ' + tipoArray[4],
        preEvolucao: 'Nenhuma',
        evolucao: 'Nenhuma',
        imgSrc: pkmImgDir + 'Zapdos.png'
    },
    // Moltres
    {
        id: 146,
        nome: 'Moltres',
        altura: 2.0,
        peso: 60.0,
        tipo: tipoArray[1] + ', ' + tipoArray[4],
        preEvolucao: 'Nenhuma',
        evolucao: 'Nenhuma',
        imgSrc: pkmImgDir + 'Moltres.png'
    },
    // Dratini
    {
        id: 147,
        nome: 'Dratini',
        altura: 1.8,
        peso: 3.3,
        tipo: tipoArray[14],
        preEvolucao: 'Nenhuma',
        evolucao: 'Dragonair',
        imgSrc: pkmImgDir + 'Dratini.png'
    },
    // Dragonair
    {
        id: 148,
        nome: 'Dragonair',
        altura: 4.0,
        peso: 16.5,
        tipo: tipoArray[14],
        preEvolucao: 'Dratini',
        evolucao: 'Dragonite',
        imgSrc: pkmImgDir + 'Dragonair.png'
    },
    // Dragonite
    {
        id: 149,
        nome: 'Dragonite',
        altura: 2.2,
        peso: 210.0,
        tipo: tipoArray[14] + ', ' + tipoArray[4],
        preEvolucao: 'Dragonair',
        evolucao: 'Nenhuma',
        imgSrc: pkmImgDir + 'Dragonite.png'
    },
    // Mewtwo
    {
        id: 150,
        nome: 'Mewtwo',
        altura: 2.0,
        peso: 122.0,
        tipo: tipoArray[10],
        preEvolucao: 'Nenhuma',
        evolucao: 'Nenhuma',
        imgSrc: pkmImgDir + 'Mewtwo.png'
    },
    // Mew
    {
        id: 151,
        nome: 'Mew',
        altura: 0.4,
        peso: 4.0,
        tipo: tipoArray[10],
        preEvolucao: 'Nenhuma',
        evolucao: 'Nenhuma',
        imgSrc: pkmImgDir + 'Mew.png'
    }
];