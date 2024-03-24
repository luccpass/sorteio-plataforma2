// const audio = document.querySelector('#audio')

//         audio.oncanplay = () => {
//             this.play()
//         }
//         // countdown.js

// // Função para iniciar o contador regressivo
// function startCountdown() {
//     let seconds = 5;
//     const countdownElement = document.querySelector('.countdown');
//     countdownElement.textContent = seconds;

//     const countdownInterval = setInterval(() => {
//         seconds--;
//         if (seconds >= 0) {
//             countdownElement.textContent = seconds;
//         }
//         if (seconds === 0) {
//             clearInterval(countdownInterval);
//             const participants = JSON.parse(localStorage.getItem('participants')) || [];
//             const winnerIndex = Math.floor(Math.random() * participants.length);
//             const winner = participants[winnerIndex];
//             localStorage.setItem('lastWinner', winner);
//             window.location.href = 'winner-page.html';
//         }
//     }, 1000);
// }

// // Inicia o contador regressivo quando a página é carregada
// startCountdown();
// countdown.js

// Função para iniciar o contador regressivo
function startCountdown() {
    let seconds = 5;
    const countdownElement = document.querySelector('.countdown');
    countdownElement.textContent = seconds;

    const countdownInterval = setInterval(() => {
        seconds--;
        if (seconds >= 0) {
            countdownElement.textContent = seconds;
        }
        if (seconds === 0) {
            clearInterval(countdownInterval);
            let participants = JSON.parse(localStorage.getItem('participants')) || [];
            const lastWinner = localStorage.getItem('lastWinner');
            
            // Remove o último vencedor da lista de participantes, se estiver presente
            if (lastWinner && participants.includes(lastWinner)) {
                participants = participants.filter(participant => participant !== lastWinner);
            }
            
            if (participants.length === 0) {
                alert('Todos os participantes já ganharam!');
                return;
            }
            
            const winnerIndex = Math.floor(Math.random() * participants.length);
            const winner = participants[winnerIndex];
            localStorage.setItem('lastWinner', winner);
            window.location.href = 'winner-page.html';
        }
    }, 1000);
}

// Inicia o contador regressivo quando a página é carregada
startCountdown();

