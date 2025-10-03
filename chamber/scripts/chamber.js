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
  const container2 = document.getElementById('home-grid2');
  if (container2) {
    fetch('./data/members.json')
      .then(resp => resp.json())
      .then(data => {
        const top3 = data.companies.slice(0, 3);
        top3.forEach(company => {
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
        <h3>3-Day Forecast</h3>
        <div id="forecast-days"></div>
      </div>
    `;
    homeGrid.appendChild(weatherSection);

    // Sessão 3: Spotlights
    const spotlightsSection = document.createElement("section");
    spotlightsSection.id = "spotlights";
    spotlightsSection.classList.add("card");
    spotlightsSection.innerHTML = `<h2>Weather Forecast</h2><div id="spotlight-cards"></div>`;
    homeGrid.appendChild(spotlightsSection);

    // ==========================
    // API WEATHER
    // ==========================
    const tempEl = document.getElementById('temp-current');
    const iconEl = document.getElementById('weather-icon');
    const descEl = document.getElementById('weather-description');

    const weatherURL = 'https://api.openweathermap.org/data/2.5/weather?lat=3.73&lon=38.52&units=metric&appid=77bc9df4dcd1687411c2db397682c283';

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
  }

}); // Fim do DOMContentLoaded
