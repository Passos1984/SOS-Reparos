// CONFIGURAÇÕES DO CLIENTE
const CONFIG = {
  nomeEmpresa: "SOS Reparos",
  whatsapp: "5551981962819",
 areaAtendimento: "Canoas, Esteio e Sapucaia do Sul",

  endereco: {
    rua: "Rua Exemplo",
    numero: "123",
    bairro: "Centro",
  },

  instagram: "https://www.instagram.com/sosreparos",

  descricao: "Serviços de manutenção e reparos residenciais.",
  perguntaServico: "Qual é o problema  atual?",
textoDetalhes: "Detalhes do problema",
placeholderDetalhes: "Ex: Odisjuntor começou a cair que liguei o chuveiro...",
  servicos: [
    "Chuveiro não esquenta / Queimou",
    "Problema no Aquecedor a Gás (Junker)",
    "Disjuntor caindo / Tomada derretida",
    "Outro serviço (Descrever abaixo)",
  ],
};
const whatsappFloat = document.getElementById('whatsapp-float');
whatsappFloat.href = `https://wa.me/${CONFIG.whatsapp}`;

const servicosContainer = document.getElementById('servicos-container');

CONFIG.servicos.forEach((servico, index) => {

    const label = document.createElement('label');
    label.classList.add('radio-option');

    const input = document.createElement('input');
    input.type = 'radio';
    input.name = 'servico';
    input.value = servico;

    if (index === 0) {
        input.required = true;
    }

    label.appendChild(input);
    label.appendChild(document.createTextNode(servico));

    servicosContainer.appendChild(label);

});
document.title = `${CONFIG.nomeEmpresa} - Orçamento Rápido`;

const radioOptions = document.querySelectorAll(".radio-option");

const logoPlaceholder = document.getElementById('logo-placeholder');

const descricaoEmpresa = document.getElementById('descricao-empresa');

const footer = document.querySelector('.footer');

footer.textContent = `Atendimento rápido em ${CONFIG.areaAtendimento} • Orçamento sem compromisso`;

logoPlaceholder.textContent = `⚡ ${CONFIG.nomeEmpresa}`;
descricaoEmpresa.textContent = CONFIG.descricao;

const perguntaServico = document.getElementById('pergunta-servico');

perguntaServico.textContent = CONFIG.perguntaServico;
radioOptions.forEach((option) => {
const textoDetalhes = document.getElementById('texto-detalhes');
const campoDetalhes = document.getElementById('detalhes');

textoDetalhes.textContent = CONFIG.textoDetalhes;
campoDetalhes.placeholder = CONFIG.placeholderDetalhes;

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
