document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('enrollmentForm');
    
    // 1. Troca de cor dos Cards de Turno (Radio)
    const radioCards = document.querySelectorAll('.card-option');
    radioCards.forEach(card => {
        card.addEventListener('click', () => {
            radioCards.forEach(c => c.classList.remove('active'));
            card.classList.add('active');
        });
    });

    // 2. Troca de cor dos Cards de Esporte (Checkbox)
    const sportCards = document.querySelectorAll('.sport-item');
    sportCards.forEach(card => {
        const checkbox = card.querySelector('input');
        card.addEventListener('click', () => {
            checkbox.checked = !checkbox.checked; // Inverte o status
            card.classList.toggle('active', checkbox.checked);
        });
    });

    // 3. Botão "Salvar Respostas" (Simula um rascunho)
    document.getElementById('saveDraft').addEventListener('click', () => {
        alert('Rascunho salvo com sucesso! Você pode continuar depois.');
    });

    // 4. Envio do Formulário (Validação e Finalização)
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const emailInput = document.getElementById('emailInput');
        const emailWrapper = document.getElementById('emailWrapper');
        
        // Simulação simples de validação de e-mail (se não tiver @)
        if (!emailInput.value.includes('@')) {
            emailWrapper.classList.add('error');
            emailWrapper.querySelector('.error-msg').style.display = 'block';
            return;
        }

        alert('Matrícula realizada com sucesso! Bem-vindo à Estrela do Amanhã.');
        console.log('Dados prontos para envio:', new FormData(form));
    });

    // 5. Clique na Dropzone de arquivo
    const dropzone = document.getElementById('dropzone');
    const fileInput = document.getElementById('fileInput');
    
    dropzone.addEventListener('click', () => fileInput.click());
});