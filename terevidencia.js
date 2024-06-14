function calcularNota() {
    // Capturar los valores del formulario
    const identidad = document.getElementById('identidad').value;
    const nombres = document.getElementById('nombres').value;
    const notaProducto1 = parseFloat(document.getElementById('notaProducto1').value);
    const notaProducto2 = parseFloat(document.getElementById('notaProducto2').value);
    const notaProducto3 = parseFloat(document.getElementById('notaProducto3').value);
    const notaDesempeño1 = parseFloat(document.getElementById('notaDesempeño1').value);
    const notaDesempeño2 = parseFloat(document.getElementById('notaDesempeño2').value);
    const notaConocimiento = parseFloat(document.getElementById('notaConocimiento').value);

    // Calcular los promedios y los porcentajes
    const promedioProductos = (notaProducto1 + notaProducto2 + notaProducto3) / 3;
    const promedioDesempeño = (notaDesempeño1 + notaDesempeño2) / 2;

    const porcentajeProductos = promedioProductos * 0.40;
    const porcentajeDesempeño = promedioDesempeño * 0.30;
    const porcentajeConocimiento = notaConocimiento * 0.30;

    // Calcular la nota definitiva
    const notaDefinitiva = porcentajeProductos + porcentajeDesempeño + porcentajeConocimiento;

    // Determinar si el estudiante aprueba o reprueba
    const resultado = notaDefinitiva >= 70 ? 'Aprobó' : 'Reprobó';

    // Mostrar los resultados
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = `
        <h2>Resultado</h2>
        <p>Identidad: ${identidad}</p>
        <p>Nombres: ${nombres}</p>
        <p>Nota Definitiva: ${notaDefinitiva.toFixed(2)}</p>
        <p>${resultado}</p>
    `;
}

function limpiarFormulario() {
    document.getElementById('notasForm').reset();
    document.getElementById('resultado').innerHTML = '';
}
