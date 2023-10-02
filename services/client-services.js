//GET
//const listCategoria = async () => (await fetch('http://localhost:3000/seccion')).json();
const listCategoria = async () => (await fetch('https://alurageek-api-tau.vercel.app/seccion')).json();

//POST
const crearClientes = (nombre, email) => {
    return fetch("https://alurageek-api-tau.vercel.app/seccion", {
       method: "POST",
       headers: {
         "Content-Type": "application/json"
       },
     body: JSON.stringify({nombre, email, id: uuid.v4()}),
   });
 };
 
 
 //DELETE
 const eliminarClientes = (id) => {
   return fetch(`https://alurageek-api-tau.vercel.app/seccion/${id}`, {
     method: "DELETE",
   });
 }


//UPDATE
const getID = async (id) => (await fetch(`https://alurageek-api-tau.vercel.app/seccion/${id}`)).json();


export const servicios = {
   // listaItems,
    listCategoria,
    getID
}