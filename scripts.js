const form = document.querySelector(".formulario-fale-conosco")
const oscuro = document.querySelector(".mascara-formulario")


function mostrarForme() {
    form.style.left = "50%"
    form.style.transform = "translateX(-50%)"
    oscuro.style.visibility = "visible"
    // console.log("mascara-formulario")
}




function esconderForme() {
    form.style.left = "-300px"
    form.style.transform = "translateX(0)"
    oscuro.style.visibility = "hidden"
}