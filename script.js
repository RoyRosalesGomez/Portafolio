//Función que me aplica el estilo a la opciòn seleccionada y quita la previamente seleccionada
function seleccionar(link) {
    var opciones = document.querySelectorAll('#links  a');
    opciones[0].className = "";
    opciones[1].className = "";
    opciones[2].className = "";
    opciones[3].className = "";
    opciones[4].className = "";
    opciones[5].className = "";
    opciones[6].className = "";
    link.className = "seleccionado";

    //Hacemos desaparecer el menu una vez que se ha seleccionado una opcion
    //en modo responsive
    var x = document.getElementById("nav");
    x.className = "";
}

//función que muestra el menu responsive
function responsiveMenu() {
    var x = document.getElementById("nav");
    if (x.className === "") {
        x.className = "responsive";
    } else {
        x.className = "";
    }
}

//detecto el scrolling para aplicar la animación del la barra de habilidades
window.onscroll = function() { efectoHabilidades(); efectoLenguajes(); };


//funcion que aplica la animación de la barra de habilidades
function efectoHabilidades() {
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if (distancia_skills >= 300) {
        document.getElementById("html").classList.add("barra-progreso1");
        document.getElementById("js").classList.add("barra-progreso2");
        document.getElementById("jsb").classList.add("barra-progreso3");
        document.getElementById("bd").classList.add("barra-progreso4");
        document.getElementById("rt").classList.add("barra-progreso5");
    }
}



window.onscroll = function() { efectoLenguajes() };

    var lenguages = document.getElementById("lenguages");
    var distancia_lenguages = window.innerHeight - lenguages.getBoundingClientRect().top;
    if (distancia_lenguages >= 300) {
        document.getElementById("esp").classList.add("barra-progreso5");
        document.getElementById("eng").classList.add("barra-progreso6");
}



//Correo
// Inicializar EmailJS
(function() {
    //"clave_publica" de EmailJS
    emailjs.init("_vt4SsnN2gfYAiaKZ");
})();

document.addEventListener('DOMContentLoaded', function() {
    // Obtener referencias a los elementos del formulario
    const formulario = document.getElementById('formulario-contacto');
    const btnEnviar = document.getElementById('btn-enviar');
    const mensajeEstado = document.getElementById('mensaje-estado');
    
    if (formulario) {
        formulario.addEventListener('submit', function(evento) {
            // Prevenir el comportamiento predeterminado del formulario
            evento.preventDefault();
            
            // Cambiar estado del botón
            btnEnviar.disabled = true;
            btnEnviar.value = "Enviando...";
            
            // Obtener los valores del formulario
            const nombre = document.getElementById('nombre').value;
            const email = document.getElementById('email').value;
            const tema = document.getElementById('tema').value;
            const mensaje = document.getElementById('mensaje').value;
            
            // Preparar los parámetros para EmailJS
            const parametrosPlantilla = {
                from_name: nombre,
                from_email: email,
                subject: tema || "Contacto desde el sitio web",
                message: mensaje
                
            };
            
            // Enviar el email usando EmailJS
            // "service_id" y "template_id" con tus IDs de EmailJS
            emailjs.send('service_5j5k5jp', 'template_2xjfw7l', parametrosPlantilla)
                .then(function(respuesta) {
                    console.log('ÉXITO!', respuesta.status, respuesta.text);
                    
                    // Muestra mensaje de éxito
                    mensajeEstado.textContent = "¡Mensaje enviado con éxito! Nos pondremos en contacto contigo pronto.";
                    mensajeEstado.className = "mensaje-estado exito";
                    
                    // Limpia el formulario
                    formulario.reset();
                })
                .catch(function(error) {
                    console.log('ERROR...', error);
                    
                    // Muestra mensaje de error
                    mensajeEstado.textContent = "Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo.";
                    mensajeEstado.className = "mensaje-estado error";
                })
                .finally(function() {
                    // Restaura el botón
                    btnEnviar.disabled = false;
                    btnEnviar.value = "Enviar Mensaje";
                    
                    // Oculta el mensaje después de 5 segundos
                    setTimeout(function() {
                        mensajeEstado.className = "mensaje-estado";
                    }, 5000);
                });
        });
    }
});


