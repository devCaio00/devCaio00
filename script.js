// Seleciona o botão de mudar o tema e a tag <body>
const botaoTema = document.getElementById('toggle-tema');
const body = document.body;

// Adiciona um evento de clique no botão
botaoTema.addEventListener('click', function() {
    // A função toggle liga e desliga a classe 'tema-claro' no body
    body.classList.toggle('tema-claro');
    
    // Altera o texto do botão dependendo do tema atual
    if (body.classList.contains('tema-claro')) {
        botaoTema.textContent = '🌙 Mudar Tema';
    } else {
        botaoTema.textContent = '☀️ Mudar Tema';
    }
});
