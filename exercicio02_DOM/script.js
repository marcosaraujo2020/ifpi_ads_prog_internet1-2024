document.addEventListener('DOMContentLoaded', function(){

    document.getElementById('btnErro').addEventListener('click', function(){
        mensagemError('mensagemErro', 'Exibindo erro.')
    }); 
    
    document.getElementById('botaoExibir').addEventListener('click', exibirConteudo);


    var numeroInteracoes = document.getElementById('numeroInteracoes');
    var numeroVisualizacoes = document.getElementById('numeroVisualizacoes');

    document.getElementById('calcularTaxa').addEventListener('click', function(){
        var resultadoTaxa = document.getElementById('resultadoTaxa');
        var resultadoFinal = (parseFloat(numeroInteracoes.value/numeroVisualizacoes.value)*100).toFixed(2);

        if(isNaN(numeroInteracoes.value.trim() && numeroVisualizacoes.value.trim())){
            mensagemError('mensagemErro', 'Valor inválido, digite uma número')
        }
        else{
            resultadoTaxa.innerHTML = "Taxa de Engajamento: " + "<strong>" + resultadoFinal + "</strong>" + " %";
        }

    });

    document.getElementById('btnCarregar').addEventListener('click', carregarImagem);
    document.querySelector('#logos').addEventListener('change', selecionarImagem);


});

function exibirConteudo(){
    var conteudo = document.getElementById('caixaDeTexto').value.trim();
    //conteudo.trim();
     
    if(conteudo==""){
        mensagemError('mensagemErro', 'O campo deve ser preenchido.')
    }
    else{
        document.getElementById('conteudo').innerHTML += conteudo + "<br>"; 
        mensagemConfirmacao('mensagemConfirmacao', 'Inserido com sucesso!!') 
    }
     
}

function mensagemError(id, frase){
    var errorMessage = document.getElementById(id);
    errorMessage.innerHTML = frase
    errorMessage.classList.remove('oculto');
   
    setTimeout(function() {
        errorMessage.classList.add('oculto');
    }, 3000);
}


function mensagemConfirmacao(id, frase){
    var confirmaMessage = document.getElementById(id);
    confirmaMessage.innerHTML = frase;
    confirmaMessage.classList.remove('oculto');

    setTimeout(function() {
        confirmaMessage.classList.add('oculto');
    }, 3000);
}


function carregarImagem(){
    var resultadoImagem = document.getElementById("resultadoImagem");
    var arquivoSelecionado = uploadImagem.files[0];
    let img = document.createElement("img");
    img.src = URL.createObjectURL(arquivoSelecionado);
    resultadoImagem.appendChild(img);
}


function selecionarImagem(){
    const selectElement = document.getElementById("logos").value;
    const resultado = document.getElementById("resultado");
    let img = document.createElement("img");
    img.src = selectElement;
    
    resultado.appendChild(img)
}



function alertar(){
    alert("olá");
}
