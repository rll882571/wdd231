// 1. DADOS DOS CURSOS (Array de Objetos)
// Colocamos os dados principais no topo.
const courses = [
    { subject: 'CSE', number: 110, title: 'Introduction to Programming', credits: 2, completed: true },
    { subject: 'WDD', number: 130, title: 'Web Fundamentals', credits: 2, completed: true },
    { subject: 'CSE', number: 111, title: 'Programming with Functions', credits: 2, completed: true },
    { subject: 'CSE', number: 210, title: 'Programming with Classes', credits: 2, completed: false },
    { subject: 'WDD', number: 230, title: 'Web Frontend Development', credits: 2, completed: false },
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