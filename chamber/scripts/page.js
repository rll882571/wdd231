// 1. DADOS DOS CURSOS (Array de Objetos)
// Colocamos os dados principais no topo.
const courses = [
    { subject: 'CSE', number: 110, title: 'Introduction to Programming', credits: 2, completed: true },
    { subject: 'WDD', number: 130, title: 'Web Fundamentals', credits: 2, completed: true },
    { subject: 'CSE', number: 111, title: 'Programming with Functions', credits: 2, completed: true },
    { subject: 'CSE', number: 210, title: 'Programming with Classes', credits: 2, completed: false },
    { subject: 'WDD', number: 131, title: 'Web Frontend Development', credits: 2, completed: true },
    { subject: 'WDD', number: 330, title: 'Web Frontend Development II', credits: 2, completed: false }
];

// 2. FUNÇÕES PRINCIPAIS
// Aqui definimos as "ferramentas" que vamos usar: uma para exibir cursos e outra para calcular créditos.
function calculateTotalCredits(filteredCourses) {
    const total = filteredCourses.reduce((sum, course) => sum + course.credits, 0);
    document.querySelector('#total-credits').textContent = total;
}

function displayCourses(courseArray) {
    const grid = document.querySelector('#course-grid');
    grid.innerHTML = ''; // Limpa o grid antes de adicionar novos cursos

    courseArray.forEach(course => {
        const courseElement = document.createElement('div');
        courseElement.classList.add('inner');
        
        if (course.completed) {
            courseElement.classList.add('completed');
        }
        
        courseElement.innerHTML = `
            <h3>${course.subject} ${course.number}</h3>
            <p>${course.title}</p>
            <p>Credits: ${course.credits}</p>
        `;
        grid.appendChild(courseElement);
    });

    calculateTotalCredits(courseArray);
}

// 3. EVENT LISTENERS (CÓDIGO QUE RODA COM INTERAÇÃO)
// Esta parte faz os botões e outras interações funcionarem.

// Filtros dos Cursos
document.querySelector('#all').addEventListener('click', () => {
    displayCourses(courses);
});

document.querySelector('#cse').addEventListener('click', () => {
    const cseCourses = courses.filter(course => course.subject === 'CSE');
    displayCourses(cseCourses);
});

document.querySelector('#wdd').addEventListener('click', () => {
    const wddCourses = courses.filter(course => course.subject === 'WDD');
    displayCourses(wddCourses);
});

// Lógica do Menu Hamburger (seu código antigo)
const navButton = document.querySelector('#nav-button');
const navBar = document.querySelector('#nav-bar');

navButton.addEventListener('click', () => {
  navButton.classList.toggle('show');  
  navBar.classList.toggle('show');
});

// 4. CÓDIGO QUE RODA QUANDO A PÁGINA CARREGA
// Exibe todos os cursos assim que a página é aberta.
displayCourses(courses);

// Rodapé: Ano e Data de Modificação (seu código antigo)
document.addEventListener('DOMContentLoaded', function() {
  const yearEl = document.getElementById('currentyear');
  const currentYear = new Date().getFullYear();
  yearEl.textContent = currentYear;
  
  const lastModifiedEl = document.getElementById('lastModified');
  const lastModified = document.lastModified;
  lastModifiedEl.textContent = `Last modified: ${lastModified}`;
});
// 1. Seleciona o contêiner onde os cartões serão exibidos
const memberList = document.getElementById('member-list');

// 2. Define o caminho para o seu arquivo JSON
// Certifique-se de que o nome 'companies.json' está correto no seu projeto.
const jsonURL = 'companies.json'; 

// Função principal assíncrona para buscar e processar os dados
async function getCompanyData() {
    try {
        // A. FAZ A REQUISIÇÃO: Usa fetch para buscar o arquivo JSON
        const response = await fetch(jsonURL);

        // Verifica se a requisição falhou (ex: arquivo não encontrado, erro 404)
        if (!response.ok) {
            throw new Error(`Erro na requisição: ${response.status} - ${response.statusText}`);
        }

        // B. PROCESSA O JSON: Converte a resposta para um objeto JavaScript
        const data = await response.json();
        
        // C. CHAMA A EXIBIÇÃO: Envia o array de empresas para a função que cria o HTML
        displayMembers(data.companies);

    } catch (error) {
        // Trata e exibe qualquer erro (ex: problema de rede ou no JSON)
        console.error('Falha ao carregar o diretório:', error);
        memberList.innerHTML = `<p class="error-loading">Erro ao carregar dados. Verifique o console para mais detalhes.</p>`;
    }
}

// Função para iterar sobre os dados e criar os cartões HTML
function displayMembers(companies) {
    companies.forEach(company => {
        // Cria o elemento principal para o cartão (card)
        const card = document.createElement('section');
        card.classList.add('company-card'); // Use esta classe para estilizar no CSS
        
        // Determina o nome do nível de associação com base no número
        let levelName = '';
        if (company.membership_level === 3) {
            levelName = 'Gold';
        } else if (company.membership_level === 2) {
            levelName = 'Silver';
        } else {
            levelName = 'Member'; // Nível 1 ou outro
        }

        // Constrói todo o conteúdo HTML do cartão
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

        // Adiciona o cartão pronto ao contêiner na página
        memberList.appendChild(card);
    });
}

// Chama a função para iniciar o carregamento dos dados quando o script for executado
getCompanyData();
