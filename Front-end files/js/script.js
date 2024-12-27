/*Container de exibição dos Pokemon*/
const pokemonGrid = $('#pkm_grid');

//Função para preencher o GRID
function preencherGridPkm(filtro = '') {
    let dataToAppend = '';
    for(let i = 0; i < pokemonArray.length; i++) {
        if(filtro === '' || pokemonArray[i].nome.toLowerCase().trim().includes(filtro)) {
            dataToAppend +=`
            <div class="pkm_block">
                <div class="pkm_img_div">
                    <img src="${pokemonArray[i].imgSrc}">
                </div>
                <div class="pkm_text_div">
                    <p class="txt_p bold">ID: <span class="txt_pp normal">${pokemonArray[i].id}</span></p>
                    <p class="txt_p bold">Nome: <span class="txt_pp normal">${pokemonArray[i].nome}</span></p>
                    <p class="txt_p bold">Altura: <span class="txt_pp normal">${pokemonArray[i].altura}m</span></p>
                    <p class="txt_p bold">Peso: <span class="txt_pp normal">${pokemonArray[i].peso}kg</span></p>
                    <p class="txt_p bold">Tipo: <span class="txt_pp normal">${pokemonArray[i].tipo}</span></p>
                    <p class="txt_p bold">Pre-Evolução: <span class="txt_pp normal">${pokemonArray[i].preEvolucao}</span></p>
                    <p class="txt_p bold">Evolução: <span class="txt_pp normal">${pokemonArray[i].evolucao}</span></p>
                </div>
            </div>`;
        }    
    }
    pokemonGrid.html(dataToAppend);
}

$(document).ready(function() {

    //Preenchendo GRID ao carregar a página
    preencherGridPkm();

    //Campo para filtrar Pokemon por nome
    const fieldPkmSearch = $('#field_search');
    
    fieldPkmSearch.keyup(function() {
        //Texto dentro do campo
        const nomeOnField = $(this).val();

        if(nomeOnField.length > 1) {
            preencherGridPkm(nomeOnField.toLowerCase().trim());
        }
        else if(pokemonGrid.find('.pkm_block').length < pokemonArray.length){
            preencherGridPkm();
        }
    });
});