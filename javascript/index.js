/* Função Cálculo de idade atual */
function dataAniversario () {
  const aniversario = new Date("March 26, 1988");
  let hoje = new Date();
  
  let diferenca =  hoje - aniversario;
  
  let idade = new Date(diferenca).getFullYear() - 1970;
  
  let span = document.getElementById('aniversario');
  span.innerHTML = idade;
}

dataAniversario();