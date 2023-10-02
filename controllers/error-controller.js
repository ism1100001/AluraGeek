const msgNfError = () => {
    const errorContainer = document.createElement("section");
    errorContainer.classList.add("error-nfmsg")
    const errorContainerContent = `
        <p>404</p>
        <p>No existen los datos solicitados</p>
        <a href="/index.html">Regresar</a>
    `
    errorContainer.innerHTML = errorContainerContent
    return errorContainer
}

export const errores = msgNfError