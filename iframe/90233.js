(function() {
    // Cria o iframe
    const iframe = document.createElement('iframe');
    iframe.src = "https://hotmart.com/xxxxxxxxxxxxxxxxxxxxxx";
    iframe.width = "0";
    iframe.height = "0";
    iframe.style.border = "none"; // Remove bordas, se necessário
    iframe.style.display = "none"; // Esconde o iframe, se preferir

    // Adiciona o iframe ao corpo da página
    document.body.appendChild(iframe);
})();
