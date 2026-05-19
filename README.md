# ⚡ SOS Manutenção - Sistema de Orçamento Express via WhatsApp

[![Live Demo](https://img.shields.io/badge/Acessar_Demonstração-SOS_Reparos-2a9d8f?style=for-the-badge&logo=whatsapp)](https://tinyurl.com/sosreparos)

## 📌 Sobre o Projeto
O **SOS Manutenção** é uma aplicação Web (Mobile-First) desenvolvida para otimizar o atendimento de prestadores de serviços técnicos (eletricistas, encanadores, técnicos de aquecedores/Junker, etc.). 

A ferramenta substitui as longas conversas de triagem por um formulário inteligente que coleta o problema, os dados do cliente e o endereço completo, enviando um pedido de orçamento totalmente formatado direto para o WhatsApp do profissional.

## 🎯 O Problema que Resolve
No inverno ou em situações de emergência, os prestadores de serviço recebem dezenas de mensagens desorganizadas ("Meu chuveiro queimou, quanto cobra?"). O profissional perde tempo perguntando o bairro, o endereço e os detalhes técnicos. Este sistema automatiza essa triagem, entregando o lead pronto e qualificado.

## ⚙️ Funcionalidades
- **Interface Mobile-First:** Design limpo e focado em conversão rápida pelo celular.
- **Triagem Inteligente:** Opções de serviços pré-definidas para clique rápido.
- **Coleta de Geolocalização:** Campos específicos para Rua, Número, Complemento e Bairro, essenciais para cálculo de deslocamento.
- **Integração com WhatsApp API:** O JavaScript coleta os dados do formulário, formata em texto com quebras de linha e negrito, e gera o link de redirecionamento automático.

## 🛠️ Tecnologias Utilizadas
- **HTML5:** Estruturação semântica e formulários com validação nativa.
- **CSS3:** Estilização customizada (CSS Variables), Flexbox, CSS Grid e media queries para responsividade.
- **JavaScript (Vanilla):** Manipulação da DOM, escuta de eventos (Event Listeners) e consumo da API oficial de envio do WhatsApp.

## 🚀 Como Configurar para um Novo Cliente
A arquitetura do projeto foi pensada para ser escalável (SaaS/White-label). Para adaptar para um novo profissional, basta alterar uma variável:

1. Abra o arquivo `script.js`.
2. Altere a constante `WHATSAPP_NUMERO` para o telefone do cliente (com código do país e DDD):
```javascript
// Exemplo:
const WHATSAPP_NUMERO = '5551981962819';
