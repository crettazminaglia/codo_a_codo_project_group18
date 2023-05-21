function obtenerUsuarioRandom(){
    const seccion = document.getElementById("contenido");
    seccion.innerHTML = "<p> °°° </p>"

    fetch("https://randomuser.me/api/?nat=es")
    .then(res => res.json())
    .then(data => {
       seccion.innerHTML =
                `
                <seccion>
                    <img src="${data.results[0].picture.large}" width="100px" class="img-fluid rounded-circle">
                    <p>${data.results[0].name.first}</p>
                    <p>${data.results[0].name.last}</p>
                </seccion>
                
                `
    })
    .catch(err => console.log(err))
}
  