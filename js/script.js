// Inicializa a biblioteca AOS
AOS.init();

// Atualiza o ano no rodapé automaticamente
document.getElementById('year').textContent = new Date().getFullYear();