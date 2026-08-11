// MENU RESPONSIVO (TOGGLE)
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// DESAFIO: VALIDAÇÃO DO MINI QUIZ (CORES ATUALIZADAS PARA O NEON)
function verificarQuiz(isCorrect) {
    const txtResultado = document.getElementById('resultadoQuiz');
    if (!isCorrect) {
        txtResultado.textContent = ">> ACESSO AUTORIZADO: A tecnologia de precisão reduz o desperdício otimizando recursos.";
        txtResultado.style.color = "#39ff14"; // Cyber Green
    } else {
        txtResultado.textContent = ">> ERRO DE DIRETRIZ: Tente novamente. Sistemas inteligentes combatem excessos.";
        txtResultado.style.color = "#ff007f"; // Cyber Magenta
    }
}

// DESAFIO: CALCULADORA DE IMPACTO AMBIENTAL
function calcularImpacto() {
    const hectares = document.getElementById('hectares').value;
    const txtImpacto = document.getElementById('resultadoCalculo');
    
    if(hectares > 0) {
        const toneladasCarbono = (hectares * 4.2).toFixed(1);
        txtImpacto.textContent = `>> COMPUTANDO: ${hectares} Hectares sob protocolo ILPF sequestram aproximadamente ${toneladasCarbono} toneladas de CO2/ano!`;
        txtImpacto.style.color = "#00ffff"; // Cyber Cyan
    } else {
        txtImpacto.textContent = ">> ERRO: Insira uma métrica de área válida.";
        txtImpacto.style.color = "#ff007f";
    }
}

// ENVIO DO FORMULÁRIO DE CONTATO
document.getElementById('formContato').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('>> UPLINK CONCLUÍDO: Coordenadas salvas no mainframe da sustentabilidade.');
    this.reset();
});
