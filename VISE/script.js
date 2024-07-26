document.getElementById('mainForm').addEventListener('submit', function(e) {
    e.preventDefault();

    let selectedCargo = document.getElementById('cargo').value;

    switch (selectedCargo) {
        case 'Vigilante':
            window.location.href = 'formulario_vigilante.html';
            break;
        case 'Operador de Medios':
            window.location.href = 'formulario_operador_medios.html';
            break;
        case 'Escolta':
            window.location.href = 'formulario_escolta.html';
            break;
        case 'Supervisor':
            window.location.href = 'formulario_supervisor.html';
            break;
        case 'Conductor':
            window.location.href = 'formulario_conductor.html';
            break;
        case 'Analista':
            window.location.href = 'formulario_analista.html';
            break;
        case 'Coordinador':
            window.location.href = 'formulario_coordinador.html';
            break;
        case 'Investigador':
            window.location.href = 'formulario_investigador.html';
            break;
        case 'Director':
            window.location.href = 'formulario_director.html';
            break;
        case 'Jefe':
            window.location.href = 'formulario_jefe.html';
            break;
        case 'Auxiliar':
            window.location.href = 'formulario_auxiliar.html';
            break;
        default:
            alert('Por favor, seleccione un cargo.');
            break;
    }
});

// Script para mostrar el campo de texto cuando se selecciona "Otro" en género
document.querySelectorAll('input[name="genero"]').forEach((radio) => {
    radio.addEventListener('change', function() {
        const otroGeneroDiv = document.getElementById('otro-genero');
        const otroGeneroInput = document.getElementById('otro-genero-texto');

        if (this.value == 'Otro') {
            otroGeneroDiv.style.display = 'block';
            otroGeneroInput.required = true;
        } else {
            otroGeneroDiv.style.display = 'none';
            otroGeneroInput.required = false;
            otroGeneroInput.value = ''; // Limpiar el campo si no se selecciona "Otro"
        }
    });
});

// Script para mostrar el campo de situación militar si se selecciona "Sí"
document.querySelectorAll('input[name="situacion-militar"]').forEach((radio) => {
    radio.addEventListener('change', function() {
        const situacionMilitarFieldset = document.getElementById('situacion-militar-fieldset');
        if (this.value === 'si') {
            situacionMilitarFieldset.style.display = 'block';
        } else {
            situacionMilitarFieldset.style.display = 'none';
        }
    });
});

// Script para mostrar el campo de vehiculo "Sí"
document.querySelectorAll('input[name="vehiculo"]').forEach((radio) => {
    radio.addEventListener('change', function() {
        const situacionMilitarFieldset = document.getElementById('tipo-vehiculo-fieldset');
        if (this.value === 'si') {
            situacionMilitarFieldset.style.display = 'block';
        } else {
            situacionMilitarFieldset.style.display = 'none';
        }
    });
});