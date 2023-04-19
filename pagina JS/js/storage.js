function crear(){
    let array = [{
        nombre:"Juan",
        edad:25,
        rut:"12.345.678-9"
    },
    {
        nombre:"Pedro",
        edad:27,
        rut:"9.876.543-2"
    } 
];

const objjson = JSON.stringify(array);
localStorage.setItem("storage011d",objjson)
console.log("Storage guardado");
}

function eliminar(){
    localStorage.removeItem("storage011d");
}

function obtener(){
    let storage = localStorage.getItem("storage011d");
    const obj = JSON.parse(storage);
    console.log("storage", obj);

    if (obj == null) {
        alert("no hay informacion")
    }else{
        console.log("storage", obj);
    }
}