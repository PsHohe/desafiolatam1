// Realizamos la importación de todos los módulos de soluciones
import { solucionEjercicio1 } from './soluciones/ejercicio1.ts'
import { solucionEjercicio2 } from './soluciones/ejercicio2.ts'
import { solucionEjercicio3 } from './soluciones/ejercicio3.ts'
import { solucionEjercicio4 } from './soluciones/ejercicio4.ts'

// Accedemos a la etiqueta de #contenido, donde vamos a mostrar las soluciones
const contenido = document.querySelector<HTMLDivElement>('#contenido')!

// Establecemos el contenido por defecto al iniciar la página...
const defaultContent = `
<p>Para comenzar, selecciona un ejercicio de la lista.</p>
`
// ...y lo asignamos por defecto a #contenido
contenido.innerHTML = defaultContent

// Vamos a usar un EventListener para detectar cuando cambiemos en el hash de la URL de la página.
// Cada vez cambie el hash, vamos a llamar a la función correspondiente, que representa una solución.
// Si no hay un hash de los que especificamos, mostramos el contenido por defecto.
window.addEventListener('hashchange', () => {
  const hash = window.location.hash
  switch (hash) {
    case '#ejercicio1':
      solucionEjercicio1(contenido)
      break
    case '#ejercicio2':
      solucionEjercicio2(contenido)
      break
    case '#ejercicio3':
      solucionEjercicio3(contenido)
      break
    case '#ejercicio4':
      solucionEjercicio4(contenido)
      break
    default:
      contenido.innerHTML = defaultContent
  }
})
