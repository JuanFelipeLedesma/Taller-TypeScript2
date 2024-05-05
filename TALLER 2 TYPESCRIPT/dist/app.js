// src/app.ts
import { series } from './data.js';
function createTableRow(serie) {
    return `<tr id="serie-(${serie.id})">
                <td>${serie.id}</td>
                <td>${serie.name}</td>
                <td>${serie.channel}</td>
                <td>${serie.seasons}</td>
            </tr>`;
}
function renderTable() {
    const tableBody = document.getElementById('series-table-body');
    if (!tableBody)
        return; // Asegúrate de que el cuerpo de la tabla existe
    const fragment = document.createDocumentFragment(); // Crear un fragmento de documento
    series.forEach(serie => {
        const tr = document.createElement('tr'); // Crear un elemento tr
        tr.id = `serie-${serie.id}`;
        tr.innerHTML = `<td>${serie.id}</td>
                        <td>${serie.name}</td>
                        <td>${serie.channel}</td>
                        <td>${serie.seasons}</td>`;
        fragment.appendChild(tr); // Añadir el tr al fragmento
    });
    tableBody.innerHTML = ''; // Limpiar el cuerpo de la tabla
    tableBody.appendChild(fragment); // Añadir todas las filas al cuerpo de la tabla de una sola vez
    // Añadir manejadores de eventos
    series.forEach(serie => {
        const serieRow = document.getElementById(`serie-${serie.id}`);
        serieRow.addEventListener('click', () => displayDetails(serie.id));
    });
}
function displayDetails(id) {
    console.log(`Mostrando detalles para: ${id}`);
    const serie = series.find(s => s.id === id);
    const detailContainer = document.getElementById('series-detail');
    console.log(detailContainer);
    if (serie && detailContainer) {
        detailContainer.innerHTML = `
            <div class="card-body">
                <h5 class="card-title">${serie.name}</h5>
                <h6 class="card-subtitle mb-2 text-muted">${serie.channel}</h6>
                <p class="card-text">${serie.description}</p>
                <a href="${serie.url}" class="card-link">More Info</a>
                <img src="${serie.imageUrl}" class="card-img-top" alt="Image of ${serie.name}">
            </div>
        `;
    }
}
document.addEventListener('DOMContentLoaded', () => {
    renderTable();
});
//# sourceMappingURL=app.js.map