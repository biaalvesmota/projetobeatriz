const form = document.getElementById('form-evento');
const fileInput = document.getElementById('capa');
const fileNameDisplay = document.getElementById('file-name');

// Mostrar nome do arquivo selecionado
fileInput.addEventListener('change', () => {
    fileNameDisplay.innerText = fileInput.files[0] ? fileInput.files[0].name : "Nenhum arquivo selecionado";
});

// Validação no Envio
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let hasError = false;

    const requiredFields = form.querySelectorAll('[required]');
    
    requiredFields.forEach(field => {
        const errorSpan = field.nextElementSibling;
        
        if (!field.value.trim()) {
            field.classList.add('input-error');
            if (errorSpan && errorSpan.classList.contains('error-message')) {
                errorSpan.style.display = 'block';
            }
            hasError = true;
        } else {
            field.classList.remove('input-error');
            if (errorSpan && errorSpan.classList.contains('error-message')) {
                errorSpan.style.display = 'none';
            }
        }
    });

    if (!hasError) {
        alert('🚀 Convite gerado com sucesso! Verifique o console.');
        const formData = new FormData(form);
        console.log('Dados do Evento:', Object.fromEntries(formData));
    }
});