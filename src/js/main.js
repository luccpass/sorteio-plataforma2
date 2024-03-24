// funcao importar participants
function importParticipants() {
    
    const input = document.createElement('input');
    input.type = 'file'
    input.accept = 'json'

    input.onchange = (event) => {
        const file = event.target.files[0]
        const reader = new FileReader()
        reader.onload = (e) => {
            const jsonData = JSON.parse(e.target.result)
            const names = jsonData.map(item => item.nome)
            let participants = JSON.parse(localStorage.getItem('participants')) || []
            participants = [...new Set([...participants, ...names])] // Remover Duplicados
            localStorage.setItem('participants', JSON.stringify(participants))
            displayParticipants()
        }
        reader.readAsText(file)
    }
    input.click()
}

// Funcao para verificar se nao esta vazio e iniciar sorteio

function startCountdown() {
    const participants = JSON.parse(localStorage.getItem('participants')) || []
    if(participants.length === 0) {
        alert('Nenhum participante importado')
        return
    }

    window.location.href = 'src/pages/countdown.html'
}

function displayParticipants() {
    const participants = JSON.parse(localStorage.getItem('participants')) || []
    const tableBody = document.querySelector('#particpants-table')
    tableBody.innerHTML = ''

    participants.forEach((participant, index) => {
        const row = document.createElement('tr')

        const idCell = document.createElement('td')
        idCell.textContent = index
        const nameCell = document.createElement('td')
        nameCell.textContent = participant
        row.appendChild(idCell)
        row.appendChild(nameCell)

        const actionCell = document.createElement('td')

        const editButton = document.createElement('button')
        editButton.textContent = 'Editar'
        editButton.onclick = () => {
            const newName = prompt('Edite o nome: ', participant)

            if(newName && newName !== participant) {
                participants[index] = newName
                localStorage.setItem('participants', JSON.stringify(participants))
                displayParticipants()
            }
        }
        actionCell.appendChild(editButton)

        const deleteButton = document.createElement('button')
        deleteButton.textContent = 'Excluir'
        deleteButton.onclick = () => {
            participants.splice(index, 1)
            localStorage.setItem('participants', JSON.stringify(participants))
            displayParticipants()
        }
        actionCell.appendChild(deleteButton)

        row.appendChild(actionCell)

        tableBody.appendChild(row)
    })
}

displayParticipants()