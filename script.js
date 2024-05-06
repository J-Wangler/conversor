function converterParaCelsius() {
    var temperatura = parseFloat(document.getElementById("tempInput").value);
    var resultado = (temperatura - 32) * (5 / 9);
    document.getElementById("resultado").innerHTML = temperatura + "°F é equivalente a " + resultado.toFixed(2) + "°C";
  }
  
  function converterParaFahrenheit() {
    var temperatura = parseFloat(document.getElementById("tempInput").value);
    var resultado = (temperatura * (9 / 5)) + 32;
    document.getElementById("resultado").innerHTML = temperatura + "°C é equivalente a " + resultado.toFixed(2) + "°F";
  }
  
  