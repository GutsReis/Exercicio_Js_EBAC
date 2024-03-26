
document.getElementById('myForm').addEventListener('submit', function(event) {
event.preventDefault();

var campoA = parseInt(document.getElementById('campoA').value);
var campoB = parseInt(document.getElementById('campoB').value);
if (campoB > campoA) {
    showMessage('Formulário válido!', 'success');
} else {
    showMessage('Formulário inválido! O Campo B deve ser maior que o Campo A.', 'error');
}
});

function showMessage(message, messageType) {
    var messageDiv = document.getElementById('message');
    messageDiv.textContent = message;
    messageDiv.className = 'message ' + messageType;
    messageDiv.style.display = 'block';
}
