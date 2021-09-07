

const navMenu = document.querySelector('.nav-menu');

addEventListener('DOMContentLoaded', () => {
    const responsiveMenu = document.querySelector('.responsive-menu');

    if (responsiveMenu) {
        responsiveMenu.addEventListener('click', () => {
            navMenu.classList.toggle('show');
            })
        }
    });

navMenu.classList.toggle('show');

const mostrarInicio = () => {
    document.getElementById('index-section').style.display = 'block';
    document.getElementById('servicios-section').style.display = 'none';
    document.getElementById('novedades-section').style.display = 'none';
    document.getElementById('contacto-section').style.display = 'none';
    document.getElementById('aside').style.display = 'block';
    navMenu.classList.toggle('show');
};

const mostrarServicios= () => {
    document.getElementById('index-section').style.display = 'none';
    document.getElementById('servicios-section').style.display = 'block';
    document.getElementById('novedades-section').style.display = 'none';
    document.getElementById('contacto-section').style.display = 'none';
    document.getElementById('aside').style.display = 'block';
    navMenu.classList.toggle('show');
};

const mostrarNovedades = () => {
    document.getElementById('index-section').style.display = 'none';
    document.getElementById('servicios-section').style.display = 'none';
    document.getElementById('novedades-section').style.display = 'block';
    document.getElementById('contacto-section').style.display = 'none';
    document.getElementById('aside').style.display = 'block';
    navMenu.classList.toggle('show');
};

const mostrarContacto = () => {
    document.getElementById('index-section').style.display = 'none';
    document.getElementById('servicios-section').style.display = 'none';
    document.getElementById('novedades-section').style.display = 'none';
    document.getElementById('contacto-section').style.display = 'block';
    document.getElementById('aside').style.display = 'none';
    navMenu.classList.toggle('show');
};


//Turnos

const mostrarTurnos = () => {
    document.getElementById('turnos-section').style.display = 'block';
    document.getElementById('registro-section').style.display = 'none';
    document.getElementById('tomar-turnos').style.display = 'none';
    navMenu.classList.toggle('show');
}

const mostrarTurnos2 = () => {
    document.getElementById('turnos-section').style.display = 'block';
    document.getElementById('registro-section').style.display = 'none';
    document.getElementById('tomar-turnos').style.display = 'none';
    
}

const mostrarRegistro = () => {
    document.getElementById('turnos-section').style.display = 'none';
    document.getElementById('registro-section').style.display = 'block';
    document.getElementById('tomar-turnos').style.display = 'none';
}

const verTom = () => {
    document.getElementById('ocultar-t').style.display = 'block';
    document.getElementById('mostrar-t').style.display = 'none';
}

const ocuTom = () => {
    document.getElementById('ocultar-t').style.display = 'none';
    document.getElementById('mostrar-t').style.display = 'block';
} 

const misTurnos = () => {
    document.getElementById('tomar-turnos__esp').style.display = 'block';
}

const loginPage = (
    dni = document.getElementById('txtdni').value,
    clave = document.getElementById('txtclave').value,
) => {
    if (dni && clave >= 1) {
        document.getElementById('tomar-turnos').style.display = 'block';
        document.getElementById('turnos-section').style.display = 'none';
        document.getElementById('registro-section').style.display = 'none';
        document.getElementById('tomar-turnos__esp').style.display = 'none';
        window.onload = ocuTom();
    } else {
        document.getElementById('llenar-campos').style.display = 'block';      
    }
};

const regPage = (
    nombre = document.getElementById('txtnombre').value,
    apellido = document.getElementById('txtapellido').value,
    dni2 = document.getElementById('txtdni2').value,
    email = document.getElementById('txtmail').value,
) => {
    if (nombre && apellido && dni2 && email != 1) {
        document.getElementById('tomar-turnos').style.display = 'block';
        document.getElementById('turnos-section').style.display = 'none';
        document.getElementById('registro-section').style.display = 'none';
        document.getElementById('tomar-turnos__esp').style.display = 'none';
        window.onload = ocuTom();
    } else {
        document.getElementById('llenar-campos2').style.display = 'block';      
    }
};








