const url = "https://botafogo-atletas.mange.li";

const numero_jogador = 36;

const pega_json = async (caminho) => {
    const resposta = await fetch(caminho);
    const dados = await resposta.json();
    return dados;
}

const preenche = (atleta) => {
    const espaco_nome = document.getElementById('nome');
    const imagem = document.querySelector('div#container > img');
    const espaco_descricao = document.querySelector('div#container > p');
    const container = document.getElementById('container');
    container.style.width = '15rem';

    espaco_nome.innerText = atleta.nome;
    imagem.src = atleta.imagem;
    espaco_descricao.innerText = atleta.descricao;
}

(async () => {
    const atleta = await pega_json(`${url}/${numero_jogador}`);
    preenche(atleta);
})();

console.log("Síncrono");

/* const espera = async (entrada) => {
    const texto = await entrada.json();
    console.log(texto);
}

promessa.then(
    (resposta) => espera (resposta));
console.log("síncrono") */