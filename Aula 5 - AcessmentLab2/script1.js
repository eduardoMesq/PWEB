//Obter o elemento botão
const botao = document.getElementById("botao");
const h1 = document.querySelector("h1");
const campoTexto = document.getElementById("campoTexto");
const lista = document.getElementById("lista");

//Adicionar um evento handler ao botao
botao.addEventListener("click", function() {
    h1.textContent = "Olá Mundo!";                 //Manipular o elemento h1
});

//Adicionar um evento handler ao botao que muda a cor de texto
botao.addEventListener("click", function(){
    h1.textContent = "Olá Mundo!";
    h1.style.backgroundColor = "red";         
});

//Adicionar um evento handler que escreve ao dar Enter
campoTexto.addEventListener("keydown", function(event){
    if(event.key === "Enter"){
        console.log("Valor do Campo:", campoTexto.value);
    }
});

//Adicionar um evento handler que remove ao clicar no elemento da lista
lista.addEventListener("click", function(event){
    if(event.target.tagName === "LI"){              //diz qual o elemento a clicar
        event.target.remove();                      //remove elemento
    }
});