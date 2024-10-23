// Esta es la función que establece la solución para el ejercicio 2.
export function solucionEjercicio2(contenedor: HTMLElement) {
  // Establecemos el HTML básico para la solución
  contenedor.innerHTML = `
    <h2>Ejercicio 2: Conversión de temperaturas</h2>
    <input type="number" id="celsius" placeholder="Grados Celsius">
    <button id="convertir">Convertir</button>
    <div id="resultado"></div>
  `

  // Obtenemos los elementos de Input, resultado y el botón de la solución
  const celsiusInput = document.querySelector<HTMLInputElement>('#celsius')!
  const convertirBtn = document.querySelector<HTMLButtonElement>('#convertir')!
  const resultadoDiv = document.querySelector<HTMLDivElement>('#resultado')!

  // Añadimos un EventListener al botón de la solución para que cuando se haga clic, se ejecute la función que pasamos
  convertirBtn.addEventListener('click', () => {
    // Hacemos un parseFloat para convertir el valor del input a un número
    const celsius = parseFloat(celsiusInput.value)

    // Realizamos la validación del número. Si es NaN, mostramos un mensaje de error
    // (Asumo que en este caso puede ser menor a 0)
    if (isNaN(celsius)) {
      resultadoDiv.innerHTML = 'Por favor, ingrese una temperatura válida en Celsius.'
      return
    }

    // Calculamos las conversiones
    const kelvin = celsius + 273.15
    const fahrenheit = (celsius * 9/5) + 32

    // Agregamos el resultado a #resultado
    // Usamos toFixed para mostrar los números con dos decimales
    resultadoDiv.innerHTML = `
      <p>${celsius}°Celsius es igual a:</p>
      <p>${kelvin.toFixed(2)}°Kelvin</p>
      <p>${fahrenheit.toFixed(2)}°Fahrenheit</p>
    `
  })
}
