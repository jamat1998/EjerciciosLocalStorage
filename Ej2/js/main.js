
const input = document.getElementById('inputText');
const button = document.getElementById('buttonText');
button.addEventListener('click', function(e) {
     localStorage.setItem('input', input.value);
})
