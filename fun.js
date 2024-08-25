// URL de la API
const apiURL = 'https://pobreza-colombia-rest-api-production.onrender.com/api/departamentos';

// Elemento de la tabla donde se agregarán los datos
const tableBody = document.querySelector('#departamentosTable tbody');

// Función para obtener los datos de la API y mostrarlos en la tabla
async function fetchDepartamentos() {
    try {
        const response = await fetch(apiURL);
        const departamentos = await response.json();

        // Limpiar cualquier contenido previo
        tableBody.innerHTML = '';

        // Iterar sobre los departamentos y agregarlos a la tabla
        departamentos.forEach(departamento => {
            const row = document.createElement('tr');

            const codigoCell = document.createElement('td');
            codigoCell.textContent = departamento.codigo_dane;
            row.appendChild(codigoCell);

            const nombreCell = document.createElement('td');
            nombreCell.textContent = departamento.nombre;
            row.appendChild(nombreCell);

            tableBody.appendChild(row);
        });
    } catch (error) {
        console.error('Error al obtener los datos:', error);
    }
}

// Llamar a la función para obtener y mostrar los datos cuando la página se carga
window.onload = fetchDepartamentos;
