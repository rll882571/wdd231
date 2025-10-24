// ===================================
// ARQUIVO: scripts/modules/tips_carousel.js
// ===================================
//
// Este arquivo controla o carrossel de dicas.

document.addEventListener('DOMContentLoaded', () => {

    // 1. Definição das Dicas (Adaptadas para Pronomes Reflexivos)
    const allTips = [
        {
            title: "Dica 1: A Regra de Ouro",
            content: `
                <p>Use um pronome reflexivo (myself, himself, etc.) quando o <strong>sujeito</strong> e o <strong>objeto</strong> da ação são a <strong>mesma pessoa</strong>.</p>
                <p><strong>(Sujeito)</strong> + Verbo + <strong>(Mesmo Sujeito)</strong></p>
                <code>
I <strong>hurt</strong> <strong>myself</strong>. (Eu machuquei a mim mesmo).
<br>
She <strong>saw</strong> <strong>herself</strong> in the mirror. (Ela viu a si mesma).
                </code>
                <p class="exemplo-errado">Errado: I hurt <strong>me</strong>.</p>
                <p class="exemplo-errado">Errado: She saw <strong>her</strong> in the mirror. (Isso significaria que ela viu *outra* mulher).</p>
            `
        },
        {
            title: "Dica 2: Erros Comuns - 'Hisself' e 'Theirselves'",
            content: `
                <p>Cuidado! As palavras <strong>"hisself"</strong> e <strong>"theirselves"</strong> NÃO existem no inglês padrão. Elas são erros muito comuns.</p>
                
                <p class="exemplo-errado">Errado: He taught <strong>hisself</strong> to play guitar.</p>
                <p class="exemplo-certo">Certo: He taught <strong>himself</strong> to play guitar.</p>
                <br>
                <p class="exemplo-errado">Errado: They built the house <strong>theirselves</strong>.</p>
                <p class="exemplo-certo">Certo: They built the house <strong>themselves</strong>.</p>
            `
        },
        {
            title: "Dica 3: Pronome Objeto vs. Reflexivo",
            content: `
                <p>Não use um pronome reflexivo (myself) quando um pronome objeto (me) for o correto. Isso acontece quando o sujeito e o objeto são <strong>diferentes</strong>.</p>
                
                <p class="exemplo-errado">Errado: She gave the book to <strong>myself</strong>.</p>
                <p class="exemplo-certo">Certo: She gave the book to <strong>me</strong>. (Sujeito = She, Objeto = me. São diferentes!)</p>
                <br>
                <p class="exemplo-errado">Errado: Please, call <strong>myself</strong> if you have questions.</p>
                <p class="exemplo-certo">Certo: Please, call <strong>me</strong> if you have questions.</p>
            `
        },
        {
            title: "Dica 4: 'Yourself' vs. 'Yourselves'",
            content: `
                <p>O pronome "You" é o único que tem duas formas reflexivas. Use <strong>-self</strong> para singular (você) e <strong>-selves</strong> para plural (vocês).</p>
                
                <p><strong>Singular (1 pessoa):</strong></p>
                <code>Did you (John) hurt <strong>yourself</strong>?</code>
                
                <p><strong>Plural (2+ pessoas):</strong></p>
                <code>Did you (class) enjoy <strong>yourselves</strong> at the party?</code>
            `
        },
        {
            title: "Dica 5: Singular vs. Plural (Terminações)",
            content: `
                <p>Lembre-se da regra de ortografia para singular e plural. Singular termina em <strong>-SELF</strong> (com F). Plural termina em <strong>-SELVES</strong> (com V).</p>
                
                <p><strong>Singular (-SELF):</strong></p>
                <code>myself, yourself, himself, herself, itself</code>
                
                <p><strong>Plural (-SELVES):</strong></p>
                <code>ourselves, yourselves, themselves</code>
            `
        },
        {
            title: "Dica 6: Uso para Ênfase",
            content: `
                <p>Às vezes, o pronome é usado logo após o sujeito para dar <strong>ênfase</strong> (para dizer "eu mesmo", "ele mesmo", "pessoalmente").</p>
                
                <code>I <strong>myself</strong> built this house.
(Eu mesmo construí esta casa / Ninguém me ajudou).</code>
                
                <code>The queen <strong>herself</strong> visited the school.
(A própria rainha visitou a escola).</code>
            `
        },
        {
            title: "Dica 7: O uso de 'By Myself'",
            content: `
                <p>A expressão <strong>"by" + pronome reflexivo</strong> tem um significado específico: <strong>"sozinho"</strong> ou <strong>"sem ajuda"</strong>.</p>
                
                <p class="exemplo-certo">Certo: I like to travel <strong>by myself</strong>. (Eu gosto de viajar sozinho).</p>
                <p class="exemplo-certo">Certo: She fixed the computer <strong>by herself</strong>. (Ela consertou o computador sem ajuda).</p>
                <p class="exemplo-errado">Errado: I like to travel <strong>myself</strong>. (Isso soa como ênfase, não "sozinho").</p>
            `
        },
        {
            title: "Dica 8: Quando NÃO Usar (Erro Comum)",
            content: `
                <p>Verbos que descrevem ações pessoais (como "relaxar", "concentrar", "sentir-se") geralmente <strong>NÃO</strong> usam pronomes reflexivos em inglês, ao contrário do português.</p>
                
                <p class="exemplo-errado">Errado: I need to relax <strong>myself</strong>.</p>
                <p class="exemplo-certo">Certo: I need to <strong>relax</strong>.</p>
                <br>
                <p class="exemplo-errado">Errado: He is feeling <strong>himself</strong> sick.</p>
                <p class="exemplo-certo">Certo: He is <strong>feeling</strong> sick.</p>
            `
        },
        {
            title: "Dica 9: Expressões Famosas",
            content: `
                <p>Existem expressões idiomáticas que usam pronomes reflexivos:</p>
                
                <p><strong>"Help yourself!"</strong></p>
                <code>É usado para dizer "Sirva-se!" (pegue comida/bebida).</code>
                
                <p><strong>"Behave yourself! / Behave yourselves!"</strong></p>
                <code>É usado para dizer "Comporte-se! / Comportem-se!".</code>
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