function obterPokemon () {
  var pokemon = document.querySelector("#nome").value;
  var url = "https://pokeapi.co/api/v2/pokemon/" + pokemon.toLowerCase();
  
  renderizarCarregando();
  var requisicao = axios.get(url);
  requisicao.catch(quandoErro).then(quandoChegarOPokemon);
}

function quandoChegarOPokemon(response) {
  var imagemSrc = response.data.sprites.front_default;

  renderizarImagem(imagemSrc);
}

function renderizarCarregando() {
  var resultado = document.querySelector(".resultado");
  resultado.innerHTML = "Carregando pokémon...";
}

function renderizarImagem(imagemSrc) {
  var imagem = document.createElement('img');
  imagem.setAttribute('src', imagemSrc);

  var resultado = document.querySelector(".resultado");
  resultado.innerHTML = "";
  resultado.appendChild(imagem);
}

function quandoErro() {
  renderizarImagem('img/404.png');
}