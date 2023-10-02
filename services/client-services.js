//GET
const listCategoria = async () => (await fetch('http://localhost:3000/seccion')).json();


//POST
const crearClientes = (nombre, email) => {
    return fetch("http://localhost:3000/perfil", {
       method: "POST",
       headers: {
         "Content-Type": "application/json"
       },
     body: JSON.stringify({nombre, email, id: uuid.v4()}),
   });
 };
 
 
 //DELETE
 const eliminarClientes = (id) => {
   return fetch(`http://localhost:3000/perfil/${id}`, {
     method: "DELETE",
   });
 }


//UPDATE
const getID = async (id) => (await fetch(`http://localhost:3000/seccion/${id}`)).json();


export const servicios = {
   // listaItems,
    listCategoria,
    getID
}