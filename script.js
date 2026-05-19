// COLOQUE O NÚMERO DO CLIENTE AQUI
const WHATSAPP_NUMERO = '5551981962819';

const radioOptions = document.querySelectorAll('.radio-option');

radioOptions.forEach(option => {

    option.addEventListener('click', () => {

        radioOptions.forEach(opt => {
            opt.classList.remove('selected');
        });

        option.classList.add('selected');

    });

});


const formulario = document.getElementById('orcamentoForm');

formulario.addEventListener('submit', function (e) {

    e.preventDefault();

    const servico = document.querySelector('input[name="servico"]:checked').value;

    const nome = document.getElementById('nome').value.trim();
    const telefone = document.getElementById('telefone').value.trim();
    const endereco = document.getElementById('endereco').value.trim();
    const numero = document.getElementById('numero').value.trim();
    const complemento = document.getElementById('complemento').value.trim();
    const bairro = document.getElementById('bairro').value.trim();

    const detalhes = document.getElementById('detalhes').value.trim() || 'Nenhum detalhe informado';

    const complementoTexto = complemento ? ` (${complemento})` : '';

    const enderecoCompleto = `${endereco}, Nº ${numero}${complementoTexto}`;

    const mensagem =
`
⚡ *NOVA SOLICITAÇÃO DE ORÇAMENTO* ⚡

👤 *Cliente:* ${nome}
📞 *Telefone:* ${telefone}
📍 *Endereço:* ${enderecoCompleto}
🏡 *Bairro/Cidade:* ${bairro}

🛠️ *Serviço solicitado:* ${servico}

📝 *Detalhes do problema:*
${detalhes}
`;

    const url = `https://wa.me/${WHATSAPP_NUMERO}?text=${encodeURIComponent(mensagem)}`;

    window.open(url, '_blank');

});