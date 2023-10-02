import { servicios } from "../services/client-services.js";
import { nodata } from "../controllers/nodata.controller.js"
const main = document.querySelector(".main");

const crearNuevoItem = (id, seccionID, titulo, precio, descuento, unidades, img) => {
  const card = document.createElement("div");
  const cardImage = document.createElement("div");
  const cardImageBtns = document.createElement("div");
  const cardBody = document.createElement("div");
  card.classList.add("card");
  card.setAttribute("id", "ancg");
  cardImage.classList.add("card-image");
  cardImageBtns.classList.add("admin-options");
  cardBody.classList.add("card-body");
  cardImage.style.backgroundImage = `url(${img})`;

  const headBtnsContent = `
    <a class="admin-option__editar" href="adminitem.html"><span class="material-symbols-outlined">edit</span></a>
    <a class="admin-option__borrar" href="adminitem.html"><span class="material-symbols-outlined">delete</span></a>
  `
  const cardImageBtnsContent = `
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
  cardImageBtns.innerHTML = headBtnsContent;
  cardBody.innerHTML = cardImageBtnsContent;
  cardImage.appendChild(cardImageBtns);
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
           <!-- <div class="admin-options flex--row">
                <a class="admin-option__editar" href=""><span class="material-symbols-outlined">edit</span></a>
                <a class="admin-option__borrar" href=""><span class="material-symbols-outlined">delete</span></a>
            </div>-->
            `;

  productos.forEach(({id, seccionID, titulo, precio, descuento, unidades, img})=>{
      if(idSeccion === seccionID){
          const newLine = crearNuevoItem(id, seccionID, titulo, precio, descuento, unidades, img);
          containerCards.appendChild(newLine);
        }
      })
    
  containerHead.innerHTML = containerHeadContent;
  containerSec.appendChild(containerHead)
  containerSec.appendChild(containerCards)
  return containerSec
};

servicios.listCategoria().then((categoria) => {
    categoria.forEach(({ id, seccion, productos}) => {
          const sectionContainer = container(id, seccion, productos);
          main.appendChild(sectionContainer);
    })
}).catch((e) => {
  const nodta = nodata();
  main.appendChild(nodta)
});