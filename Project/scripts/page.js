
// SEÇÃO 1
const courses = [
    { subject: 'CSE', number: 110, title: 'Introduction to Programming', credits: 2, completed: true },
    { subject: 'WDD', number: 130, title: 'Web Fundamentals', credits: 2, completed: true },
    { subject: 'CSE', number: 111, title: 'Programming with Functions', credits: 2, completed: true },
    { subject: 'CSE', number: 210, title: 'Programming with Classes', credits: 2, completed: false },
    { subject: 'WDD', number: 131, title: 'Web Frontend Development', credits: 2, completed: true },
    { subject: 'WDD', number: 330, title: 'Web Frontend Development II', credits: 2, completed: false }
];

// SEÇÃO 2
// Esta parte do código cria os cartões dos cursos e os exibe na página.
function calculateTotalCredits(filteredCourses) {
    const total = filteredCourses.reduce((sum, course) => sum + course.credits, 0);
    document.querySelector('#total-credits').textContent = total;
}
// SEÇÃO 3
function displayCourses(courseArray) {
    const grid = document.querySelector('#course-grid');
    grid.innerHTML = ''; 

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

/// SEÇÃO 4
document.querySelector('#all').addEventListener('click', () => {
    displayCourses(courses);
});
// SEÇÃO 5
document.querySelector('#cse').addEventListener('click', () => {
    const cseCourses = courses.filter(course => course.subject === 'CSE');
    displayCourses(cseCourses);
});
// SEÇÃO 6
document.querySelector('#wdd').addEventListener('click', () => {
    const wddCourses = courses.filter(course => course.subject === 'WDD');
    displayCourses(wddCourses);
});

// SEÇÃO 7
const navButton = document.querySelector('#nav-button');
const navBar = document.querySelector('#nav-bar');

navButton.addEventListener('click', () => {
  navButton.classList.toggle('show');  
  navBar.classList.toggle('show');
});

/// SEÇÃO 8
displayCourses(courses);

document.addEventListener('DOMContentLoaded', function() {
  const yearEl = document.getElementById('currentyear');
  const currentYear = new Date().getFullYear();
  yearEl.textContent = currentYear;
  
  const lastModifiedEl = document.getElementById('lastModified');
  const lastModified = document.lastModified;
  lastModifiedEl.textContent = `Last modified: ${lastModified}`;
});
// SEÇÃO 9
const memberList = document.getElementById('member-list');
const jsonURL = 'companies.json'; 
// SEÇÃO 10
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

// SEÇÃO 11
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
