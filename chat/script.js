// Dados dos pacotes
const pacotes = {
    pacote1: {
      nome: "Gramado - RS",
      descricao: "Pacote para 4 dias com transporte e hospedagem inclusos.",
      detalhes: "Inclui transporte ida e volta, hospedagem em hotel 3 estrelas, ingressos para atrações locais e café da manhã."
    },
    pacote2: {
      nome: "Fernando de Noronha - PE",
      descricao: "Pacote para 5 dias com mergulho e passeios inclusos.",
      detalhes: "Inclui passagens aéreas, hospedagem em pousada, passeios de barco, mergulho e alimentação."
    }
  };
  
  // Dados dos pontos turísticos
  const pontosTuristicos = {
    'cristo-redentor': {
      nome: "Cristo Redentor - RJ",
      descricao: "Estátua de 38 metros localizada no topo do Morro do Corcovado.",
      detalhes: "Uma das Sete Maravilhas do Mundo Moderno, símbolo do Brasil e cartão postal do Rio de Janeiro."
    },
    'cataratas-iguacu': {
      nome: "Cataratas do Iguaçu - PR",
      descricao: "Conjunto de 275 quedas d'água na fronteira com a Argentina.",
      detalhes: "Patrimônio Natural da Humanidade, com trilhas, passarelas e passeios de barco emocionantes."
    },
    'pelourinho': {
      nome: "Pelourinho - BA",
      descricao: "Centro histórico de Salvador, com ruas de pedra e igrejas seculares.",
      detalhes: "Coração cultural da Bahia, com música ao vivo, culinária típica e festas tradicionais."
    }
  };
  
  // Mostrar detalhes de pacotes
  function mostrarDetalhes(pacoteId) {
    const pacote = pacotes[pacoteId];
    const detalhesDiv = document.getElementById('detalhes');
    const conteudoDiv = document.getElementById('detalhes-conteudo');
  
    conteudoDiv.innerHTML = `
      <h3>${pacote.nome}</h3>
      <p><strong>Descrição:</strong> ${pacote.descricao}</p>
      <p><strong>Detalhes:</strong> ${pacote.detalhes}</p>
    `;
  
    detalhesDiv.style.display = 'block';
  }
  
  // Mostrar detalhes de pontos turísticos
  function mostrarPonto(pontoId) {
    const ponto = pontosTuristicos[pontoId];
    const detalhesDiv = document.getElementById('detalhes');
    const conteudoDiv = document.getElementById('detalhes-conteudo');
  
    conteudoDiv.innerHTML = `
      <h3>${ponto.nome}</h3>
      <p><strong>Descrição:</strong> ${ponto.descricao}</p>
      <p><strong>Detalhes:</strong> ${ponto.detalhes}</p>
    `;
  
    detalhesDiv.style.display = 'block';
  }
  