// =============================================
// CONFIGURAÇÃO — GOOGLE SHEETS + APPS SCRIPT
// =============================================
// INSTRUÇÕES:
// 1. Crie uma planilha no Google Sheets
// 2. Vá em Extensões > Apps Script
// 3. Cole o código do arquivo "google-apps-script.js"
// 4. Implante como App da Web (acesso: "Qualquer pessoa")
// 5. Copie a URL gerada e cole abaixo:

const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxdkZ6T1PBKFh-aABdkvt3ccNGvro6YOovFAXv2zgQKrVcU1wrdWSLznuuJTY_u3oRx/exec';

// =============================================
// 28 GRUPOS DE ADJETIVOS DISC
// =============================================
// Cada grupo tem 4 adjetivos, um para cada dimensão:
// D = Dominância, I = Influência, S = Estabilidade, C = Conformidade

const adjectiveGroups = [
    {
        id: 1,
        adjectives: [
            { word: "Determinado", desc: "Focado em resultados", type: "D" },
            { word: "Entusiasta", desc: "Cheio de energia positiva", type: "I" },
            { word: "Paciente", desc: "Calmo e constante", type: "S" },
            { word: "Cauteloso", desc: "Cuidadoso e preciso", type: "C" }
        ]
    },
    {
        id: 2,
        adjectives: [
            { word: "Competitivo", desc: "Busca vencer desafios", type: "D" },
            { word: "Persuasivo", desc: "Convence com facilidade", type: "I" },
            { word: "Amigável", desc: "Agradável e acolhedor", type: "S" },
            { word: "Analítico", desc: "Examina os detalhes", type: "C" }
        ]
    },
    {
        id: 3,
        adjectives: [
            { word: "Ousado", desc: "Assume riscos e iniciativa", type: "D" },
            { word: "Comunicativo", desc: "Expressivo e falante", type: "I" },
            { word: "Leal", desc: "Fiel e comprometido", type: "S" },
            { word: "Preciso", desc: "Exato e detalhista", type: "C" }
        ]
    },
    {
        id: 4,
        adjectives: [
            { word: "Direto", desc: "Vai direto ao ponto", type: "D" },
            { word: "Otimista", desc: "Vê o lado positivo", type: "I" },
            { word: "Estável", desc: "Consistente e previsível", type: "S" },
            { word: "Perfeccionista", desc: "Busca a excelência", type: "C" }
        ]
    },
    {
        id: 5,
        adjectives: [
            { word: "Independente", desc: "Autossuficiente", type: "D" },
            { word: "Sociável", desc: "Gosta de estar com pessoas", type: "I" },
            { word: "Compreensivo", desc: "Entende os outros", type: "S" },
            { word: "Metódico", desc: "Segue processos definidos", type: "C" }
        ]
    },
    {
        id: 6,
        adjectives: [
            { word: "Decisivo", desc: "Toma decisões rápidas", type: "D" },
            { word: "Inspirador", desc: "Motiva os outros", type: "I" },
            { word: "Confiável", desc: "Cumpre o que promete", type: "S" },
            { word: "Criterioso", desc: "Avalia com cuidado", type: "C" }
        ]
    },
    {
        id: 7,
        adjectives: [
            { word: "Enérgico", desc: "Dinâmico e ativo", type: "D" },
            { word: "Expressivo", desc: "Demonstra emoções", type: "I" },
            { word: "Tolerante", desc: "Aceita diferenças", type: "S" },
            { word: "Organizado", desc: "Ordem e estrutura", type: "C" }
        ]
    },
    {
        id: 8,
        adjectives: [
            { word: "Corajoso", desc: "Enfrenta sem medo", type: "D" },
            { word: "Carismático", desc: "Atrai as pessoas", type: "I" },
            { word: "Calmo", desc: "Tranquilo sob pressão", type: "S" },
            { word: "Disciplinado", desc: "Segue regras e padrões", type: "C" }
        ]
    },
    {
        id: 9,
        adjectives: [
            { word: "Ambicioso", desc: "Busca crescimento", type: "D" },
            { word: "Criativo", desc: "Ideias inovadoras", type: "I" },
            { word: "Cooperativo", desc: "Trabalha em equipe", type: "S" },
            { word: "Sistemático", desc: "Segue sistemas lógicos", type: "C" }
        ]
    },
    {
        id: 10,
        adjectives: [
            { word: "Assertivo", desc: "Firme nas posições", type: "D" },
            { word: "Empolgante", desc: "Gera entusiasmo", type: "I" },
            { word: "Gentil", desc: "Educado e cortês", type: "S" },
            { word: "Meticuloso", desc: "Atento a cada detalhe", type: "C" }
        ]
    },
    {
        id: 11,
        adjectives: [
            { word: "Objetivo", desc: "Foco no essencial", type: "D" },
            { word: "Espontâneo", desc: "Age naturalmente", type: "I" },
            { word: "Atencioso", desc: "Cuida dos outros", type: "S" },
            { word: "Rigoroso", desc: "Exigente consigo mesmo", type: "C" }
        ]
    },
    {
        id: 12,
        adjectives: [
            { word: "Líder", desc: "Assume a frente", type: "D" },
            { word: "Divertido", desc: "Leveza e humor", type: "I" },
            { word: "Dedicado", desc: "Comprometido com o trabalho", type: "S" },
            { word: "Cuidadoso", desc: "Pondera antes de agir", type: "C" }
        ]
    },
    {
        id: 13,
        adjectives: [
            { word: "Desafiador", desc: "Questiona o status quo", type: "D" },
            { word: "Animado", desc: "Vibra com novidades", type: "I" },
            { word: "Persistente", desc: "Não desiste facilmente", type: "S" },
            { word: "Racional", desc: "Pensamento lógico", type: "C" }
        ]
    },
    {
        id: 14,
        adjectives: [
            { word: "Pragmático", desc: "Prático e eficiente", type: "D" },
            { word: "Empático", desc: "Se coloca no lugar do outro", type: "I" },
            { word: "Harmonioso", desc: "Busca paz e equilíbrio", type: "S" },
            { word: "Investigativo", desc: "Busca entender a fundo", type: "C" }
        ]
    },
    {
        id: 15,
        adjectives: [
            { word: "Empreendedor", desc: "Cria oportunidades", type: "D" },
            { word: "Influente", desc: "Impacta opiniões", type: "I" },
            { word: "Receptivo", desc: "Aberto a escutar", type: "S" },
            { word: "Estratégico", desc: "Planejamento de longo prazo", type: "C" }
        ]
    },
    {
        id: 16,
        adjectives: [
            { word: "Dominante", desc: "Controla as situações", type: "D" },
            { word: "Convincente", desc: "Argumenta com brilho", type: "I" },
            { word: "Solidário", desc: "Apoia os colegas", type: "S" },
            { word: "Exato", desc: "Precisão nos resultados", type: "C" }
        ]
    },
    {
        id: 17,
        adjectives: [
            { word: "Resoluto", desc: "Firmeza nas decisões", type: "D" },
            { word: "Extrovertido", desc: "Gosta de interações", type: "I" },
            { word: "Tranquilo", desc: "Serenidade e paz", type: "S" },
            { word: "Discreto", desc: "Reservado e prudente", type: "C" }
        ]
    },
    {
        id: 18,
        adjectives: [
            { word: "Exigente", desc: "Altos padrões para todos", type: "D" },
            { word: "Contagiante", desc: "Energia que se espalha", type: "I" },
            { word: "Flexível", desc: "Adapta-se a mudanças", type: "S" },
            { word: "Reflexivo", desc: "Pensa antes de agir", type: "C" }
        ]
    },
    {
        id: 19,
        adjectives: [
            { word: "Imponente", desc: "Presença forte", type: "D" },
            { word: "Popular", desc: "Querido por todos", type: "I" },
            { word: "Moderado", desc: "Equilíbrio nas ações", type: "S" },
            { word: "Detalhista", desc: "Nenhum detalhe escapa", type: "C" }
        ]
    },
    {
        id: 20,
        adjectives: [
            { word: "Audaz", desc: "Não tem medo de inovar", type: "D" },
            { word: "Simpático", desc: "Conquista com gentileza", type: "I" },
            { word: "Previsível", desc: "Consistência de comportamento", type: "S" },
            { word: "Formal", desc: "Segue protocolos e normas", type: "C" }
        ]
    },
    {
        id: 21,
        adjectives: [
            { word: "Firme", desc: "Não se abala facilmente", type: "D" },
            { word: "Alegre", desc: "Sempre de bom humor", type: "I" },
            { word: "Sensível", desc: "Percebe sentimentos alheios", type: "S" },
            { word: "Ponderado", desc: "Avalia prós e contras", type: "C" }
        ]
    },
    {
        id: 22,
        adjectives: [
            { word: "Focado", desc: "Não se distrai com facilidade", type: "D" },
            { word: "Versátil", desc: "Se adapta a diferentes situações", type: "I" },
            { word: "Bondoso", desc: "Genuinamente bom com todos", type: "S" },
            { word: "Técnico", desc: "Domínio do conhecimento", type: "C" }
        ]
    },
    {
        id: 23,
        adjectives: [
            { word: "Incansável", desc: "Nunca para de trabalhar", type: "D" },
            { word: "Motivador", desc: "Levanta o ânimo da equipe", type: "I" },
            { word: "Colaborativo", desc: "Trabalha junto com todos", type: "S" },
            { word: "Calculista", desc: "Planeja cada passo", type: "C" }
        ]
    },
    {
        id: 24,
        adjectives: [
            { word: "Pioneiro", desc: "Abre novos caminhos", type: "D" },
            { word: "Cativante", desc: "Prende a atenção de todos", type: "I" },
            { word: "Zeloso", desc: "Cuida com esmero", type: "S" },
            { word: "Observador", desc: "Analisa antes de falar", type: "C" }
        ]
    },
    {
        id: 25,
        adjectives: [
            { word: "Tenaz", desc: "Persistência inabalável", type: "D" },
            { word: "Vivaz", desc: "Cheio de vida", type: "I" },
            { word: "Diplomático", desc: "Resolve conflitos com tato", type: "S" },
            { word: "Prudente", desc: "Cautela nas decisões", type: "C" }
        ]
    },
    {
        id: 26,
        adjectives: [
            { word: "Autoconfiante", desc: "Acredita em si mesmo", type: "D" },
            { word: "Envolvente", desc: "Cria conexões fortes", type: "I" },
            { word: "Pacífico", desc: "Evita confrontos", type: "S" },
            { word: "Consistente", desc: "Mantém a qualidade sempre", type: "C" }
        ]
    },
    {
        id: 27,
        adjectives: [
            { word: "Arrojado", desc: "Não teme o desconhecido", type: "D" },
            { word: "Generoso", desc: "Doa seu tempo e energia", type: "I" },
            { word: "Constante", desc: "Estável e firme", type: "S" },
            { word: "Minucioso", desc: "Foco nos mínimos detalhes", type: "C" }
        ]
    },
    {
        id: 28,
        adjectives: [
            { word: "Destemido", desc: "Enfrenta qualquer desafio", type: "D" },
            { word: "Apaixonado", desc: "Entrega-se de corpo e alma", type: "I" },
            { word: "Conciliador", desc: "Busca acordo entre todos", type: "S" },
            { word: "Lógico", desc: "Razão acima de tudo", type: "C" }
        ]
    }
];

// =============================================
// DESCRIÇÕES DOS PERFIS DISC
// =============================================
const profileDescriptions = {
    D: {
        name: "Dominância",
        emoji: "🔴",
        color: "#e74c3c",
        subtitle: "Você é orientado a resultados, direto e determinado. Busca desafios e gosta de estar no controle.",
        strengths: [
            "Foco em resultados e metas",
            "Tomada de decisão rápida",
            "Liderança natural e assertiva",
            "Capacidade de resolver problemas complexos",
            "Determinação e persistência"
        ],
        challenges: [
            "Pode parecer impaciente ou agressivo",
            "Dificuldade em delegar tarefas",
            "Tendência a ignorar detalhes",
            "Pode ser insensível aos sentimentos dos outros",
            "Resistência a receber ordens"
        ],
        environment: "Ambientes com liberdade para agir, desafios constantes e oportunidades de liderança.",
        communication: "Seja direto, objetivo e focado em resultados. Evite rodeios e vá direto ao ponto."
    },
    I: {
        name: "Influência",
        emoji: "🟡",
        color: "#f1c40f",
        subtitle: "Você é sociável, entusiasta e persuasivo. Valoriza relacionamentos e inspira os outros com sua energia.",
        strengths: [
            "Excelente comunicação interpessoal",
            "Capacidade de motivar e inspirar equipes",
            "Criatividade e pensamento inovador",
            "Facilidade em criar redes de relacionamento",
            "Otimismo e entusiasmo contagiante"
        ],
        challenges: [
            "Dificuldade com detalhes e rotinas",
            "Pode ser impulsivo nas decisões",
            "Tendência a falar mais do que ouvir",
            "Dificuldade em manter o foco em tarefas longas",
            "Pode evitar confrontos necessários"
        ],
        environment: "Ambientes colaborativos, dinâmicos e com interação social frequente.",
        communication: "Seja amigável, demonstre entusiasmo e valorize suas ideias. Dê espaço para expressão."
    },
    S: {
        name: "Estabilidade",
        emoji: "🟢",
        color: "#2ecc71",
        subtitle: "Você é paciente, leal e cooperativo. Valoriza a harmonia, a segurança e os relacionamentos de longo prazo.",
        strengths: [
            "Excelente ouvinte e conselheiro",
            "Trabalho em equipe exemplar",
            "Lealdade e comprometimento",
            "Paciência e persistência",
            "Capacidade de criar ambientes harmoniosos"
        ],
        challenges: [
            "Resistência a mudanças repentinas",
            "Dificuldade em dizer 'não'",
            "Pode evitar conflitos necessários",
            "Demora para tomar decisões sob pressão",
            "Pode se sobrecarregar para agradar os outros"
        ],
        environment: "Ambientes estáveis, previsíveis e com relações interpessoais saudáveis.",
        communication: "Seja calmo, demonstre sinceridade e dê tempo para processar. Evite pressões excessivas."
    },
    C: {
        name: "Conformidade",
        emoji: "🔵",
        color: "#3498db",
        subtitle: "Você é analítico, preciso e disciplinado. Valoriza qualidade, planejamento e segue altos padrões de excelência.",
        strengths: [
            "Atenção excepcional aos detalhes",
            "Pensamento analítico e crítico",
            "Planejamento estratégico",
            "Altos padrões de qualidade",
            "Capacidade de análise de dados e informações"
        ],
        challenges: [
            "Pode ser excessivamente crítico",
            "Dificuldade em lidar com ambiguidade",
            "Tendência ao perfeccionismo paralisante",
            "Pode ser reservado demais em equipe",
            "Demora excessiva na análise antes de agir"
        ],
        environment: "Ambientes organizados, com regras claras e espaço para análise detalhada.",
        communication: "Seja preciso, apresente dados e fatos. Dê tempo para análise e evite decisões apressadas."
    }
};

// =============================================
// ESTADO DO APLICATIVO
// =============================================
let currentGroup = 0;
let userName = '';
let userEmail = '';
let selections = new Array(28).fill(null);

// =============================================
// FUNÇÕES DE NAVEGAÇÃO
// =============================================
function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    const target = document.getElementById(screenId);
    target.classList.add('active');
    target.style.animation = 'none';
    target.offsetHeight;
    target.style.animation = 'fadeIn 0.6s ease';
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function startTest() {
    const nameInput = document.getElementById('user-name');
    const emailInput = document.getElementById('user-email');
    userName = nameInput.value.trim();
    userEmail = emailInput.value.trim();

    let hasError = false;
    nameInput.classList.remove('error');
    emailInput.classList.remove('error');

    if (!userName) {
        nameInput.classList.add('error');
        nameInput.focus();
        hasError = true;
    }
    if (!userEmail || !isValidEmail(userEmail)) {
        emailInput.classList.add('error');
        if (!hasError) emailInput.focus();
        hasError = true;
    }

    if (hasError) return;

    currentGroup = 0;
    selections = new Array(28).fill(null);
    showScreen('test-screen');
    renderGroup();
}

function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// =============================================
// RENDERIZAÇÃO DO TESTE
// =============================================
function renderGroup() {
    const group = adjectiveGroups[currentGroup];
    const container = document.getElementById('adjective-group');

    const shuffled = [...group.adjectives].sort(() => Math.random() - 0.5);

    container.innerHTML = shuffled.map(adj => `
        <div class="adjective-card ${selections[currentGroup] === adj.type ? 'selected' : ''}"
             onclick="selectAdjective(${currentGroup}, '${adj.type}', this)"
             role="button"
             tabindex="0">
            <div class="adj-word">${adj.word}</div>
        </div>
    `).join('');

    container.style.animation = 'none';
    container.offsetHeight;
    container.style.animation = 'slideIn 0.4s ease';

    updateProgress();

    document.getElementById('btn-prev').disabled = currentGroup === 0;
    const btnNext = document.getElementById('btn-next');
    if (currentGroup === adjectiveGroups.length - 1) {
        btnNext.innerHTML = 'Ver Resultado <span class="btn-arrow">✓</span>';
    } else {
        btnNext.innerHTML = 'Próximo <span class="btn-arrow">→</span>';
    }
}

function updateProgress() {
    const answered = selections.filter(s => s !== null).length;
    const percent = Math.round((answered / 28) * 100);
    document.getElementById('group-counter').textContent = `Grupo ${currentGroup + 1} de 28`;
    document.getElementById('progress-percent').textContent = `${percent}%`;
    document.getElementById('progress-fill').style.width = `${percent}%`;
}

function selectAdjective(groupIndex, type, element) {
    selections[groupIndex] = type;

    const cards = element.parentElement.querySelectorAll('.adjective-card');
    cards.forEach(c => c.classList.remove('selected'));
    element.classList.add('selected');

    updateProgress();
}

function nextGroup() {
    if (selections[currentGroup] === null) {
        const cards = document.querySelectorAll('.adjective-card');
        cards.forEach(c => {
            c.style.animation = 'none';
            c.offsetHeight;
            c.style.animation = 'shake 0.4s ease';
        });
        return;
    }

    if (currentGroup < adjectiveGroups.length - 1) {
        currentGroup++;
        renderGroup();
    } else {
        const unanswered = selections.findIndex(s => s === null);
        if (unanswered !== -1) {
            currentGroup = unanswered;
            renderGroup();
            return;
        }
        calculateResults();
    }
}

function prevGroup() {
    if (currentGroup > 0) {
        currentGroup--;
        renderGroup();
    }
}

// =============================================
// CÁLCULO DE RESULTADOS
// =============================================
function calculateResults() {
    const scores = { D: 0, I: 0, S: 0, C: 0 };

    selections.forEach(type => {
        if (type) scores[type]++;
    });

    const total = 28;
    const percentages = {
        D: Math.round((scores.D / total) * 100),
        I: Math.round((scores.I / total) * 100),
        S: Math.round((scores.S / total) * 100),
        C: Math.round((scores.C / total) * 100)
    };

    const dominant = Object.keys(scores).reduce((a, b) => scores[a] > scores[b] ? a : b);

    displayResults(dominant, percentages, scores);
    sendResults(dominant, percentages, scores);
}

// =============================================
// EXIBIÇÃO DE RESULTADOS
// =============================================
function displayResults(dominant, percentages, scores) {
    showScreen('result-screen');

    const profile = profileDescriptions[dominant];

    document.getElementById('result-name').textContent = userName;

    const profileIcon = document.getElementById('profile-icon');
    profileIcon.textContent = profile.emoji;
    profileIcon.className = `profile-icon type-${dominant}`;
    document.getElementById('profile-type').textContent = profile.name;
    document.getElementById('profile-subtitle').textContent = profile.subtitle;

    setTimeout(() => {
        ['D', 'I', 'S', 'C'].forEach(type => {
            document.getElementById(`bar-${type}`).style.width = `${percentages[type]}%`;
            document.getElementById(`score-${type}`).textContent = `${percentages[type]}%`;
        });
    }, 300);

    const descContainer = document.getElementById('profile-description');
    descContainer.innerHTML = `
        <h3>${profile.emoji} Perfil ${profile.name}</h3>
        <p>${profile.subtitle}</p>

        <h4>✦ Pontos Fortes</h4>
        <ul>
            ${profile.strengths.map(s => `<li>${s}</li>`).join('')}
        </ul>
    `;
}

// =============================================
// ENVIO PARA GOOGLE SHEETS + E-MAIL
// =============================================
function sendResults(dominant, percentages, scores) {
    const statusEl = document.getElementById('email-status');
    const profile = profileDescriptions[dominant];

    // Se a URL não foi configurada, mostra aviso
    if (GOOGLE_SCRIPT_URL === 'SUA_URL_AQUI') {
        statusEl.className = 'email-status error';
        statusEl.textContent = '⚠️ Configure a URL do Google Apps Script no arquivo script.js para salvar e enviar resultados.';
        return;
    }

    // Mostra status de envio
    statusEl.className = 'email-status sending';
    statusEl.textContent = '📧 Salvando resultado e enviando por e-mail...';

    // Prepara os dados
    const payload = {
        nome: userName,
        email: userEmail,
        perfilDominante: profile.name,
        scoreD: `${percentages.D}%`,
        scoreI: `${percentages.I}%`,
        scoreS: `${percentages.S}%`,
        scoreC: `${percentages.C}%`,
        detalhes: `Perfil Dominante: ${profile.name}\n\n` +
            `${profile.subtitle}\n\n` +
            `Pontos Fortes:\n${profile.strengths.map(s => '• ' + s).join('\n')}\n\n` +
            `Pontos de Atenção:\n${profile.challenges.map(c => '• ' + c).join('\n')}\n\n` +
            `Ambiente Ideal: ${profile.environment}\n\n` +
            `Dica de Comunicação: ${profile.communication}`
    };

    // Envia para o Google Apps Script
    fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    })
        .then(() => {
            statusEl.className = 'email-status success';
            statusEl.textContent = '✅ Resultado salvo e enviado com sucesso!';
        })
        .catch((error) => {
            console.error('Erro ao enviar:', error);
            statusEl.className = 'email-status error';
            statusEl.textContent = '❌ Erro ao enviar resultado. Tente novamente mais tarde.';
        });
}

// =============================================
// REFAZER TESTE
// =============================================
function restartTest() {
    currentGroup = 0;
    selections = new Array(28).fill(null);
    document.getElementById('user-name').value = '';
    document.getElementById('user-email').value = '';
    document.getElementById('email-status').className = 'email-status';
    showScreen('welcome-screen');
}

// =============================================
// ACESSIBILIDADE - TECLADO
// =============================================
document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        const activeEl = document.activeElement;
        if (activeEl && activeEl.classList.contains('adjective-card')) {
            activeEl.click();
        }
    }
});

// CSS animation for shake effect (validation)
const shakeStyle = document.createElement('style');
shakeStyle.textContent = `
    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        25% { transform: translateX(-6px); }
        75% { transform: translateX(6px); }
    }
`;
document.head.appendChild(shakeStyle);
