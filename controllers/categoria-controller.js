import { servicios } from "../services/client-services.js";


const table = document.querySelector("[data-table]");

const tablaDatos = (id, seccion) =>{
    const linea = document.createElement("tr");
    linea.classList.add("tr")
    /*
        <input class="td-input" id="datos" type="text" name="test" value="${seccion}">

            <button class="td-btn td-btn-update--active" href="#">Update</button>
            <button class="td-btn td-btn-delete" type="button" id="${id}">Delete</button>
        */
    const tableContent = `
        <td class="td-input-content">
        <p class="td-input">${seccion}</p>
        </td>
        <td class="td-btn-content">
            <a class="td-btn td-btn-update--active" href="${id}">Update</a>
            <a class="td-btn td-btn-delete" type="button" href="${id}">Delete</a>
        </td>
    `
    linea.innerHTML = tableContent
    return linea
}

const noData = () => {
    const linea = document.createElement("tr");
    linea.classList.add("tr")
    const tableContent = `
        <td class="td-input-content">
            No existen categorías
        </td>
    `
    linea.innerHTML = tableContent
    return linea
}

servicios.listCategoria().then((categoria) => {
    categoria.forEach(({ id, seccion}) => {
          const data = tablaDatos(id, seccion);
          table.appendChild(data);
    })
}).catch((e) => {
    if(e){
        const sindatos = noData();
        table.appendChild(sindatos);
    }
});

const inputCambios = () => {
    const inputValue = document.getElementsByName("test")
    console.log(inputValue.keys())
    for(let i=0; i<inputValue.length; i++){
        console.log(input.inputValue[i].value)
    }
}

inputCambios()