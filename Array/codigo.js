const body = document.body;
const div_container = document.createElement('div');
div_container.id = 'container';
body.appendChild(div_container);

const cria_cartao = (atleta) => {
    div_container.style.width = '20rem';
    div_container.style.backgroundColor = 'grey';
    div_container.style.textAlign = 'center';
    const container_atleta = document.createElement('div');
    const titulo = document.createElement('h3');
    titulo.innerHTML = atleta.nome;
    const imagem = document.createElement('img');
    imagem.src = atleta.imagem;
    imagem.alt = "Foto da jogadora " + atleta.nome;
    const descricao = document.createElement('p');
    descricao.innerHTML = atleta.descricao;


    const x = (window.innerWidth - div_container.offsetWidth) / 2;

    div_container.style.marginLeft = x + 'px';

    container_atleta.appendChild(titulo);
    container_atleta.appendChild(imagem);
    container_atleta.appendChild(descricao);

    div_container.appendChild(container_atleta);

}
/*
let i = 0;
while (i < atletas.length) {
    cria_cartao(atletas[i]);
    i ++;
  }

for(let indice = 0; indice < atletas.length; indice++){
    cria_cartao(atletas[indice]);
}

for(let indice = (atletas.length)-1; indice >= 0; indice--){
    cria_cartao(atletas[indice]);
}
*/

for(const atleta of atletas){
    cria_cartao(atleta);
}


//atletas.forEach((atleta) => {cria_cartao(atleta)});
/*
window.onload = () => {
    const espaco_nome = document.getElementById('nome');
    const imagem = document.querySelector('div#container > img');
    const espaco_descricao = document.querySelector('div#container > p');
    const container = document.getElementById('container');
    container.style.width = '15rem'

    const preenche = (atleta) => {
        espaco_nome.innerText = atleta.nome;
        imagem.src = atleta.imagem;
        espaco_descricao.innerText = atleta.descricao;
    }

    preenche(atletas[4]);

};
*/
