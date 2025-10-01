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
// SEÇÃO 8: LÓGICA DO RODAPÉ (Ano Atual e Última Modificação)
// =========================================================================

document.addEventListener('DOMContentLoaded', function() {
    // 1. Inserir Ano Atual
    const yearEl = document.getElementById('currentyear');
    if (yearEl) {
        const currentYear = new Date().getFullYear();
        yearEl.textContent = currentYear;
    }
    
    // 2. Inserir Data da Última Modificação
    const lastModifiedEl = document.getElementById('lastModified');
    if (lastModifiedEl) {
        const lastModified = document.lastModified;
        lastModifiedEl.textContent = `Last modified: ${lastModified}`;
    }
});

// =========================================================================
// SEÇÃO 9, 10, 11: LÓGICA DO DIRETÓRIO DE MEMBROS E VISUALIZAÇÃO
// =========================================================================

// memberList é o seu <article id="member-list"> no HTML
const memberList = document.getElementById('member-list'); 

// CORREÇÃO APLICADA: O nome do arquivo JSON deve ser 'members.json'
const jsonURL = 'data/members.json'; 

if (memberList) {
    
    // 1. CONFIGURAÇÃO PADRÃO: Define o visual inicial como "grid"
    memberList.classList.add('grid');
    
    // --- LÓGICA DE CARREGAMENTO DE DADOS (fetch e async/await) ---
    async function getCompanyData() {
        try {
            const response = await fetch(jsonURL);
            
            if (!response.ok) {
                throw new Error(`Erro na requisição: ${response.status} - ${response.statusText}`);
            }

            const data = await response.json();
            displayMembers(data.companies);

        } catch (error) {
            console.error('Falha ao carregar o diretório:', error);
            memberList.innerHTML = `<p class="error-loading">Erro ao carregar dados. Verifique o console para mais detalhes.</p>`;
        }
    }

    function displayMembers(companies) {
        // Limpa o conteúdo antes de preencher
        memberList.innerHTML = ''; 
        
        companies.forEach(company => {
            // Cria o card do membro
            const card = document.createElement('section');
            card.classList.add('company-card');
            
            // Define o nome do nível de associação com base no código
            let levelName = 'Basic Member'; 
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
                    Nível: <strong>${levelName}</strong>
                </p>
                <p class="services-list">
                    Serviços: ${company.services.join(' | ')}
                </p>
            `;

            // Anexa a SECTION ao ARTICLE
            memberList.appendChild(card);
        });
    }

    // Inicia o carregamento dos dados
    getCompanyData();


    // --- LÓGICA DE VISUALIZAÇÃO (Toggle GRID/LIST) ---
    
    const gridbutton = document.querySelector("#grid");
    const listbutton = document.querySelector("#list");
    const display = memberList; 

    gridbutton.addEventListener("click", () => {
        display.classList.add("grid");
        display.classList.remove("list");
    });

    listbutton.addEventListener("click", showList); 

    function showList() {
        display.classList.add("list");
        display.classList.remove("grid");
    }
}