// Garante que o código rode apenas após o HTML carregar completamente
document.addEventListener("DOMContentLoaded", () => {
    console.log("AGRO//SYSTEM: Grid de interatividade ativado.");
    
    // Inicializa todas as funções de comportamento do site
    configurarMenuResponsivo();
    configurarQuizSustentavel();
    configurarCalculadoraCarbono();
    configurarFormularioContato();
});

/**
 * 1. MENU RESPONSIVO (INTERATIVIDADE)
 */
function configurarMenuResponsivo() {
    const botaoMenu = document.getElementById("menuToggle");
    const menuNavegacao = document.getElementById("navMenu");

    if (botaoMenu && menuNavegacao) {
        botaoMenu.addEventListener("click", () => {
            menuNavegacao.classList.toggle("ativo");
        });
    }
}

/**
 * 2. QUIZ SUSTENTÁVEL (CORREÇÃO DE EVENTOS INLINE)
 */
function configurarQuizSustentavel() {
    // Seleciona os botões de opção dentro do bloco do quiz
    const botoesOpcao = document.querySelectorAll("#quiz .box-interativo:nth-child(1) .btn-opcao");
    const caixaResultado = document.getElementById("resultadoQuiz");

    if (botoesOpcao.length && caixaResultado) {
        // O primeiro botão é o "Aumenta" (Incorreto)
        botoesOpcao[0].addEventListener("click", () => {
            caixaResultado.textContent = "❌ ACESSO NEGADO: Resposta incorreta. A tecnologia otimiza a aplicação e reduz o desperdício.";
            caixaResultado.style.color = "#ff007f"; // Rosa/Vermelho Neon
        });

        // O segundo botão é o "Reduz (Correto)"
        botoesOpcao[1].addEventListener("click", () => {
            caixaResultado.textContent = "🟢 SUCESSO NO LOG: Resposta correta! Sensores e GPS evitam aplicações desnecessárias.";
            caixaResultado.style.color = "#39ff14"; // Verde Ácido Neon
        });
    }
}

/**
 * 3. CALCULADORA DE CARBONO (SIMULADOR DE IMPACTO)
 */
function configurarCalculadoraCarbono() {
    const botaoCalcular = document.querySelector("#quiz .box-interativo:nth-child(2) .btn-principal");
    const inputHectares = document.getElementById("hectares");
    const caixaResultado = document.getElementById("resultadoCalculo");

    if (botaoCalcular && inputHectares && caixaResultado) {
        botaoCalcular.addEventListener("click", () => {
            const hectares = parseFloat(inputHectares.value);

            if (isNaN(hectares) || hectares <= 0) {
                caixaResultado.textContent = "⚠️ ERRO_SYS: Insira uma quantidade válida de hectares.";
                caixaResultado.style.color = "#ff007f";
                return;
            }

            // Cálculo simulado: Média de 4 toneladas de CO2 sequestradas por hectare/ano em ILPF
            const carbonoSequestrado = (hectares * 4).toFixed(1);

            caixaResultado.textContent = `⚡ PROCESSANDO: Sua área tem o potencial de sequestrar aproximadamente ${carbonoSequestrado} toneladas de CO2 por ano usando diretrizes sustentáveis!`;
            caixaResultado.style.color = "#00ffff"; // Ciano Elétrico
        });
    }
}

/**
 * 4. VALIDAÇÃO DO FORMULÁRIO DE CONTATO
 */
function configurarFormularioContato() {
    const formulario = document.getElementById("formContato");

    if (formulario) {
        formulario.addEventListener("submit", (evento) => {
            evento.preventDefault(); // Impede o recarregamento da página

            // Coleta os dados digitados para simular o envio
            const campos = formulario.querySelectorAll("input, textarea");
            let formularioValido = true;

            campos.forEach(campo => {
                if (campo.value.trim() === "") {
                    formularioValido = false;
                }
            });

            if (!formularioValido) {
                alert("SISTEMA: Preencha todas as coordenadas de cadastro obrigatórias.");
                return;
            }

            alert("CONEXÃO ESTABELECIDA: Seus dados foram transmitidos com sucesso para a base do Agrinho 2026!");
            formulario.reset(); // Limpa as caixas de texto
        });
    }
}
