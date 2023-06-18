$(function(){
    $("#miFormulario").validate({
        rules:{
            nombre:{
                required: true
            },
            correo:{
                required: true
            },
            nombrecompleto:{
                required: true
            },
            fecha:{
                required: true
            },
            rut:{
                required: true
            },
            domicilio:{
                required: true
            },
            comuna:{
                required: true
            }
        },
        messages:{
            nombre:{
                required: "Debe ingresar su nombre"
            },
            correo:{
                required: "Debe ingresar su correo electronico"
            },
            nombrecompleto:{
                required: "Debe ingresar su nombre completo"
            },
            fecha:{
                required: "Debe ingresar su fecha de nacimiento"
            },
            rut:{
                required: "Debe ingresar un numero de identificacion"
            },
            domicilio:{
                required: "Debe ingresar su domicilio de residencia"
            },
            comuna:{
                required: "Debe ingresar su comuna de residencia"
            }
        }
    })
})