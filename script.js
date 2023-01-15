//Declaração de variáveis globais
let height = 0;
let width = 0;
let heart = 1;


//Função para ajustar o tamanho da tela de forma dinâmica
function adjustScreenSize(){
    height = window.innerHeight;
    width = window.innerWidth;
}
adjustScreenSize();


//Função para criar posição randônica do mosquito
function randomPosition(){

    //remover o mosquito copiado na tela anteriormente. OBS: se for removido com o click não entrará aqui
    if( document.querySelector('#mosquito') !== null ){
        document.querySelector('#mosquito').remove();

        if (heart > 3){
            //Parar jogo e ir para a página de game over quando perder as três vidas
            window.location.href = 'game_over.html'
        }
        else{
            document.querySelector('#v'+ heart).src = "img/coracao_vazio.png";   
            heart++;
        }
    }

    //console.log(height, width);
    let positionX = Math.floor(Math.random() * width) - 90;
    let positionY = Math.floor(Math.random() * height) - 90;

    positionX = positionX < 0 ? 0 : positionX;
    positionY = positionY < 0 ? 0 : positionY;

    let mosquito = document.createElement('img');
    
    mosquito.src = 'img/mosquito.png';
    mosquito.className = randomSize() + ' '+ mirror(); 
    mosquito.style.left = positionX + 'px';
    mosquito.style.top = positionY + 'px';
    mosquito.style.position = 'absolute';
    mosquito.id = 'mosquito';

    //Quando clicar, remover o mosquito e não perder uma vida
    mosquito.onclick = function(){
        this.remove()
    }
    
    document.body.appendChild(mosquito);
}


//Função para variar tamanho do mosquito, definido em style.css
function randomSize(){
    let classe = Math.floor(Math.random() * 3);
    switch (classe){
        case 0: 
            return 'mosquito1';

        case 1:
            return 'mosquito2';

        case 2:
            return 'mosquito3';
    }
}



//Função para espelhar a imagem aleatoriamente
function mirror(){
    let classe = Math.floor(Math.random() * 2);
    switch (classe){
        case 0: 
            return '';

        case 1:
            return 'mirror';
    }   
}


/***Falta:  ***/
//adicionar o tempoe link para página de vitória
//




