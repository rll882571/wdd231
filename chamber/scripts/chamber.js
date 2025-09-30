// VARIÁVEIS DE CONFIGURAÇÃO
const jsonURL = 'data/members.json'; // <--- CORREÇÃO DE CAMINHO E NOME!
const memberList = document.querySelector('#member-list');

// ----------------- FUNÇÃO PRINCIPAL: BUSCA (FETCH) -----------------

async function getCompanyData() {
    try {
        // 1. Faz a requisição HTTP usando fetch e async/await
        const response = await fetch(jsonURL);

        // Trata erros de requisição (como arquivo não encontrado - 404)
        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status} - Falha ao carregar o JSON.`);
        }
        
        // 2. Converte a resposta para um objeto JavaScript (JSON)
        const data = await response.json();
        
        // 3. Chama a função de exibição, passando o array de empresas
        displayMembers(data.companies);

    } catch (error) {
        console.error('Falha crítica ao carregar o diretório:', error);
        memberList.innerHTML = `<p class="error-loading">Não foi possível carregar o diretório de empresas. (Verifique o console para detalhes)</p>`;
    }
}

// ----------------- FUNÇÃO DE EXIBIÇÃO: CRIAÇÃO DO CARD -----------------

const displayMembers = (companies) => {
    companies.forEach((company) => {
        
        // Cria o elemento principal para o cartão
        let card = document.createElement('section');
        card.classList.add('company-card');
        
        // Define o nome do nível de associação (Gold, Silver, Member)
        let levelName;
        let levelClass;
        switch (company.membership_level) {
            case 3:
                levelName = 'Gold';
                levelClass = 'gold';
                break;
            case 2:
                levelName = 'Silver';
                levelClass = 'silver';
                break;
            default:
                levelName = 'Member';
                levelClass = 'member';
        }
        
        // Constrói o conteúdo HTML completo do cartão usando template literals
        card.innerHTML = `
            <img src="images/${company.image_filename}" 
                 alt="Logo da ${company.name}" 
                 loading="lazy" 
                 width="100" height="100">
            
            <h3>${company.name}</h3>
            <p><strong>Endereço:</strong> ${company.address}</p>
            <p><strong>Telefone:</strong> ${company.phone}</p>
            <p><strong>Website:</strong> <a href="${company.website}" target="_blank">${company.website}</a></p>
            
            <hr>
            <p class="membership-level ${levelClass}">
                Nível: <strong>${levelName}</strong>
            </p>
            <p class="services-list">
                Serviços: ${company.services.join(', ')}
            </p>
        `;

        // Anexa o cartão pronto à seção #member-list no HTML
        memberList.appendChild(card);
    });
}

// INICIA O PROCESSO DE CARREGAMENTO DE DADOS
getCompanyData();