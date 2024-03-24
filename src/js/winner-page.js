const audio = document.querySelector('#audio')
        audio.oncanplay = () => {
            this.play()
        }

        confetti()
        setInterval(() => {
            confetti()
        }, 2000)
        setInterval(() => {
            confetti()
        }, 2000)
        setInterval(() => {
            confetti()
        }, 2000)


// winner-page.js

// Função para mostrar o vencedor
function showWinner() {
    const lastWinner = localStorage.getItem('lastWinner');
    document.getElementById('winner-name').textContent = lastWinner;
}

// Função para iniciar a contagem regressiva
function startCountdown() {
    window.location.href = 'countdown.html';
}

// Função para ir para a página inicial
function goToIndex() {
    window.location.href = '../../index.html';
}

// Inicia a exibição do vencedor quando a página é carregada
showWinner();

