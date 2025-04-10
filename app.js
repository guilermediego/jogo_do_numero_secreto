let lista_d_numuros_sorteados = [];
let numero_limite = 10;// o jogo ta funçiomando.
let numero_Secreto = gerar_Numero_Ale();
let tentativa_s = 1 ;

function mensagem_incial(){
exibri_Texto_Tela ('h1','jogo do numero secreto');
exibri_Texto_Tela('p','Escola um numero entre 1 a 10 ');
}

mensagem_incial ();

function verificarChute() {
    let chute = document.querySelector ('input').value;
  
    
   if (chute == numero_Secreto) {
    exibri_Texto_Tela('h1', 'Vc Acretol!');
    let palavra_tentativa = tentativa_s > 1 ? 'tentativas' : 'tentativa';
    let mensagem_tentativa_s = `Parabéns vc comsiguiu acretar o numero secrerto com ${tentativa_s} ${palavra_tentativa}! `;
    exibri_Texto_Tela ('p', mensagem_tentativa_s);
document.getElementById('reiniciar').removeAttribute('disabled');
   } else {
        if (chute > numero_Secreto) {
        exibri_Texto_Tela('p','O numero secreto é nemor');
   }else {
        exibri_Texto_Tela('p','O numero secreto é maios ');
        }
        tentativa_s ++;
        limpar_campo();
    }
}
function gerar_Numero_Ale (){
let numeros_escolidos =  parseInt(Math.random () *numero_limite + 1);
let quantidade_de_elementos_na_lissta = lista_d_numuros_sorteados.length;

if (quantidade_de_elementos_na_lissta == numero_limite ) {lista_d_numuros_sorteados = []
}

if (lista_d_numuros_sorteados.includes(numeros_escolidos)){
    return gerar_Numero_Ale();
}else {
    lista_d_numuros_sorteados.push(numeros_escolidos);
    console.log(lista_d_numuros_sorteados);
    return numeros_escolidos;
}
}
function limpar_campo(){
    chute = document.querySelector ('input');
    chute.value = " ";
}
function reiniciarJogo(){
    numero_Secreto = gerar_Numero_Ale ();
    limpar_campo ();
    tentativa_s = 1;  
mensagem_incial () 
document.getElementById ('reiniciar').setAttribute ('disabled',true);

}


