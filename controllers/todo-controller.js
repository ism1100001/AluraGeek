import { servicios } from "../services/client-services.js";
import { errores } from "./error-controller.js";

const main = document.querySelector(".main");

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
            <a class="card-body__atitle" href="producto.html?section=${seccionID}&id=${id}">
                <span id="card-title">${titulo}</span>
            </a>
            </p>
            <p class="card-body__price">
            $<span id="card-price">${Math.round(
              precio - (precio * (descuento / 100))
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

const container = (idSeccion, titulo, productos) => {
  const containerSec = document.createElement("section");
  const containerHead = document.createElement("section");
  const containerCards = document.createElement("section");
  containerSec.classList.add("container");
  containerHead.classList.add("container-header")
  containerCards.classList.add("container__cards-grid");

  const containerHeadContent = `
            <p class="container-header__title">${titulo}</p>
            <a class="container-header__atext" href="/index.html"> Regresar </a>`;

  productos.forEach(({id, seccionID, titulo, precio, descuento, unidades, img})=>{
      if(idSeccion === seccionID){
          const newLine = crearNuevoItem(id,seccionID, titulo, precio, descuento, unidades, img);
          containerCards.appendChild(newLine);
        }
      })
    
  containerHead.innerHTML = containerHeadContent;
  containerSec.appendChild(containerHead)
  containerSec.appendChild(containerCards)
  return containerSec
};

const getAll = async () => {
    const url = new URL(window.location);
    const urlID = url.searchParams.get("id");
    
    if(urlID === null || urlID === ''){
        window.location.href = "/index.html";
    }else{
      try{
         const {id, seccion, productos} = await servicios.getID(urlID)
         const sectionContainer = container(id, seccion, productos);
         main.appendChild(sectionContainer);

       }catch(error){
        const errorContainer = errores()
        main.appendChild(errorContainer)
       }

    }
}

getAll()