// =========================================================================
// SEÇÃO 7: LÓGICA DE NAVEGAÇÃO (Menu Hamburger)
// =========================================================================

const navButton = document.querySelector('#nav-button');
const navBar = document.querySelector('#nav-bar');

if (navButton && navBar) {
    navButton.addEventListener('click', () => {
        navButton.classList.toggle('show');  
        navBar.classList.toggle('show');
    });
}

// =========================================================================
// SEÇÃO 8 (Parte 2): LÓGICA DO RODAPÉ (Ano Atual e Última Modificação)
// =========================================================================

document.addEventListener('DOMContentLoaded', function() {
    const yearEl = document.getElementById('currentyear');
    if (yearEl) {
        const currentYear = new Date().getFullYear();
        yearEl.textContent = currentYear;
    }
    
    const lastModifiedEl = document.getElementById('lastModified');
    if (lastModifiedEl) {
        const lastModified = document.lastModified;
        lastModifiedEl.textContent = `Last modified: ${lastModified}`;
    }
});

// =========================================================================
// SEÇÃO 9, 10, 11: LÓGICA DO DIRETÓRIO DE MEMBROS
// =========================================================================

const memberList = document.getElementById('member-list');
const jsonURL = 'data/companies.json';

// Só executa o carregamento se o contêiner do diretório existir (ideal para reutilização)
if (memberList) {
    
    async function getCompanyData() {
        try {
            // A. FAZ A REQUISIÇÃO: Usa fetch para buscar o arquivo JSON
            const response = await fetch(jsonURL);

            // Verifica se a requisição falhou
            if (!response.ok) {
                throw new Error(`Erro na requisição: ${response.status} - ${response.statusText}`);
            }

            // B. PROCESSA O JSON
            const data = await response.json();
            
            // C. CHAMA A EXIBIÇÃO
            displayMembers(data.companies);

        } catch (error) {
            console.error('Falha ao carregar o diretório:', error);
            memberList.innerHTML = `<p class="error-loading">Erro ao carregar dados. Verifique o console para mais detalhes.</p>`;
        }
    }

    function displayMembers(companies) {
        companies.forEach(company => {
            const card = document.createElement('section');
            card.classList.add('company-card');
            
            let levelName = 'Member'; 
            if (company.membership_level === 3) {
                levelName = 'Gold';
            } else if (company.membership_level === 2) {
                levelName = 'Silver';
            } 

            card.innerHTML = `
                <img src="images/${company.image_filename}" 
                    alt="Logo da ${company.name}" 
                    loading="lazy" 
                    width="100" height="100">
                
                <h3>${company.name}</h3>
                <p>Endereço: ${company.address}</p>
                <p>Telefone: ${company.phone}</p>
                <p>Website: <a href="${company.website}" target="_blank">${company.website}</a></p>
                
                <hr>
                <p class="membership-level">
                    Nível: <strong>${levelName}</strong> (Code: ${company.membership_level})
                </p>
                <p class="services-list">
                    Serviços: ${company.services.join(' | ')}
                </p>
            `;

            memberList.appendChild(card);
        });
    }

    // Chama a função para iniciar o carregamento dos dados
    getCompanyData();
}