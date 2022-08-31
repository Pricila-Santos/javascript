
function conversor(){
var res =document.getElementById('res')

    var celsius = window.prompt('Digite uma temperatura em graus °C (Celsius)')
    var kelvin = celsius* 1 + 273.15
    var fahrenheit = celsius *1.8 + 32
    res.innerHTML = (` <p>A temperatura de ${celsius}°C corresponde a ...</p>
               <p> ${kelvin.toFixed(2)}°K (Kelvin)</p>
               <p> ${fahrenheit.toFixed(2)}°F (Fahrenheit)</p>
               
                  `)
}