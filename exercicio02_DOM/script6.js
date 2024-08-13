document.addEventListener('DOMContentLoaded', function(){
    
    document.getElementById('enviarBtn').addEventListener('click', selecionar);

    document.getElementById('btnAdicionar').addEventListener('click', adicionar);


});


function mensagemError(id, frase){
    var errorMessage = document.getElementById(id);
    errorMessage.innerHTML = frase
    errorMessage.classList.remove('oculto');
   
    setTimeout(function() {
        errorMessage.classList.add('oculto');
    }, 3000);
}


function selecionar(){
    var checkboxes = document.getElementsByName('redesSociais');
    var redesSelecionadas = document.getElementById('redesSelecionadas');

    checkboxes.forEach(function(checkbox){
        if(checkbox.checked){
            redesSelecionadas.innerHTML += checkbox.value + '<br>';
        }
        else {
            mensagemError('mensagemErro', 'Nenhuma rede social selecionada.');
        }
    })
}


function adicionar(){
    var nomeHastag = document.getElementById('nomeHastag').value.trim();
    const selectElement = document.getElementById('hastags');
    var teste = document.getElementById('teste');
    var newOption = document.createElement('option');
    newOption.text = nomeHastag;

    if(nomeHastag == ""){
        mensagemError('mensagemErro2', 'Campo vazio.');
    }
    else if (length.nomeHastag < 2){
        mensagemError('mensagemErro2', 'Hastag com menos de 2 caractere.');
    }
    
    else {
        selectElement.appendChild(newOption);
    } 
    
    teste.innerHTML = length.nomeHastag
}