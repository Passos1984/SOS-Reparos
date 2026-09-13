// CONFIGURAÇÕES DO CLIENTE
const CONFIG = {
  nomeEmpresa: "SOS Reparos",
  whatsapp: "5551981962819",
  cidade: "Porto Alegre",

  endereco: {
    rua: "Rua Exemplo",
    numero: "123",
    bairro: "Centro",
  },

  instagram: "https://www.instagram.com/sosreparos",

  descricao: "Serviços de manutenção e reparos residenciais.",

  servicos: [
    "Chuveiro não esquenta / Queimou",
    "Problema no Aquecedor a Gás (Junker)",
    "Disjuntor caindo / Tomada derretida",
    "Outro problema elétrico ou hidráulico",
  ],
};
const whatsappFloat = document.getElementById('whatsapp-float');
whatsappFloat.href = `https://wa.me/${CONFIG.whatsapp}`;
document.title = `${CONFIG.nomeEmpresa} - Orçamento Rápido`;
const radioOptions = document.querySelectorAll(".radio-option");
const logoPlaceholder = document.getElementById('logo-placeholder');
const descricaoEmpresa = document.getElementById('descricao-empresa');

logoPlaceholder.textContent = `⚡ ${CONFIG.nomeEmpresa}`;
descricaoEmpresa.textContent = CONFIG.descricao;

radioOptions.forEach((option) => {
  option.addEventListener("click", () => {
    radioOptions.forEach((opt) => {
      opt.classList.remove("selected");
    });

    option.classList.add("selected");
  });
});

const formulario = document.getElementById("orcamentoForm");

formulario.addEventListener("submit", function (e) {
  e.preventDefault();

  const servico = document.querySelector('input[name="servico"]:checked').value;
  const nome = document.getElementById("nome").value.trim();
  const telefone = document.getElementById("telefone").value.trim();
  const endereco = document.getElementById("endereco").value.trim();
  const numero = document.getElementById("numero").value.trim();
  const complemento = document.getElementById("complemento").value.trim();
  const bairro = document.getElementById("bairro").value.trim();

  const detalhes =
    document.getElementById("detalhes").value.trim() ||
    "Nenhum detalhe informado";

  const complementoTexto = complemento ? ` (${complemento})` : "";

  const enderecoCompleto = `${endereco}, Nº ${numero}${complementoTexto}`;
  const mensagem = `
⚡ *NOVA SOLICITAÇÃO DE ORÇAMENTO* ⚡

👤 *Cliente:* ${nome}
📞 *Telefone:* ${telefone}
📍 *Endereço:* ${enderecoCompleto}
🏡 *Bairro/Cidade:* ${bairro}

🛠️ *Serviço solicitado:* ${servico}

📝 *Detalhes do problema:*
${detalhes}
`;

  const url = `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(mensagem)}`;
  window.open(url, "_blank");
});
