// Data em que começaram a namorar (formato: Ano, Mês - 1, Dia, Hora, Minuto)
const startDate = new Date(2023, 2, 10, 22, 0, 0); // 10 de março de 2023 às 22h

function updateCounter() {
    const now = new Date();
    let difference = now - startDate;

    const years = Math.floor(difference / (1000 * 60 * 60 * 24 * 365));
    difference -= years * 1000 * 60 * 60 * 24 * 365;

    const months = Math.floor(difference / (1000 * 60 * 60 * 24 * 30));
    difference -= months * 1000 * 60 * 60 * 24 * 30;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    difference -= days * 1000 * 60 * 60 * 24;

    const hours = Math.floor(difference / (1000 * 60 * 60));
    difference -= hours * 1000 * 60 * 60;

    const minutes = Math.floor(difference / (1000 * 60));
    difference -= minutes * 1000 * 60;

    const seconds = Math.floor(difference / 1000);

    document.getElementById('timeCounter').innerHTML = `
        <i class="fas fa-heart"></i> 
        ${years} anos, ${months} meses, ${days} dias, 
        ${hours} horas, ${minutes} minutos, ${seconds} segundos 
        <i class="fas fa-heart"></i>
    `;
}

// Atualiza o contador a cada segundo
setInterval(updateCounter, 1000);

// Função para mostrar uma mensagem ao clicar na foto
function showMessage(photoNumber) {
    const messages = {
        1: "Nós estávamos muito lindos nesse dia! 💖",
        2: "Nossa primeira fotinha mo 💖",
        3: "Somos muito engraçadinhos kakakakaka. Te amo! 🌹",
        4: "Nosso rolezin de motoca! 💕"
    };

    alert(messages[photoNumber]);
}
