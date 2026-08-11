/**
 * AGRO//SYSTEM - PROTOCOLO JAVASCRIPT AGRINHO 2026
 * Controla a interatividade e dinamismo do Grid sem códigos inline.
 */

// Aguarda todo o HTML carregar antes de executar as funções
document.addEventListener("DOMContentLoaded", () => {
    console.log("AGRO//SYSTEM: Grid de interatividade ativado com sucesso.");
    
    // Inicialização dos módulos do site
    inicializarMenuResponsivo();
    inicializarQuizSustentavel();
    inicializarCalculadoraCarbono();
    inicializarFormularioContato();
});

/**
 * 1. INTERATIVIDADE: Menu Responsivo (Mobile)
 * Abre e fecha as opções do menu ao clicar no ícone de ramificação
 */
function inicializarMenuResponsivo() {
    const botaoMenu = document.getElementById("menuToggle");
    const menuNavegacao = document.getElementById("navMenu");

    if (botaoMenu && menuNavegacao) {
        botaoMenu.addEventListener("click", () => {
            menuNavegacao.classList.toggle("ativo");
        });
        
        // Fecha o menu automaticamente ao clicar em qualquer link dele
        const linksMenu = menuNavegacao.querySelectorAll("a");
        linksMenu.forEach(link => {
            link.addEventListener("click", () => {
                menuNavegacao.classList.remove("ativo");
            });
        });
    }
}

/**
 * 2. COMPORTAMENTO: Quiz Sustentável (Monitor de Cliques)
 * Captura os cliques nos botões de opções do quiz e exibe o feedback visual
 */
function inicializarQuizSustentavel() {
    // Captura os botões de opção dentro do bloco de quiz
    const botoes = document.querySelectorAll("#quiz .box-interativo:nth-child(1) .btn-opcao");
    const displayResultado = document.getElementById("resultadoQuiz");

    if (botoes.length >= 2 && displayResultado) {
        const botaoAumenta = botoes[0];
        const botaoReduz = botoes[1];

        // Ação para a resposta incorreta (Aumenta)
        botaoAumenta.addEventListener("click", () => {
            displayResultado.textContent = "❌ ACESSO NEGADO: Resposta incorreta. A tecnologia otimiza a aplicação e evita desperdícios.";
            displayResultado.style.color = "#ff007f"; // Rosa/Vermelho Cyber-Neon
        });

        // Ação para a resposta correta (Reduz)
        botaoReduz.addEventListener("click", () => {
            displayResultado.textContent = "🟢 SUCESSO NO LOG: Resposta correta! Sensores e GPS mapeiam o solo e reduzem insumos.";
            displayResultado.style.color = "#39ff14"; // Verde Ácido Cyber-Neon
        });
    }
}

/**
 * 3. INTELIGÊNCIA: Simulador de Sequestro de Carbono
 * Processa a entrada de dados do usuário e realiza o cálculo matemático do impacto
 */
function inicializarCalculadoraCarbono() {
    const botaoCalcular = document.querySelector("#quiz .box-interativo:nth-child(2) .btn-principal");
    const inputHectares = document.getElementById("hectares");
    const displayResultado = document.getElementById("resultadoCalculo");

    if (botaoCalcular && inputHectares && displayResultado) {
        botaoCalcular.addEventListener("click", () => {
            const hectares = parseFloat(inputHectares.value);

            // Validação de segurança para dados inconsistentes
            if (isNaN(hectares) || hectares <= 0) {
                displayResultado.textContent = "⚠️ ERRO_SYS: Insira um número de hectares válido.";
                displayResultado.style.color = "#ff007f";
                return;
            }

            // Regra de Negócio: Média estimada de 4 toneladas de CO2 salvas por hectare/ano em sistemas ILPF
            const estimativaCarbono = (hectares * 4).toFixed(1);

            displayResultado.textContent = `⚡ PROCESSANDO: Sua área pode reter aproximadamente ${estimativaCarbono} toneladas de CO2 por ano adotando agricultura regenerativa!`;
            displayResultado.style.color = "#00ffff"; // Ciano Cyber-Neon
        });
    }
}

/**
 * 4. VALIDAÇÃO: Formulário Inteligente de Conexão
 * Intercepta o envio do formulário, higieniza as entradas e simula transmissão segura
 */
function inicializarFormularioContato() {
    const formulario = document.getElementById("formContato");

    if (formulario) {
        formulario.addEventListener("submit", (evento) => {
            evento.preventDefault(); // Impede que o navegador recarregue a página de forma padrão

            // Captura os campos internos do formulário
            const camposTexto = formulario.querySelectorAll("input, textarea");
            let camposValidos = true;

            // Verifica se algum campo foi enviado vazio ou apenas com espaços
            camposTexto.forEach(campo => {
                if (campo.value.trim() === "") {
                    camposValidos = false;
                }
            });

            if (!camposValidos) {
                alert("SISTEMA: Preencha todas as coordenadas de cadastro obrigatórias.");
                return;
            }

            // Exibe mensagem de sucesso customizada para o ecossistema Agrinho
            alert("CONEXÃO ESTABELECIDA: Seus dados foram transmitidos com sucesso para a rede de inovação do Agrinho 2026!");
            formulario.reset(); // Limpa todas as caixas de texto do formulário
        });
    }
}
