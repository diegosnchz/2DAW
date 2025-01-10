let cambiarNum = 0;

// sumar numero VERDE
function addNumber() {
  cambiarNum++;
  const numberElement = document.querySelector('#value');
  numberElement.textContent = cambiarNum;
  if (cambiarNum > 0) {
    numberElement.style.color = 'green';
}
}
document.querySelector('.btn.increase').addEventListener('click', addNumber);

// restar numero ROJO
function restarNumber() {
  cambiarNum--;
  const numberElement = document.querySelector('#value');
  numberElement.textContent = cambiarNum;
  if (cambiarNum < 0) {
    numberElement.style.color = 'red';
}
}
document.querySelector('.btn.decrease').addEventListener('click', restarNumber);

// resetear numero
function resetNum() {
  cambiarNum = 0;
  const numberElement = document.querySelector('#value');
  numberElement.textContent = cambiarNum;
  numberElement.style.color = 'black';
}

document.querySelector('.btn.reset').addEventListener('click', resetNum);