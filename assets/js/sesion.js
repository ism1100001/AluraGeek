const formulario = document.querySelector("[data-form]")
const email = document.querySelector("[data-email]")
const passwd = document.querySelector("[data-passwd]")
const msg = document.querySelector("[data-msg]")

formulario.addEventListener("submit", (e)=>{
    e.preventDefault()
    if(email.value === 'admin@webmaster.com' || passwd.value === 'alphabeta110001'){
        window.location.href = "/screens/administracion.html"
    }else{
        email.classList.add("sesion-form__input--error")
        passwd.classList.add("sesion-form__input--error")
        msg.classList.add("mensaje")
        email.classList.remove("sesion-form__input")
        passwd.classList.remove("sesion-form__input")
        msg.classList.remove("mensaje--hide")
    }
})

email.addEventListener("focus", (e) =>{
    email.classList.remove("sesion-form__input--error")
    passwd.classList.remove("sesion-form__input--error")
    msg.classList.remove("mensaje")
    email.classList.add("sesion-form__input")
    passwd.classList.add("sesion-form__input")
    msg.classList.add("mensaje--hide")
})
passwd.addEventListener("focus", (e) =>{
    email.classList.remove("sesion-form__input--error")
    passwd.classList.remove("sesion-form__input--error")
    msg.classList.remove("mensaje")
    email.classList.add("sesion-form__input")
    passwd.classList.add("sesion-form__input")
    msg.classList.add("mensaje--hide")
})