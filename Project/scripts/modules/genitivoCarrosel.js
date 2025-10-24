// ===================================
// ARQUIVO: scripts/modules/tips_carousel.js
// ===================================
//
// Este arquivo controla o carrossel de dicas, agora para o Genitive Case.

document.addEventListener('DOMContentLoaded', () => {

    // 1. Definição das Dicas (Adaptadas para Genitive Case / Caso Genitivo)
    const allTips = [
        {
            title: "Dica 1: A Regra de Ouro (Posse Singular)",
            content: `
                <p>Para indicar a posse de um <strong>substantivo singular</strong> (que não termina em 's'), adicione <strong>apóstrofo + s ('s)</strong>.</p>
                <p><strong>(Possuidor Singular)</strong> + <strong>'s</strong> + <strong>(Coisa Possuída)</strong></p>
                <code>
O carro do John: <strong>John's</strong> car.
<br>
A cauda do cachorro: <strong>The dog's</strong> tail.
                </code>
                <p class="exemplo-errado">Errado: The car of John.</p>
            `
        },
        {
            title: "Dica 2: Posse Plural (Terminado em 's')",
            content: `
                <p>Para indicar a posse de um <strong>substantivo plural</strong> que já termina em <strong>'s'</strong>, adicione <strong>apenas o apóstrofo (')</strong>.</p>
                
                <p><strong>(Possuidor Plural + s)</strong> + <strong>'</strong> + <strong>(Coisa Possuída)</strong></p>
                <p class="exemplo-certo">Certo: Os sapatos dos meninos (boys): <strong>The boys'</strong> shoes.</p>
                <p class="exemplo-certo">Certo: As notas dos estudantes: <strong>The students'</strong> grades.</p>
                <br>
                <p class="exemplo-errado">Errado: The boys<strong>'s</strong> shoes.</p>
            `
        },
        {
            title: "Dica 3: Posse Plural (Irregular)",
            content: `
                <p>Para indicar a posse de um <strong>substantivo plural irregular</strong> (que não termina em 's'), adicione <strong>apóstrofo + s ('s)</strong>, como se fosse um singular.</p>
                
                <p><strong>(Possuidor Plural Irregular)</strong> + <strong>'s</strong> + <strong>(Coisa Possuída)</strong></p>
                <p class="exemplo-certo">Certo: Os brinquedos das crianças: <strong>The children's</strong> toys.</p>
                <p class="exemplo-certo">Certo: O vestiário das mulheres: <strong>The women's</strong> locker room.</p>
                <p class="exemplo-errado">Errado: The children<strong>s'</strong> toys.</p>
            `
        },
        {
            title: "Dica 4: Nomes Próprios em 's'",
            content: `
                <p>Para nomes próprios singulares que terminam em **'s'** (ex: James), o seu livro indica adicionar **'s** (James's). *No entanto, usar apenas **'** (James') também é comum e aceito.*</p>
                
                <p><strong>Regra do Livro:</strong></p>
                <code><strong>Alice's</strong> car (O carro de Alice).</code>
                <code><strong>The boss's</strong> car (O carro do chefe).</code>
                <br>
                <p><strong>Regra Clássica/Bíblica:</strong></p>
                <code><strong>Jesus'</strong> disciples (Os discípulos de Jesus).</code>
            `
        },
        {
            title: "Dica 5: Substantivos Compostos",
            content: `
                <p>Ao usar o Genitive Case com **substantivos compostos** (palavras formadas por mais de uma parte), adicione o <strong>'s</strong> apenas no <strong>último elemento</strong> do composto.</p>
                
                <p><strong>(Substantivo Composto)</strong> + <strong>'s</strong></p>
                <p class="exemplo-certo">Certo: A casa da minha sogra: <strong>My mother-in-law's</strong> house.</p>
                <p class="exemplo-errado">Errado: My <strong>mother's-in-law</strong> house.</p>
            `
        },
        {
            title: "Dica 6: 'of' vs. 's' (Regra Geral)",
            content: `
                <p>O Genitive Case ('s) é usado **principalmente** para <strong>pessoas</strong> e <strong>animais</strong>, substituindo a construção com 'of'.</p>
                
                <p><strong>Pessoa/Animal:</strong> Use 's</p>
                <code>The girl's name. (O nome da menina)</code>
                
                <p><strong>Objeto Inanimado:</strong> Use 'of' (Regra geral, mais formal)</p>
                <code>The color <strong>of the flag</strong>. (A cor da bandeira)</code>
                <code>OU: The flag<strong>'s</strong> color. (Aceito em exceções)</code>
            `
        },
        {
            title: "Dica 7: Dupla Posse ('s) em Parceria",
            content: `
                <p>Para indicar que a posse pertence a <strong>duas ou mais pessoas em conjunto</strong> (parceria), adicione o <strong>'s</strong> apenas no <strong>último nome</strong>.</p>
                
                <p class="exemplo-certo">Certo: A casa de John e Mary: <strong>John and Mary's</strong> house. (Eles compartilham a casa)</p>
                <br>
                <p>Para indicar que cada um tem a <strong>sua própria</strong> coisa, use 's em **cada nome**.</p>
                <p class="exemplo-certo">Certo: Os carros de John e Mary: <strong>John's and Mary's</strong> cars. (Cada um tem seu carro)</p>
            `
        },
        {
            title: "Dica 8: Cuidado com Inanimados (Exceções Comuns)",
            content: `
                <p>Embora o **'of'** seja o padrão para objetos inanimados (Dica 6), o Genitive Case ('s) é comumente usado em algumas exceções:</p>
                
                <p><strong>1. Tempo/Duração:</strong></p>
                <code>A <strong>day's</strong> work (O trabalho de um dia).</code>
                <code>In three <strong>weeks'</strong> time (Em três semanas).</code>

                <p><strong>2. Países, Cidades, Organizações e Corpo Celeste:</strong></p>
                <code><strong>Brazil's</strong> economy (A economia do Brasil).</code>
                <code>The <strong>moon's</strong> surface (A superfície da lua).</code>
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