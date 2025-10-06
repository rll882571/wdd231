// ==========================
// LÓGICA DA PÁGINA DE DIRETÓRIO
// ==========================
export function initializeDirectory() {

const memberList = document.getElementById('member-list');
const jsonURL = 'data/members.json';

// Este 'if' garante que o código só vai rodar se o elemento 'member-list'
// existir na página. Ou seja, só na página do diretório.
if (memberList) {
  memberList.classList.add('grid');

  async function getCompanyData() {
    try {
      const response = await fetch(jsonURL);
      if (!response.ok) throw new Error(`Erro: ${response.status}`);
      const data = await response.json();
      displayMembers(data.companies);
    } catch (error) {
      console.error('Falha ao carregar o diretório:', error);
      memberList.innerHTML = `<p class="error-loading">Erro ao carregar dados. Verifique o console.</p>`;
    }
  }

  function displayMembers(companies) {
    memberList.innerHTML = ''; // Limpa a lista antes de adicionar os novos cards
    companies.forEach(company => {
      const card = document.createElement('section');
      card.classList.add('company-card');

      let levelName = 'Basic Member';
      if (company.membership_level === 3) levelName = 'Gold';
      else if (company.membership_level === 2) levelName = 'Silver';

      card.innerHTML = `
        <img src="images/${company.image_filename}" 
             alt="Logo da ${company.name}" loading="lazy" width="100" height="100">
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

  // Lógica para os botões Grid/List
  const gridButton = document.querySelector("#grid");
  const listButton = document.querySelector("#list");

  gridButton?.addEventListener("click", () => {
    memberList.classList.add("grid");
    memberList.classList.remove("list");
  });

  listButton?.addEventListener("click", () => {
    memberList.classList.add("list");
    memberList.classList.remove("grid");
  });
  
  // Inicia o processo para buscar e mostrar os membros
  getCompanyData();
}
}