
import { initializeCommon } from './common.mjs';

// Inicializa funcionalidades comuns (menu hamburger, footer, etc.)
initializeCommon();

// Verifica em qual página estamos e carrega o módulo específico
if (window.location.pathname.includes('test.html') || 
    window.location.pathname.includes('test-simulator.html')) {
    // Carrega o módulo do teste
    import('./test.js')
        .then(module => {
            console.log('Test module loaded');
        })
        .catch(err => console.error('Error loading test module:', err));
} else if (window.location.pathname.includes('index.html') || 
           window.location.pathname === '/' || 
           window.location.pathname.endsWith('/')) {
    // Carrega o módulo da home
    import('./home.js')
        .then(module => {
            console.log('Home module loaded');
        })
        .catch(err => console.error('Error loading home module:', err));
}