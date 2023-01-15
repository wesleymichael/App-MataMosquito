//Declaração de variáveis globais
let height = 0;
let width = 0;
let heart = 1;
let timer = 15;
let timeLevel = 1500;


//Função para selecionar o nível e definir a dificuldade conforme escolha do usuário
function startGame(){
    let level = document.getElementById('select').value
    if(level === ''){
        alert('Selecione o nível!');
    }
    else{
        if(level === 'facil'){
            timeLevel = 1500;
        }
        else if(level === 'medio'){
            timeLevel = 1000;
        }
        else if(level === 'dificil'){
            timeLevel = 750;
        }
        window.location.href = "app.html?" + level;
    }
}

function criarMosquito(){
    document.querySelector('#timer span').innerHTML = timer;
    
    let level = window.location.search.replace('?','');
    if(level === 'facil'){
        timeLevel = 1500;
    }
    else if(level === 'medio'){
        timeLevel = 1000;
    }
    else if(level === 'dificil'){
        timeLevel = 750;
    }

    //Comando para criar um mosquito a cada 2 segundos. Adicionei numa variável para poder limpar quando o jogo acabar
    let criarMosquito = setInterval(function(){
        randomPosition();
    }, timeLevel);

    //Criação do cronômetro
    let cronometro = setInterval(function(){
        timer--;
        if (timer < 0){
            clearInterval(criarMosquito);
            clearInterval(cronometro);
            window.location.href = 'victory.html';
        }
        else{
            document.querySelector('#timer span').innerHTML = timer;
        }
    }, 1000);
}


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



