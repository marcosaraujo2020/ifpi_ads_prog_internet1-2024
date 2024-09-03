document.addEventListener('DOMContentLoaded', function(){
    
    var descricaoTarefa = document.getElementById('descricaoTarefa');
    var adicionarBtn = document.getElementById('adicionarBtn');
    var teste = document.getElementById('teste')
    let listaTarefas = new Array;
    var tabelaTarefas = document.getElementById('tabelaTarefas');
    var conteudo = document.getElementById('conteudo');
    var tarefa = new Object();
    var dataAtual = new Date;
    
    var n = 1;  
    function gerarId(){
        return n++
    }
    
    adicionarBtn.addEventListener('click', function(){
        criarTarefa(descricaoTarefa);   
    });
    
  
 
    function criarTarefa(descricaoTarefa){
        
        if(descricaoTarefa.value == ""){
            alert('Preencha o campo descrição');
        }else{
            
            tarefa.id = gerarId();
            tarefa.descricao = descricaoTarefa.value;
            tarefa.dataInicio = dataAtual
            tarefa.dataConclusao = "";
            
            listaTarefas.push(tarefa);

            document.getElementById('descricaoTarefa').value = "";

            adicionarLinha(listaTarefas);
        }
    };

    function adicionarLinha(listaTarefas){
        
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
            novaLinha.setAttribute('data-id', element.id);
            concluirBtn.addEventListener('click', concluirTarefa);
            excluirBtn.addEventListener('click', excluirTarefa); 
        });

        novaLinha.append(cell1,cell2,cell3,cell4,cell5);
        conteudo.append(novaLinha)
        
    };

    function concluirTarefa(){
       alert("Tarefa concluída!!")
    };

    function excluirTarefa(){
       const lin = excluirBtn.parentNode.parentNode;
       lin.remove()
    };

});



