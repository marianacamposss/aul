async function buscarDados(id) {
    try {
        const url = "https://charadas-five.vercel.app/charadas/id/"+id;
      const resposta = await fetch(url);
      //impressao de todos os dados da resposta para requisição
      console.log(resposta);
      //converter a resposta em formato json
      const dados = await resposta.json();
      console.log(dados);
    } catch (erro) {
      console.error("Erro ao buscar dados:", erro);
    }
  }
  
  buscarDados(5);