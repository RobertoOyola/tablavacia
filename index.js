window.onload = function() {
    const datos = [
        ["Ana", 28, "Madrid"],
        ["Carlos", 35, "Barcelona"],
        ["Lucía", 22, "Valencia"]
    ];

    const filas = document.querySelectorAll("#miTabla tbody tr");

    filas.forEach((fila, indice) => {
        const celdas = fila.querySelectorAll("td");
        datos[indice].forEach((dato, i) => {
            celdas[i].textContent = dato;
        });
    });
};
