// Função principal que realiza a contagem
function contar() {
  // Obtém os elementos de entrada e o elemento de resultado pelo ID
  var startNumber = document.getElementById("start"); // Início da contagem
  var endNumber = document.getElementById("end");     // Fim da contagem
  var stepNumber = document.getElementById("step");   // Passo da contagem
  var result = document.getElementById("result");     // Elemento onde o resultado será exibido

  // Verifica se algum dos campos de entrada está vazio
  if (startNumber.value.length == 0 || endNumber.value.length == 0 || stepNumber.value.length == 0) {
      result.innerHTML = "Impossível contar!"; // Exibe mensagem de erro
  } else {
      // Inicializa a área de resultados
      result.innerHTML = "Contando: <br>";
      result.innerHTML += "🏠 "; // Ícone de casa indicando início

      // Converte os valores de entrada para números
      let i = Number(startNumber.value); // Valor inicial
      let f = Number(endNumber.value);   // Valor final
      let p = Number(stepNumber.value);  // Passo

      // Verifica se o passo é válido
      if (p <= 0) {
          // Exibe um alerta informando que o passo é inválido
          window.alert("Passo inválido. Considerando passo 1");
          p = 1; // Define o passo como 1
      }

      // Verifica a direção da contagem
      if (i < f) {
          // Contagem crescente
          for (let c = i; c <= f; c += p) {
              result.innerHTML += `${c} ✌🏻 `; // Exibe cada número com o emoji de paz
          }
      } else {
          // Contagem regressiva
          for (let c = i; c >= f; c -= p) {
              result.innerHTML += `${c} ✌🏻 `; // Exibe cada número com o emoji de paz
          }
      }

      // Exibe o emoji de bandeira quadriculada indicando o fim da contagem
      result.innerHTML += `🏁`;
  }
}
