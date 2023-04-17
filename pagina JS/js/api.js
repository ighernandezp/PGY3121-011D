function consumoApi() {
    fetch("https://mindicador.cl/api")
    .then(response => response.json())
    .then(data => {
        let dolar = document.getElementById("dolar");
        dolar.innerHTML = "valor dolar: "
        dolar.innerHTML += data.dolar.valor;
    })
}