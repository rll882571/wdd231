// ===================================
// ARQUIVO: scripts/modules/tips_carousel.js
// ===================================
//
// Este arquivo controla o carrossel de dicas.

document.addEventListener('DOMContentLoaded', () => {

    // 1. Definição das Dicas
    // (Baseado no texto que você forneceu)
    const allTips = [
        {
            title: "Dica 1: 'When' no meio da frase",
            content: `
                <p>Quando <strong>'when' (quando)</strong> está no meio, a ação longa (contínua) vem antes e a ação curta (simples) vem depois.</p>
                <p><strong>(Ação longa)</strong> + WHEN + <strong>(Ação curta)</strong></p>
                <code>
She <strong>was sleeping</strong> (contínua)
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>when</strong>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I <strong>arrived</strong> (simples)
                </code>
            `
        },
        {
            title: "Dica 2: 'When' no início da frase",
            content: `
                <p>Quando <strong>'when' (quando)</strong> está no início, a ação curta (simples) vem primeiro, seguida pela ação longa (contínua).</p>
                <p><strong>WHEN</strong> + <strong>(Ação curta)</strong>, + <strong>(Ação longa)</strong></p>
                <code>
<strong>When</strong> I <strong>arrived</strong> (simples),
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;she <strong>was sleeping</strong> (contínua)
                </code>
            `
        },
        {
            title: "Dica 3: Usando 'While'",
            content: `
                <p><strong>'While' (enquanto)</strong> é usado para duas ações longas (contínuas) acontecendo <strong>ao mesmo tempo</strong>.</p>
                <p><strong>(Ação contínua)</strong> + WHILE + <strong>(Ação contínua)</strong></p>
                <code>
I <strong>was playing</strong> soccer
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>while</strong>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;she <strong>was playing</strong> volleyball.
                </code>
            `
        },
        {
            title: "Dica 4: Simple Past (Afirmativa)",
            content: `
                <p>Sentenças no Simple Past <strong>não usam 'was'/'were'</strong> com o verbo principal, nem <strong>'-ing'</strong>.</p>
                <p class="exemplo-errado">Errado: I was played</p>
                <p class="exemplo-errado">Errado: We were went</p>
                <p class="exemplo-certo">Certo: I played</p>
                <p class="exemplo-certo">Certo: We went</p>
            `
        },
        {
            title: "Dica 5: Perguntas com Simple Past",
            content: `
                <p>Para fazer perguntas no Simple Past (com verbos de ação), use <strong>DID</strong> antes do sujeito. O verbo principal fica na forma base (presente).</p>
                <code>Did you <strong>go</strong> to the beach yesterday?</code>
                <p class="exemplo-errado">Errado: Did you <strong>went</strong>...?</p>
            `
        },
        {
            title: "Dica 6: Perguntas com 'To Be' no Passado",
            content: `
                <p>Para fazer perguntas com o verbo 'To Be' no passado (ser/estar), apenas troque o <strong>'was'</strong> ou <strong>'were'</strong> de lugar com o sujeito.</p>
                <code><strong>Were</strong> you sleeping?</code>
                <code><strong>Was</strong> she eating?</code>
            `
        },
        {
            title: "Dica 7: Negativas com Simple Past",
            content: `
                <p>Para frases negativas no Simple Past, use <strong>didn't</strong>. O verbo principal deve ficar na forma base (presente), <strong>sem '-ed'</strong> ou formas irregulares.</p>
                <p class="exemplo-certo">Certo: I <strong>didn't go</strong> to school.</p>
                <p class="exemplo-certo">Certo: I <strong>didn't play</strong> soccer.</p>
                <p class="exemplo-errado">Errado: I didn't <strong>went</strong> to school.</p>
                <p class="exemplo-errado">Errado: I didn't <strong>played</strong> soccer.</p>
            `
        },
        {
            title: "Dica 8: Respostas Corretas",
            content: `
                <p>Se a pergunta for no Simple Past (<strong>DID</strong>), a resposta deve ser no Simple Past (verbo no passado).</p>
                <code>Did you go...?<br>Yes, I <strong>went</strong>...</code>
                <p>Se a pergunta for no Past Continuous (<strong>WAS/WERE</strong>), a resposta deve ser no Past Continuous.</p>
                <code>Were you playing...?<br>Yes, I <strong>was playing</strong>...</code>
            `
        },
        {
            title: "Dica 9: Verbos Regulares",
            content: `
                <p>A maioria dos verbos regulares no passado simples termina com <strong>-ED</strong>.</p>
                <code>I <strong>played</strong> videogame.</code>
                <code>She <strong>watched</strong> TV.</code>
            `
        }
    ];

    // 2. Inserir Dicas no HTML
    const carousel = document.getElementById('tips-carousel');
    if (!carousel) {
        console.warn('Elemento #tips-carousel não encontrado. O carrossel de dicas não vai funcionar.');
        return;
    }

    allTips.forEach((tip, index) => {
        const tipElement = document.createElement('div');
        tipElement.classList.add('tip-slide');
        if (index === 0) {
            tipElement.classList.add('active'); // Mostra o primeiro
        }
        tipElement.innerHTML = `
            <h4>${tip.title}</h4>
            ${tip.content}
        `;
        carousel.appendChild(tipElement);
    });

    // 3. Lógica do Carrossel (Loop de 30 segundos)
    let currentTipIndex = 0;
    const slides = document.querySelectorAll('#tips-carousel .tip-slide');
    const totalTips = slides.length;

    if (totalTips > 1) {
        setInterval(() => {
            // Esconde o slide atual
            slides[currentTipIndex].classList.remove('active');

            // Calcula o próximo índice
            currentTipIndex = (currentTipIndex + 1) % totalTips; // O % faz o loop voltar ao 0

            // Mostra o próximo slide
            slides[currentTipIndex].classList.add('active');
        }, 30000); // 30000 milissegundos = 30 segundos
    }
});