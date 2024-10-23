// Esta es la función que establece la solución para el ejercicio 1.
export function solucionEjercicio1(contenedor: HTMLElement) {
  // Establecemos el HTML básico para la solución
  contenedor.innerHTML = `
    <h2>Ejercicio 1: Operaciones básicas con dos números</h2>
    <input type="number" id="num1" placeholder="Número 1">
    <input type="number" id="num2" placeholder="Número 2">
    <button id="calcular">Calcular</button>
    <div id="resultado"></div>
  `

  // Obtenemos los elementos de Input, resultado y el botón de la solución
  const num1Input = document.querySelector<HTMLInputElement>('#num1')!
  const num2Input = document.querySelector<HTMLInputElement>('#num2')!
  const calcularBtn = document.querySelector<HTMLButtonElement>('#calcular')!
  const resultadoDiv = document.querySelector<HTMLDivElement>('#resultado')!

  // Añadimos un EventListener al botón de la solución para que cuando se haga clic, se ejecute la función que pasamos
  calcularBtn.addEventListener('click', () => {
    // Hacemos un parseFloat para convertir el valor de cada input a un número
    const num1 = parseFloat(num1Input.value)
    const num2 = parseFloat(num2Input.value)

    // Realizamos la validación de los números
    // En este caso, si alguno de los números es NaN (Not a Number), o si es menor que cero, mostramos un mensaje de error
    if (isNaN(num1) || isNaN(num2) || num1 <= 0 || num2 <= 0) {
      resultadoDiv.innerHTML = 'Por favor, ingrese dos números mayores que cero.'
      return
    }

    // Realizamos las operaciones básicas
    const suma = num1 + num2
    const resta = num1 - num2
    const division = num1 / num2
    const multiplicacion = num1 * num2
    const modulo = num1 % num2

    // Agregamos el resultado a #resultado
    resultadoDiv.innerHTML = `
      <p>Suma: ${suma}</p>
      <p>Resta: ${resta}</p>
      <p>División: ${division}</p>
      <p>Multiplicación: ${multiplicacion}</p>
      <p>Módulo: ${modulo}</p>
    `
  })
}
