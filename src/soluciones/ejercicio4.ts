// Esta es la función que establece la solución para el ejercicio 4.
export function solucionEjercicio4(contenedor: HTMLElement) {
  // Establecemos el HTML básico para la solución
  contenedor.innerHTML = `
    <h2>Ejercicio 4: Cálculos con 5 números</h2>
    <input type="number" id="num1" class="input" placeholder="Número 1">
    <input type="number" id="num2" class="input" placeholder="Número 2">
    <input type="number" id="num3" class="input" placeholder="Número 3">
    <input type="number" id="num4" class="input" placeholder="Número 4">
    <input type="number" id="num5" class="input" placeholder="Número 5">
    <button id="calcular">Calcular</button>
    <div id="resultado"></div>
  `

  // Obtenemos los elementos de Input, resultado y el botón de la solución
  // Como asignamos una clase a los inputs, ahora podemos juntarlos en un array
  const inputs = Array.from(document.querySelectorAll<HTMLInputElement>('.input'))
  const calcularBtn = document.querySelector<HTMLButtonElement>('#calcular')!
  const resultadoDiv = document.querySelector<HTMLDivElement>('#resultado')!

  // Añadimos un EventListener al botón de la solución para que cuando se haga clic, se ejecute la función que pasamos
  calcularBtn.addEventListener('click', () => {
    // Hacemos parseFloat para convertir el valor de cada input a un número
    const numeros = inputs.map(input => parseFloat(input.value))

    // Realizamos la validación de los números
    // En este caso, si alguno de los números es NaN (Not a Number), mostramos un mensaje de error
    if (numeros.some(isNaN)) {
      resultadoDiv.innerHTML = 'Por favor, ingrese 5 números válidos.'
      return
    }

    // Calculamos. Para la suma, un reduce lo hace más fácil
    const suma = numeros.reduce((acc, num) => acc + num, 0)
    const promedio = suma / numeros.length

    // Agregamos el resultado a #resultado
    resultadoDiv.innerHTML = `
      <p>Suma de todos los números: ${suma}</p>
      <p>Promedio de los números: ${promedio.toFixed(2)}</p>
    `
  })
}
