/* 
╔══════════════════════════════════════════════════╗
║                Curso Front-End                   ║
║                   Tarea Nº 5                     ║
╠══════════════════════════════════════════════════╣
║ Alumno: Alfredo López Allende                    ║
║ RUT   : XX.XXX.XXX-3                             ║
║ Fecha Entrega: 18 de junio de 2023               ║
╚══════════════════════════════════════════════════╝

// Arreglo de notas */
let notas = [6,8,9,2,5,10]

// Función para la suma de las notas en el arreglo
let suma = function(notas) {return notas.reduce((a, b) => a + b, 0)}

// Función para el cálculo de nota promedio
let promedio = function(suma) {return (suma / 6)}

// Llama a ambas funcioones para mostrar la nota promedio del alumno en la consola.
console.log(promedio(suma(notas)).toFixed(2));

// Muestra las notas del arreglo en la página web. 
document.getElementById('datos').textContent = notas.join(", ");

// Muestra la suma de las notas del arreglo en la página web. 
document.getElementById("suma").textContent = suma(notas); 

// Muestra la nota promedio del alumno en la página web. 
document.getElementById("promedio").textContent = promedio(suma(notas)).toFixed(2); 
