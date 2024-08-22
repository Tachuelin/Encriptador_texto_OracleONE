const inputText = document.getElementById('input-text');
const encriptarBtn = document.getElementById('encriptar-btn');
const desencriptarBtn = document.getElementById('desencriptar-btn');
const resultText = document.getElementById('result-text');
const copiarButton = document.getElementById('copiar');

encriptarBtn.addEventListener('click', () => {
  const texto = inputText.value.toLowerCase();
  const encriptado = encriptar(texto);
  resultText.textContent = encriptado;
});

desencriptarBtn.addEventListener('click', () => {
  const texto = inputText.value.toLowerCase();
  const desencriptado = desencriptar(texto);
  resultText.textContent = desencriptado;
});

copiarButton.addEventListener('click', () => {
    const resultado = resultText.innerText;
    navigator.clipboard.writeText(resultado);
    alert('Texto copiado al portapapeles');
});

function encriptar(texto) {
  const llaves = {
    'e': 'enter',
    'i': 'imes',
    'a': 'ai',
    'o': 'ober',
    'u': 'ufat'
  };

  return texto.replace(/[aeiou]/g, match => llaves[match]);
}

function desencriptar(texto) {
  const llaves = {
    'enter': 'e',
    'imes': 'i',
    'ai': 'a',
    'ober': 'o',
    'ufat': 'u'
  };

  return texto.replace(/(enter|imes|ai|ober|ufat)/g, match => llaves[match]);
}