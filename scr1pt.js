function contar() {
  var startNumber = document.getElementById("start");
  var endNumber = document.getElementById("end");
  var stepNumber = document.getElementById("step");
  var result = document.getElementById("result");

  if (startNumber.value === "" || endNumber.value === "" || stepNumber.value === "") {
    result.innerHTML = "Impossível contar!";
  } else {
    result.innerHTML = "Contando: <br>";
    result.innerHTML += "🏠 ";
    let i = Number(startNumber.value);
    let f = Number(endNumber.value);
    let p = Number(stepNumber.value);

    if (p <= 0) {
      window.alert("Erro: passo deve ser maior que zero!");
      p = 1;
    }
    if (i < f) {
      // Contagem crescente
      for (let c = i; c <= f; c += p) {
        result.innerHTML += `${c} ✌🏻 `;
      }
    } else {
      // Contagem regressiva
      for (let c = i; c >= f; c -= p) {
        result.innerHTML += `${c} ✌🏻 `;
      }
    }
    result.innerHTML += `🏁`;
  }
}
