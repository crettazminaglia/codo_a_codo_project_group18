function validarForm() {
    let datosOk = true;

    const form = document.getElementsByTagName("form")[0];

    const businessName = form[1].value;
    if (businessName.length < 2) {
        alert("Por favor ingrese el nombre de su emprendimiento.");
        form[1].focus();
        datosOk = false;
    }

    const name = form[2].value;
    if (name.length < 2) {
        alert("Por favor ingrese un nombre válido.");
        form[2].focus();
        datosOk = false;
    }

    const lastName = form[3].value;
    if (lastName.length < 2) {
        alert("Por favor ingrese un apellido válido.");
        form[3].focus();
        datosOk = false;
    }

    const email = form[4].value;
    const validEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    if (!validEmail.test(email)) {
        alert("Por favor ingrese un correo electrónico válido.");
        form[4].focus();
        datosOk = false;
    }

    const phone = form[5].value;
    if (phone.length < 8) {
        alert("Por favor ingrese un telefono válido.");
        form[5].focus();
        datosOk = false;
    }

    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    let checked = false;
    checkboxes.forEach(checkbox => {
        if (checkbox.checked) {
            checked = true;
        }
    });

    if (!checked) {
        alert("Por favor seleccione al menos un servicio requerido.");
        datosOk = false;
    }

    if (datosOk) {
        const businessName = form[1].value;
        console.log(businessName);

        const name = form[2].value;
        console.log(name);

        const lastName = form[3].value;
        console.log(lastName);

        const email = form[4].value;
        console.log(email);

        const phone = form[5].value;
        console.log(phone);

        let selectedServices = [];
            checkboxes.forEach(checkbox => {
                if (checkbox.checked) {
                selectedServices.push(checkbox.value);
                }   
            });
        console.log("Servicios seleccionados:", selectedServices);
        
        alert("El formulario ha sido enviado exitosamente.");
        return true; 
    } else {
        alert("Hubo un error al completar el formulario. Por favor, verifique los datos e inténtelo nuevamente.");
        return false; 
    }
}