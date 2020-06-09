
//Declarando as duas variaveis...
const cvs = document.getElementById("pong");
const ctx = cvs.getContext("2d");
/*criando as funções de desenho*/

//criando a função de desenho do Tabuleiro(retangulo)
function desenharRetangulo(x, y, w, h, color){
    ctx.fillStyle = color;
    ctx.fillRect(x,y,w,h);

}

//criando a função de desenho de um circulo(A bola)
function circulo(x,y,r,color){
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(x,y,r,0,Math.PI*2,false);
    ctx.closePath();
    ctx.fill();
}
//criando a função de desenho do placar...
function desenhandoTextos(text,x,y,color){
    ctx.fillStyle= color;
    ctx.font = "fantasy 45px";
    ctx.fillText(text,x,y);
}

//criando a função de desenho do placar...
function desenhoRede(){
    for(let i=0;i<= cvs.height;i+=15){
        desenharRetangulo(rede.x,rede.y + 1,rede.width,rede.height,rede.color);
    }
}


/*Criando o objeto dos jogadores*/
const jogador ={
   
}

/*Criando o objeto do computador*/
const computador ={
   
}

//Criando o objeto da rede
const rede ={
   
}

//criando o objeto da bola
const bola ={
   
}















 








/*fazendo o menu funcionar*/
function modofacil(){
    
    desenhandoTextos("Primeiro Nivel",0,10,"black");    
    
}

function modoNormal(){  
    desenhandoTextos("Segundo Nivel",0,10,"black");
    
}

function modoDificil(){  
    desenhandoTextos("terceiro Nivel",0,10,"black");
}

