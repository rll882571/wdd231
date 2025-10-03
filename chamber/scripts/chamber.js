// ========================================================================
// ARQUIVO: chamber.js
// Este arquivo contém a lógica comum e também blocos separados
// para as páginas: DIRECTORY e HOME
// ========================================================================


// =========================================================================
// SEÇÃO 1: LÓGICA DE NAVEGAÇÃO (Menu Hamburger) - COMUM A TODAS AS PÁGINAS
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
// SEÇÃO 2: LÓGICA DO RODAPÉ (Ano Atual e Última Modificação) - COMUM
// =========================================================================

document.addEventListener('DOMContentLoaded', function() {
    // Inserir Ano Atual
    const yearEl = document.getElementById('currentyear');
    if (yearEl) {
        const currentYear = new Date().getFullYear();
        yearEl.textContent = currentYear;
    }
    
    // Inserir Data da Última Modificação
    const lastModifiedEl = document.getElementById('lastModified');
    if (lastModifiedEl) {
        const lastModified = document.lastModified;
        lastModifiedEl.textContent = `Last modified: ${lastModified}`;
    }
});


// #########################################################################
// ########################### PÁGINA DIRECTORY ############################
// #########################################################################

// =========================================================================
// SEÇÃO 3: LÓGICA DO DIRETÓRIO DE MEMBROS E VISUALIZAÇÃO
// =========================================================================

const memberList = document.getElementById('member-list'); 
const jsonURL = 'data/members.json'; 

if (memberList) {
    
    // Configuração padrão: visual em grid
    memberList.classList.add('grid');
    
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
        memberList.innerHTML = ''; 
        companies.forEach(company => {
            const card = document.createElement('section');
            card.classList.add('company-card');
            
            let levelName = 'Basic Member'; 
            if (company.membership_level === 3) levelName = 'Gold';
            else if (company.membership_level === 2) levelName = 'Silver';

            card.innerHTML = `
                <img src="images/${company.image_filename}" 
                     alt="Logo da ${company.name}" 
                     loading="lazy" width="100" height="100">
                
                <h3>${company.name}</h3>
                <p>Endereço: ${company.address}</p>
                <p>Telefone: ${company.phone}</p>
                <p>Website: <a href="${company.website}" target="_blank">${company.website}</a></p>
                
                <hr>
                <p class="membership-level">Nível: <strong>${levelName}</strong></p>
                <p class="services-list">Serviços: ${company.services.join(' | ')}</p>
            `;

            memberList.appendChild(card);
        });
    }

    // Inicia carregamento
    getCompanyData();

    // Alternar visualização GRID/LIST
    const gridbutton = document.querySelector("#grid");
    const listbutton = document.querySelector("#list");
    const display = memberList; 

    gridbutton?.addEventListener("click", () => {
        display.classList.add("grid");
        display.classList.remove("list");
    });

    listbutton?.addEventListener("click", () => {
        display.classList.add("list");
        display.classList.remove("grid");
    });
}


// #########################################################################
// ############################# PÁGINA HOME ###############################
// #########################################################################

// =========================================================================
// SEÇÃO 4: LÓGICA DOS CARDS DA HOME (home-grid2)
// =========================================================================

const container = document.getElementById('home-grid2');

if (container) {
    fetch('./data/members.json')
        .then(response => response.json())
        .then(data => {
            const companies = data.companies;
            const top3 = companies.slice(0, 3);

            top3.forEach(company => {
                const card = document.createElement('section');
                card.classList.add('card');

                card.innerHTML = `
                    <div class="business-info">
                        <h2>${company.name}</h2>
                        <p class="tag-line">${company.services[0]}</p>
                        
                        <div class="details">
                            <div class="image-placeholder">
                                <img src="./images/${company.image_filename}" 
                                     alt="${company.name}" 
                                     style="width: 100%; height: 100%; object-fit: cover; border-radius: 5px;">
                            </div>
                            <div class="contact-details">
                                <p><strong>PHONE:</strong> ${company.phone}</p>
                                <p><strong>URL:</strong> <a href="${company.website}" target="_blank">${company.website}</a></p>
                            </div>
                        </div>
                    </div>
                `;

                container.appendChild(card);
            });
        })
        .catch(error => console.error('Erro ao carregar o JSON:', error));
}
