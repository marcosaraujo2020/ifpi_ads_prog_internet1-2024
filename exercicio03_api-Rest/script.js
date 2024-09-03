
document.addEventListener('DOMContentLoaded', function() {

    function gerarNumeroAleatorio(min, max) {  
        return Math.floor(Math.random() * (max - min + 1)) + min;
    } 
    
    const fonte_Ibge = document.getElementById('fonte_Ibge');
    const fonte_NyTimes = document.getElementById('fonte_NyTimes');
    const fonte_Guardian = document.getElementById('fonte_guardian');
    fonte_Ibge.target = "_blank";
    fonte_NyTimes.target = "_blank";
    fonte_Guardian.target = "_blank";
    
 
    // API de Notícias da NyTimes
    document.getElementById('obter-noticia-nytimes').addEventListener('click', function() {

        const key = "api-key"
        const url = `https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${key}`;
        
        fetch(url)
            .then(response => response.json())
            .then(data => {
                fonte_NyTimes.textContent = "Fonte da notícia";
                const numeroAleatorio = gerarNumeroAleatorio(1, data.num_results);
                const img = document.getElementById('imagem-noticia-nytimes');

                img.src = data.results[numeroAleatorio].multimedia[0].url;
                img.style.display = 'block';
                document.getElementById('descricao-noticia-nytimes').textContent = data.results[numeroAleatorio].title
                document.getElementById('data-publicacao-nytimes').textContent = data.results[numeroAleatorio].published_date
                document.getElementById('abstract').textContent = data.results[numeroAleatorio].abstract
                fonte_NyTimes.href =  data.results[numeroAleatorio].url;
                
            })
            .catch(error => console.error('Erro:', error));
    });


   // API de Notícias da The Guardian
   document.getElementById('obter-noticia-guardian').addEventListener('click', function() {

        const key = "api-key"
        const url = `https://content.guardianapis.com/search?api-key=${key}`;
        
        fetch(url)
            .then(response => response.json())
            .then(data => {
                fonte_Guardian.textContent = "Fonte da notícia";
                const numeroAleatorio = gerarNumeroAleatorio(1, data.response.pageSize);
             
                document.getElementById('descricao-noticia-guardian').textContent = data.response.results[numeroAleatorio].webTitle
                document.getElementById('data-publicacao-guardian').textContent = data.response.results[numeroAleatorio].webPublicationDate	
                fonte_Guardian.href =  data.response.results[numeroAleatorio].webUrl;
            })
            .catch(error => console.error('Erro:', error));
    });
    

    // API de Notícias do IBGE
    document.getElementById('obter-noticia-ibge').addEventListener('click', function() {
         
        fetch('https://servicodados.ibge.gov.br/api/v3/noticias/?tipo=noticia')
            .then(response => response.json())
            .then(data => {  
                fonte_Ibge.textContent = "Fonte da notícia";
                const numeroAleatorio = gerarNumeroAleatorio(1, data.showingTo);           

                document.getElementById('descricao-noticia').textContent = data.items[numeroAleatorio].titulo;
                document.getElementById('introducao').textContent = data.items[numeroAleatorio].introducao;
                document.getElementById('data-publicacao').textContent = "Data da publicação: " + data.items[numeroAleatorio].data_publicacao;
                fonte_Ibge.href = data.items[numeroAleatorio].link;    
            })
            .catch(error => console.error('Erro:', error));
    });


});
