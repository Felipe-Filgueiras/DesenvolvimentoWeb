const ingrid = atletas[0];

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
