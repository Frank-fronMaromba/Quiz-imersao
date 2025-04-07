// PARTE 1: Lista de perguntas e respostas
perguntas = [
    {
      pergunta:
        "Qual é o formato de dados amplamente utilizado em programação que foi ensinado na última aula?",
      respostas: [
        { opcao: "JSON", correto: true },
        { opcao: "XML", correto: false },
        { opcao: "HTML", correto: false }
      ]
    },
    {
      pergunta: "Qual é a função principal do HTML em um projeto web?",
      respostas: [
        { opcao: "Estilizar a página", correto: false },
        { opcao: "Criar interatividade", correto: false },
        { opcao: "Estruturar o conteúdo", correto: true }
      ]
    },
    {
      pergunta: "O que o CSS é utilizado para fazer em um projeto web?",
      respostas: [
        { opcao: "Criar a lógica do programa", correto: false },
        { opcao: "Armazenar dados", correto: false },
        { opcao: "Estilizar a página", correto: true }
      ]
    },
    {
      pergunta:
        "No JavaScript, qual palavra-chave é usada para declarar uma variável que não pode ser reatribuída?",
      respostas: [
        { opcao: "Let", correto: false },
        { opcao: "Const", correto: true },
        { opcao: "Var", correto: false }
      ]
    },
    {
      pergunta:
        "Qual é a finalidade de usar a função querySelector no JavaScript?",
      respostas: [
        { opcao: "Criar novos elementos HTML", correto: false },
        { opcao: "Definir variáveis", correto: false },
        { opcao: "Selecionar elementos do DOM", correto: true }
      ]
    },
    {
      pergunta: "O que é uma regra de negócio em programação?",
      respostas: [
        {
          opcao:
            "Uma definição que determina como os dados devem ser manipulados",
          correto: true
        },
        { opcao: "Um tipo de dado", correto: false },
        { opcao: "Um erro que deve ser corrigido", correto: false }
      ]
    }
  ];
  
  // PARTE 2: Pegando os elementos do HTML

  const perguntaElemento = document.querySelector(".pergunta");
  const respostasElemento = document.querySelector(".respostas");
  const progressoElemento = document.querySelector(".progresso");
  const textoFinal = document.querySelector(".fim span");
  const conteudo = document.querySelector(".conteudo");
  const conteudoFinal = document.querySelector(".fim");
  
  // PARTE 3: Variáveis para controle do jogo
  let indiceAtual = 0; // Índice da pergunta atual
  let acertos = 0; // Contador de acertos
  
  // PARTE 4: Função para carregar uma nova pergunta
    // Essa função é responsável por exibir a pergunta atual e suas respostas
  function carregarPergunta() {
    progressoElemento.innerHTML = `${indiceAtual + 1}/${perguntas.length}`; // Atualiza o progresso
    const perguntaAtual = perguntas[indiceAtual]; // Pega a pergunta atual
    perguntaElemento.innerHTML = perguntaAtual.pergunta; // Exibe a pergunta
  
    respostasElemento.innerHTML = ""; // Limpa as respostas anteriores
  
    // Percorre todas as respostas da pergunta atual
    for (let i = 0; i < perguntaAtual.respostas.length; i++) {
      // Pega a resposta atual com base no índice 'i'
      const resposta = perguntaAtual.respostas[i];
      // Cria um novo elemento 'button' (botão)
      const botao = document.createElement("button");
      // Adiciona a classe CSS 'botao-resposta' ao botão para estilizar
      botao.classList.add("botao-resposta");
      // Define o texto do botão com a opção de resposta (resposta.opcao)
      botao.innerText = resposta.opcao;
      // Adiciona um evento de clique no botão
      botao.onclick = function () {
        // Se a resposta for correta (resposta.correto === true), incrementa o número de acertos
        if (resposta.correto) {
          acertos++; // Incrementa o contador de acertos
        }
  
        // Avança para a próxima pergunta
        indiceAtual++;
  
        // Se ainda houver perguntas, carrega a próxima pergunta
        if (indiceAtual < perguntas.length) {
          carregarPergunta(); // Carrega a próxima pergunta
        } else {
          // Se não houver mais perguntas, finaliza o jogo
          finalizarJogo();
        }
      };
  
      // Adiciona o botão de resposta à tela, dentro do elemento 'respostasElemento'
      respostasElemento.appendChild(botao);
    }
  }
  
  
  // PARTE 5: Função para mostrar a tela final
  function finalizarJogo() {
    textoFinal.innerHTML = `Você acertou ${acertos} de ${perguntas.length}`; // Exibe o resultado
    conteudo.style.display = "none"; // Esconde as perguntas
    conteudoFinal.style.display = "flex"; // Mostra a tela final
  }
  
  // PARTE 6: Iniciando o jogo pela primeira vez
  carregarPergunta();
