let dataTable;
let dataTableIsInitialized = false;

const dataTableOptions = {
    columnsDefs: [
        { className: "centered", targets: [0, 1, 2, 3, 4, 5, 6]},
        { orderable: false, targets: [5, 6]},
        { searchable: false, targets: [0, 5, 6]} 
    ],
    pageLength: 10
};


const initDataTable = async () => {
  if (dataTableIsInitialized) {
    dataTable.destroy();
  }

  await lista_programadores();

  dataTable = $("#datatable-programmers").DataTable(dataTableOptions);
  dataTableIsInitialized = true;
};

const lista_programadores = async () => {
  try {
    const response = await fetch(
      "http://127.0.0.1:8000/app/lista_programadores/"
    );
    const data = await response.json();

    let content = ``;
    data.programadores.forEach((programador, index) => {
      content += `
                <tr>
                    <td>${index + 1}</td>
                    <td>${programador.nombre}</td>
                    <td>${programador.pais}</td>
                    <td>${programador.nacimiento}</td>
                    <td>${programador.puntuacion}</td>
                    <td>${programador.puntuacion>= 8 
                      ? "<i class='fa-solid fa-check' style='color: green;'></i>"
                      : "<i class='fa-solid fa-xmark' style='color: green;'></i>" }
                    </td>
                    <td>${programador.puntuacion}</td>
                </tr>
            `;
    });
    tableBody_programadores.innerHTML = content;
  } catch (error) {
    console.log(error);
  }
};
window.addEventListener("load", async () => {
  await initDataTable();
});
