const msgNData = () => {
    const errorContainer = document.createElement("section");
    errorContainer.classList.add("error-nfmsg")
    const errorContainerContent = `
        <p>Sin datos</p>
        <p>No existen productos por el momento...</p>
    `
    errorContainer.innerHTML = errorContainerContent
    return errorContainer
}

export const nodata = msgNData