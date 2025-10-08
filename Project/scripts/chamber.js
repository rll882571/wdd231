document.addEventListener('DOMContentLoaded', () => {

  // ==========================
  // MENU HAMBURGER
  // ==========================
  const navButton = document.querySelector('#nav-button');
  const navBar = document.querySelector('#nav-bar');

  if (navButton && navBar) {
    navButton.addEventListener('click', () => {
      navButton.classList.toggle('show');  
      navBar.classList.toggle('show');
    });
  }

  // ==========================
  // RODAPÉ
  // ==========================
  const yearEl = document.getElementById('currentyear');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  const lastModifiedEl = document.getElementById('lastModified');
  if (lastModifiedEl) lastModifiedEl.textContent = `Last modified: ${document.lastModified}`;

  // ==========================
  // DIRETÓRIO DE MEMBROS
  // ==========================
  const memberList = document.getElementById('member-list'); 
  const jsonURL = 'data/members.json'; 

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
      memberList.innerHTML = '';
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

    getCompanyData();

    // Grid/List Toggle
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
  }

  // ==========================
  // CHAMBER CARDS (home-grid2)
  // ==========================
   // CÓDIGO CORRIGIDO (Copie e cole este bloco inteiro)

const container2 = document.getElementById('home-grid2');
if (container2) {
  fetch('./data/members.json')
    .then(resp => resp.json())
    .then(data => {
      // 1. Filtra para pegar apenas membros Gold (3) e Silver (2)
      const highLevelMembers = data.companies.filter(company =>
        company.membership_level === 2 || company.membership_level === 3
      );

      // 2. Embaralha (randomiza) a lista de membros filtrada
      // Algoritmo de Fisher-Yates para embaralhar
      for (let i = highLevelMembers.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [highLevelMembers[i], highLevelMembers[j]] = [highLevelMembers[j], highLevelMembers[i]];
      }

      // 3. Pega os 3 primeiros membros da lista já embaralhada
      const spotlights = highLevelMembers.slice(0, 3);

      // 4. Usa a nova lista 'spotlights' para criar os cards
      spotlights.forEach(company => {
        const card = document.createElement('section');
        card.classList.add('card');
        card.innerHTML = `
          <div class="business-info">
            <h2>${company.name}</h2>
            <p class="tag-line">${company.services[0]}</p>
            <div class="details">
              <div class="image-placeholder">
                <img src="./images/${company.image_filename}" alt="${company.name}" 
                     style="width: 100%; height: 100%; object-fit: cover; border-radius: 5px;">
              </div>
              <div class="contact-details">
                <p><strong>PHONE:</strong> ${company.phone}</p>
                <p><strong>URL:</strong> <a href="${company.website}" target="_blank">${company.website}</a></p>
              </div>
            </div>
          </div>
        `;
        container2.appendChild(card);
      });
    })
    .catch(err => console.error('Erro ao carregar JSON:', err));
}

  // ==========================
  // SESSÕES DINÂMICAS (home-grid)
  // ==========================
  const homeGrid = document.getElementById("home-grid");
  if (homeGrid) {
    // Sessão 1: Events
    const eventsSection = document.createElement("section");
    eventsSection.id = "events";
    eventsSection.classList.add("card");
    eventsSection.innerHTML = `
      <h2>Current Event(s)</h2>
      <p>Example event: Local Business Mixer on Saturday at 10 AM.</p>
      <p>Next Event: Digital Marketing Workshop (Tuesday).</p>
    `;
    homeGrid.appendChild(eventsSection);

    // Sessão 2: Weather
    const weatherSection = document.createElement("section");
    weatherSection.id = "weather";
    weatherSection.classList.add("card");
    weatherSection.innerHTML = `
     <h2>Current Weather</h2>
     <div id="weather-display">
     <div id="current-weather">
      <p id="temp-current">--</p>
      <img id="weather-icon" src="" alt="Weather Icon">
      <p id="weather-description">--</p>
      </div>
     </div>
`;
    homeGrid.appendChild(weatherSection);
   

    // Sessão 3: Spotlights
    // CÓDIGO CORRIGIDO
   const spotlightsSection = document.createElement("section");
   spotlightsSection.id = "spotlights";
   spotlightsSection.classList.add("card");
   spotlightsSection.innerHTML = `<h2>Weather Forecast</h2><div id="forecast-days"></div>`; // <-- ID corrigido!
   homeGrid.appendChild(spotlightsSection);

    // ==========================
    // API WEATHER
    // ==========================
    const tempEl = document.getElementById('temp-current');
    const iconEl = document.getElementById('weather-icon');
    const descEl = document.getElementById('weather-description');

    const weatherURL = 'https://api.openweathermap.org/data/2.5/weather?lat=3.73&lon=38.52&units=metric&appid=77bc9df4dcd1687411c2db397682c283';
    // URL para a previsão (inclui os próximos 5 dias, de 3 em 3 horas)
    const forecastURL = 'https://api.openweathermap.org/data/2.5/forecast?lat=3.73&lon=38.52&units=metric&appid=77bc9df4dcd1687411c2db397682c283&lang=pt_br';
    async function fetchWeather() {
      try {
        const resp = await fetch(weatherURL);
        if (!resp.ok) throw new Error('Erro na API de Weather');
        const data = await resp.json();
        displayWeather(data);
      } catch (err) {
        console.error(err);
      }
    }
    async function fetchForecast() {
  try {
    const resp = await fetch(forecastURL);
    if (!resp.ok) throw new Error('Erro na API de Forecast');
    const data = await resp.json();

    // Filtra só registros do meio-dia e pega só 3 dias
    const dailyForecasts = data.list.filter(item =>
      item.dt_txt.includes("12:00:00")
    ).slice(0, 3);

    const forecastContainer = document.getElementById('forecast-days');
    forecastContainer.innerHTML = '';

    dailyForecasts.forEach(day => {
      const date = new Date(day.dt * 1000);
      const dayName = date.toLocaleDateString('pt-BR', { weekday: 'short' });

      const div = document.createElement('div');
      div.classList.add('forecast-day');
      div.innerHTML = `
        <p class="day-name">${dayName.replace('.', '')}</p>
        <img src="https://openweathermap.org/img/wn/${day.weather[0].icon}.png" alt="${day.weather[0].description}">
        <p class="temp">${Math.round(day.main.temp)}°C</p>
      `;
      forecastContainer.appendChild(div);
    });

  } catch (err) {
    console.error(err);
  }
}



    function displayWeather(data) {
      const temp = data.main.temp.toFixed(1);
      const description = data.weather[0].description;
      const iconCode = data.weather[0].icon;
      const iconSrc = `https://openweathermap.org/img/w/${iconCode}.png`;
      const capitalizedDesc = description.split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');

      tempEl.textContent = `${temp}°C`;
      iconEl.setAttribute('src', iconSrc);
      iconEl.setAttribute('alt', capitalizedDesc);
      descEl.textContent = capitalizedDesc;
    }

    fetchWeather();
    fetchForecast();
  }

}); // Fim do DOMContentLoaded
