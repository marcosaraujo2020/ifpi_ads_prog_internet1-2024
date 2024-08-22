document.addEventListener('DOMContentLoaded', function(){
    
    var descricaoTarefa = document.getElementById('descricaoTarefa');
    var adicionarBtn = document.getElementById('adicionarBtn');
    var teste = document.getElementById('teste')
    const listaTarefas = new Array;
   // var tabelaTarefas = document.getElementById('tabelaTarefas');
   
    adicionarBtn.addEventListener('click', function(){
        var resultado = criarTarefa(descricaoTarefa, listaTarefas);
        if(resultado.length>0){
            teste.innerHTML = resultado[2].id + " : " + resultado[2].descricao + "<br>" + "Tabanho da lista: " + resultado.length
        }
    });
    
    
    var n = 1;
    function gerarId(){
        return n++
    }
 

    function criarTarefa(descricaoTarefa, listaTarefas){
        
        if(descricaoTarefa.value == ""){
            alert('Preencha o campo descrição');
        }else{
            var tarefa = new Object();
            var dataAtual = new Date;
           
            tarefa.id = gerarId();
            tarefa.descricao = descricaoTarefa.value;
            tarefa.dataInicio = dataAtual
            tarefa.dataConclusao = "";
            
            listaTarefas.push(tarefa);

            document.getElementById('descricaoTarefa').value = "";

            //return listaTarefas;
            adicionarLinha(listaTarefas);
        }
        
       
    }

    function adicionarLinha(listaTarefas){
        
        var linha = document.getElementById('data-id');
        var novaLinha = document.createElement('tr');
        
        var concluirBtn = document.createElement('button');
        concluirBtn.id = 'concluirBtn';
        concluirBtn.textContent = 'Concluir';
        
        var excluirBtn = document.createElement('button');
        excluirBtn.id = 'excluirBtn';
        excluirBtn.textContent = 'Excluir';

        var cell1 = document.createElement('td');
        var cell2 = document.createElement('td');
        var cell3 = document.createElement('td');
        var cell4 = document.createElement('td');
        var cell5 = document.createElement('td');

    
        listaTarefas.forEach(element => {
            cell1.innerText = element.id
            cell2.innerText = element.descricao
            cell3.innerText = element.dataInicio
            cell4.innerText = element.dataConclusao
            cell5.appendChild(concluirBtn);
            cell5.appendChild(excluirBtn); 
        });

        novaLinha.append(cell1);
        novaLinha.append(cell2);
        novaLinha.append(cell3);
        novaLinha.append(cell4);
        novaLinha.append(cell5);

        linha.append(novaLinha)
        
        
    
    }

});



