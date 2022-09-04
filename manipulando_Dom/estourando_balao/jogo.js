function iniciaJogo (){
    
    let url = window.location.search;
    let nivel_jogo = url.replace("?", "");

    let tempo_segundos = 0;

    //1 fácil = 120 segundos
    if(nivel_jogo == 1){
        tempo_segundos =120
    }
    //2 normal = 60 segundos
    if(nivel_jogo == 2){
        tempo_segundos = 60
    }
    //3 difícil = 30 segundos
    if(nivel_jogo == 3){
        tempo_segundos = 30
    }

    //inserindo segundos no span

    document.getElementById("cronometro").innerHTML = tempo_segundos;

    //inserindo os balões

    let qtde_baloes= 10;

    cria_baloes(qtde_baloes);

    //impressão da quantidade de baloes inteiros
    document.getElementById('baloes_inteiros').innerHTML = qtde_baloes;
    document.getElementById('baloes_estourados').innerHTML = 0;
    
}

function cria_baloes(qtde_baloes){

    for(let i = 1; i <= qtde_baloes; i++ ){

        let balao =  document.createElement("img");
        balao.src = 'imagens/balao_azul_pequeno.png'
        balao.style.margin = "10px";

        document.getElementById('cenario').appendChild(balao);
    }

}