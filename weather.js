// Seleciona os elementos HTML no documento
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon'); 
const captionDesc = document.querySelector('figcaption');

// A URL completa e válida (com sua chave API e coordenadas de Trier)
const url = 'https://api.openweathermap.org/data/2.5/weather?lat=49.75&lon=6.63&units=metric&appid=77bc9df4dcd1687411c2db397682c283';

// Função para Exibir os Resultados no HTML
function displayResults(data) {
    // Extrai os dados:
    const temp = data.main.temp.toFixed(1); 
    const description = data.weather[0].description; 
    const iconCode = data.weather[0].icon;

    // Constrói a URL do ícone OpenWeatherMap (usando a versão @2x)
const iconSrc = `https://openweathermap.org/img/w/${iconCode}.png`;
    
    // Formata a descrição
    const capitalizedDescription = description.split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
    
    // Atualiza os elementos HTML:
    currentTemp.textContent = `${temp}°C`;
    weatherIcon.setAttribute('src', iconSrc);
    weatherIcon.setAttribute('alt', capitalizedDescription);
    captionDesc.textContent = capitalizedDescription;
}


// Função Assíncrona para Buscar os Dados
async function apiFetch() {
    // Removi o console.log de teste para deixar o código final
    try {
        const response = await fetch(url);
        
        if (response.ok) {
            const data = await response.json();
            
            // Chama a função para exibir os resultados
            displayResults(data); 
            
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

// Invocação da Função
apiFetch();