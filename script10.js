document.addEventListener('DOMContentLoaded', function(){
    
    document.getElementById('moverParaDireitaBtn').addEventListener('click', moverDireita);
    document.getElementById('moverParaEsquerdaBtn').addEventListener('click', moverEsquerda);

});


function moverDireita(){    
    let ativosDisponiveis = document.getElementById('ativosDisponiveis');
    let collectionDisponiveis = ativosDisponiveis.selectedOptions;
    let carteiraInvestimentos = document.getElementById('carteiraInvestimentos');
   
    if(collectionDisponiveis.length == 0){
        alert("Nenhum disponível selecionado")
          
    }
    else{
        let novo = ativosDisponiveis.removeChild(collectionDisponiveis[0])
        carteiraInvestimentos.appendChild(novo)
    }
}


function moverEsquerda(){
    let collectionInvestimentos = carteiraInvestimentos.selectedOptions;
    
    if(collectionInvestimentos.length == 0){
        alert("Nenhum investimento selecionado")
    }
    else{
        let novo = carteiraInvestimentos.removeChild(collectionInvestimentos[0])
        ativosDisponiveis.appendChild(novo)
    }
}