// ---------------------------
// BANCO FAKE
// ---------------------------
const procedi = [
  { 
    nome: "Botox", 
    desc: "Suavize rugas e linhas finas com rapidez", 

    imagem: "img/botox.jpg" 
  },
  { 
    nome: "Limpeza de Pele", 
    desc: "Pele renovada com hidratação profunda", 
 
    imagem: "img/lipeza.jpg" 
  },
  { 
    nome: "Preenchimento Facial", 
    desc: "Que nada de bigode chinês", 
    imagem: "img/prenchimento.jpg" 
  },
  { 
    nome: "Tratamento para Acne", 
    desc: "Ideal para reduzir acne e oleosidade", 

   imagem: "img/acen.jpg" 
  },
  { 
    nome: "Peeling Químico", 
    desc: "Renovação celular com controle de manchas", 
    imagem: "img/Peeling.jpg" 
  },
  { 
    nome: "Laser Dermatológico", 
    desc: "Tratamento moderno para manchas e sinais", 
    imagem: "img/Laser.jpg" 
  }
];
// ---------------------------
// RENDERIZAÇÃO
// ---------------------------
function renderProducts(lista) {
  const container = document.getElementById("procedi");
  const noResults = document.getElementById("noResults");

  if (!container) return;

  container.innerHTML = "";

  // Se não tiver nada
  if (lista.length === 0) {
    noResults.style.display = "block";
    return;
  } else {
    noResults.style.display = "none";
  }

  lista.forEach((p) => {
    const card = document.createElement("div");
    card.className = "procedi-card";

    card.innerHTML = `
      <img src="${p.imagem}" alt="${p.nome}">
      <h3>${p.nome}</h3>
      <div class="linhaS"></div>
      <p class="desc">${p.desc}</p>
      <div class="botoes-prod">
        <button onclick="enviarMensagem('procedimento')" class="btn-detalhes">Agendar pelo WhatsApp</button>
      </div>
    `;

    // EVENTO DO BOTÃO
    card.querySelector(".btn-detalhes").addEventListener("click", () => {
      localStorage.setItem("procedimento", JSON.stringify(p));
      window.location.href = "detalhe.html";
    });

    container.appendChild(card);
  });
}

// ---------------------------
// INICIALIZAÇÃO
// ---------------------------
function carregarProdutos() {
  renderProducts(procedi);
}

document.addEventListener("DOMContentLoaded", carregarProdutos);