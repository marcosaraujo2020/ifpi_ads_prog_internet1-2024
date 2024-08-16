document.addEventListener('DOMContentLoaded', function(){
    
    let ativosDisponiveis = document.getElementById('ativosDisponiveis');
    let carteiraInvestimentos = document.getElementById('carteiraInvestimentos');
    let btnDireita = document.getElementById('moverParaDireitaBtn');
    let btnEsquerda = document.getElementById('moverParaEsquerdaBtn');
    let collectionDisponiveis = ativosDisponiveis.selectedOptions;
    let collectionInvestimentos = carteiraInvestimentos.selectedOptions;

   
    btnDireita.addEventListener('click', function(){
        moverDireita(ativosDisponiveis, carteiraInvestimentos, collectionDisponiveis,btnDireita,btnEsquerda)
    });
    
    btnEsquerda.addEventListener('click', function(){
        moverEsquerda(ativosDisponiveis, carteiraInvestimentos,collectionInvestimentos,btnDireita,btnEsquerda)
    });

});


function moverDireita(ativosDisponiveis, carteiraInvestimentos, collectionDisponiveis, btnDireita,btnEsquerda){      
   
    if(collectionDisponiveis.length == 0){
        alert("Nenhum disponível selecionado")
    }
    else{
        
        carteiraInvestimentos.appendChild(ativosDisponiveis.removeChild(collectionDisponiveis[0]))
    }
    
    if(ativosDisponiveis.childElementCount == 0){
        btnDireita.disabled = true;
    }
    else if(carteiraInvestimentos.childElementCount != 0){
        btnEsquerda.disabled=false;
    } 
}


function moverEsquerda(ativosDisponiveis, carteiraInvestimentos,collectionInvestimentos,btnDireita, btnEsquerda){
    
     if(collectionInvestimentos.length == 0){
        alert("Nenhum investimento selecionado")
    }
    else{
        ativosDisponiveis.appendChild(carteiraInvestimentos.removeChild(collectionInvestimentos[0]))
    }
    if(carteiraInvestimentos.childElementCount == 0){
        btnEsquerda.disabled = true;
    }
    if(ativosDisponiveis.childElementCount != 0){
        btnDireita.disabled=false;
    }
}