const cvs = document.getElementById('canvas');
const ctx = cvs.getContext('2d');

let fps = 60;
let loop;
let personagem;


function desenhandoQuadrado(nome,cenX,CenY,larX,larY,color){
    
    ctx.fillStyle = color;
    ctx.fillRect(cenX,CenY,larX,larY,color);
    console.log("o " + nome+" foi com a cor:",color);
    return true
}


//Criando a função que desenha as coisas no canvas...
function desenho(){
   //desenho do chão
   let chao = desenhandoQuadrado("Chão",0,500,600,30,"black");
    //desenho do personagem
   personagem = desenhandoQuadrado("Pesonagem",200,450,50,50,"blue");
}

function atualizando(){
   //Atualizando as coisas... 
   
    
}


//Tecla precionada
var teclaPrecionadaFunc = document.onkeydown = function(event){
    var tecla_Precionada = String.fromCharCode(event.keyCode);
    var key_code = event.keyCode;
    var status = console.log("A tela precionada foi: ",tecla_Precionada);
    var ativado = true;
    console.log(andando);    
    var teste=0;
if(andando == true ){

    
}
}


//soltar tecla
var teclaSoltaFunc = document.onkeyup = function(event){
    var tecla_Precionada = String.fromCharCode(event.keyCode);
    var status = console.log("A tela solta foi: ",tecla_Precionada);
}


function renderizando(){
    //Codigo para renderizar...
}  


function game(){
   
  
}



