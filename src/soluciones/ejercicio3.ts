// Esta es la función que establece la solución para el ejercicio 3.
export function solucionEjercicio3(contenedor: HTMLElement) {
  // Establecemos el HTML básico para la solución
  contenedor.innerHTML = `
    <h2>Ejercicio 3: Convertir días</h2>
    <input type="number" id="dias" placeholder="Número de días">
    <button id="convertir">Convertir</button>
    <div id="resultado"></div>
  `

  // Obtenemos los elementos de Input, resultado y el botón de la solución
  const diasInput = document.querySelector<HTMLInputElement>('#dias')!
  const convertirBtn = document.querySelector<HTMLButtonElement>('#convertir')!
  const resultadoDiv = document.querySelector<HTMLDivElement>('#resultado')!

  // Añadimos un EventListener al botón de la solución para que cuando se haga clic, se ejecute la función que pasamos
  convertirBtn.addEventListener('click', () => {
    // Hacemos un parseInt para convertir el valor del input a un número entero
    const dias = parseInt(diasInput.value)

    // Realizamos la validación del número. Si es NaN, mostramos un mensaje de error
    if (isNaN(dias) || dias < 0) {
      resultadoDiv.innerHTML = 'Por favor, ingrese un número de días mayor que cero.'
      return
    }

    // Calculamos las conversiones
    const años = Math.floor(dias / 365)
    const semanas = Math.floor((dias % 365) / 7)
    const diasRestantes = dias % 7

    // Agregamos el resultado a #resultado
    resultadoDiv.innerHTML = `
      <p>${dias} días equivalen a:</p>
      <p>${años} año(s), ${semanas} semana(s) y ${diasRestantes} día(s)</p>
    `
  })
}
