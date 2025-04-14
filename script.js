//Botão Enviar
document.getElementById('ouvidoria-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const formData = new FormData(this);


    fetch('http://localhost:3000/submit', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        alert('Mensagem enviada com sucesso!');
        this.reset();
    })
    .catch(error => {
        console.error('Erro:', error);
        alert('Ocorreu um erro ao enviar a mensagem.');
    });
});
