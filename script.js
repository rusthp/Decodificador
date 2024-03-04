var bottoncriptar = document.querySelector(".btncriptografar");
var bottonDesencriptar = document.querySelector(".btndescriptografar");
var conteudo= document.querySelector(".conteudo");
var paragrafo = document.querySelector(".conteudo-paragrafo");
var resultado = document.querySelector(".conteudo-resultado");

bottoncriptar.onclick = criptografar;
bottonDesencriptar.onclick = desencriptografar;

function criptografar(){
    ocultarAdelante();
    var caixadetexto = recuperarTexto()
    resultado.textContent = criptografartexto(caixadetexto);
}

function desencriptografar(){
    ocultarAdelante();
    var caixadetexto = recuperarTexto()
    resultado.textContent = desencriptarTexto(caixadetexto);
}

function recuperarTexto(){
    var caixadetexto = document.querySelector(".caixadetexto")
    return caixadetexto.value
}

function ocultarAdelante(){
    conteudo.classList.add("ocultar");
    paragrafo.classList.add("ocultar");
}

function criptografartexto(mensagem){
    var texto = mensagem;
    var textoFinal = "";

    for(var i = 0; i < texto.length; i++){
        if(texto[i] == "a"){
            textoFinal = textoFinal + "ai"
        }
        else if(texto[i] == "e"){
            textoFinal = textoFinal + "enter"
        }
        else if(texto[i] == "i"){
            textoFinal = textoFinal + "imes"
        }
        else if(texto[i] == "o"){
            textoFinal = textoFinal + "ober"
        }
        else if(texto[i] == "u"){
            textoFinal = textoFinal + "ufat"
        }
        else{
            textoFinal = textoFinal + texto[i]
        }
    }
    return textoFinal;

}

function desencriptarTexto(mensagem){
    var texto = mensagem;
    var textoFinal = "";

    for(var i = 0; i < texto.length; i++){
        if(texto[i] == "a"){
            textoFinal = textoFinal + "a"
            i = i+1;
        }
        else if(texto[i] == "e"){
            textoFinal = textoFinal + "e"
            i = i+4;
        }
        else if(texto[i] == "i"){
            textoFinal = textoFinal + "i"
            i = i+3;
        }
        else if(texto[i] == "o"){
            textoFinal = textoFinal + "o"
            i = i+3;
        }
        
        else if(texto[i] == "u"){
            textoFinal = textoFinal + "u"
            i = i+3;
        }
        else{
            textoFinal = textoFinal + texto[i];
        }
        
    }

    return textoFinal;

}

const btnCopiar = document.querySelector(".btn-copiar"); 
    btnCopiar.addEventListener("click", copiar = () => {
    var conteudo = document.querySelector(".texto-resultado").textContent;
    navegador.clipboard.writeText(conteudo);
    console.log("Toma água"); 
});