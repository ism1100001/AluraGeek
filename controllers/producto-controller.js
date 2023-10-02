import { servicios } from "../services/client-services.js";
import { errores } from "./error-controller.js";

const main = document.querySelector(".main");
const producto = document.querySelector(".producto")


const printErrorMsg = () => {
    const errorContainer = errores()
    main.appendChild(errorContainer)
}


const infoProducto = (id, titulo, precio, descuento, unidades, descripcion, img) => {
    const productoImg = document.createElement("div")
    const productoInfo = document.createElement("div")
    const precioFinal = Math.round(precio - precio * (descuento / 100)).toFixed(2)
     productoImg.classList.add("producto-img")
     productoImg.style.backgroundImage = `url(${img})`;
     productoInfo.classList.add("producto-info")
    
     const productoInfoContent = `
        <p class="producto-info__title">${titulo}</p>
        <div class="producto-info__precio">
            <p>$ ${precioFinal}</p>
            <p>Precio original: $ ${precio}  -  Ahorras ${precio-precioFinal}$ pesos</p>
            <p>(${unidades} Disponibles)</p>
            <a href="#${id}" class="producto-info__precio-abtn">Comprar</a>
        </div>
        <div class="producto-info__descripcion">
            <p>
                ${descripcion === '' ? "Sin descripción": descripcion}
            </p>
        </div>
     `

     productoInfo.innerHTML = productoInfoContent
     producto.appendChild(productoImg)
     producto.appendChild(productoInfo)
     return producto
}

const crearNuevoItem = (id, seccionID, titulo, precio, descuento, unidades, img) => {
    const card = document.createElement("div");
    const cardImage = document.createElement("div");
    const cardBody = document.createElement("div");
    card.classList.add("card");
    card.setAttribute("id", "ancg")
    cardImage.classList.add("card-image");
    cardBody.classList.add("card-body");
    cardImage.style.backgroundImage = `url(${img})`;
    const cardBodyContent = `
              <p class="card-body__title">
              <a class="card-body__atitle" href="/screens/producto.html?section=${seccionID}&id=${id}">
                  <span id="card-title">${titulo}</span>
              </a>
              </p>
              <p class="card-body__price">
              $<span id="card-price">${Math.round(
                precio - precio * (descuento / 100)
              ).toFixed(2)}</span>
              </p>
              <p class="card-body__discount">
              Precio original: <span id="card-discount">$${precio.toFixed(
                2
              )}</span>
              </p>
              <p class="card-body__cant">
              Disponibles: <span id="card-cant">(${unidades})</span>
              </p>`;
    cardBody.innerHTML = cardBodyContent;
    card.appendChild(cardImage);
    card.appendChild(cardBody);
    return card;
};

const recomendados = (idSeccion, productoRecomendado) => {
    const containerSec = document.createElement("section");
    const containerHead = document.createElement("section");
    const containerCards = document.createElement("section");
    containerSec.classList.add("container");
    containerHead.classList.add("container-header")
    containerCards.classList.add("container__cards");
        
    const containerHeadContent = `
        <p class="container-header__title">Recomendados</p>
        <a class="container-header__atext" href="/screens/vermas.html?id=${idSeccion}"> Ver más > </a>`;

    productoRecomendado.slice(0,4).forEach(({id, seccionID, titulo, precio, descuento, unidades, img}) => {
       const newLine = crearNuevoItem(id, seccionID, titulo, precio, descuento, unidades, img);
       containerCards.appendChild(newLine);
    })

    containerHead.innerHTML = containerHeadContent;
    containerSec.appendChild(containerHead)
    containerSec.appendChild(containerCards)
    return containerSec
}

const getInfoProducto = async () => {
    const url = new URL(window.location);
    const sectionID = parseInt(url.searchParams.get("section"));
    const productoID = parseInt(url.searchParams.get("id"))

    if(sectionID === '' || productoID === '' || 
       sectionID === null || productoID === null){
            printErrorMsg()
    }else{
      try{
        const {productos}  = await servicios.getID(sectionID)

        const productoInfo = productos.map((arr)=> arr).filter(item => item.id === productoID? true : false)
        productoInfo[0].id
        productoInfo.forEach(({id, titulo, precio, descuento, unidades, descripcion, img}) => {
            const productoInfo = infoProducto(id, titulo, precio, descuento, unidades, descripcion, img)
            main.appendChild(productoInfo)
        })

        const productoRecomendado = productos.map((arr)=> arr).filter(item => item.id !== productoID? true : false)
        const sectionContainer = recomendados(sectionID, productoRecomendado);
        main.appendChild(sectionContainer);

       }catch(error){
          producto.remove()
          printErrorMsg()
       }
    }
}


getInfoProducto();