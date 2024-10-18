function good(){
    Swal.fire({
        title: "Good job!",
        text: "You clicked the button!",
        icon: "success"
    });
}


function peligro(){
    Swal.fire({
        title: "Estas seguro?",
        text: "esto parece un lugar peligroso",
        icon: "question"
    });
}

function truth(){
    Swal.fire({
        icon: "error",
        title: "Rayooooos",
        text: "algo no esta bien :( ",
        footer: '<a href="#">este verdadro camino</a>'
    });
}

function save(){
    Swal.fire({
        title: "Estas seguro que deseas guardar los cambios?",
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: "Guardar",
        denyButtonText: `no guardar`
    }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
        Swal.fire("Esta guardado =)", "", "success");
        } else if (result.isDenied) {
        Swal.fire("No se guardaron los cambios ", "", "warning");
        }
    });
}