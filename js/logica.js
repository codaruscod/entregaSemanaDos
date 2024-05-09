function logica() {
                      
   
   
}


function arrobj() {


    let cursos1 = [
                    {"cod_curso" : "AE600","descripcion" : "Algoritmos y Estructura de datos"},
                    {"cod_curso" : "BD253","descripcion" : "Bases de Datos"}
    ]
    
    let cursos2 = [
                    {"rut" : "1-9", "cod_curso" : "AE600"},
                    {"rut" : "2-7", "cod_curso" : "BD253"},
                    {"rut" : "2-7", "cod_curso" : "AE600"},
                    {"rut" : "3-5", "cod_curso" : "BD253"},
                    {"rut" : "4-4", "cod_curso" : "BD253"},
    ]
    let cursos3 = [
                    {"rut" : "1-9", "nombre" : "Pedro", "apellido" : "Perez"},
                    {"rut" : "2-7", "nombre" : "Juan", "apellido" : "Jara"},
                    {"rut" : "3-5", "nombre" : "Diego", "apellido" : "Diaz"},
                    {"rut" : "4-4", "nombre" : "Maria", "apellido" : "Martinez"},
    ]
    let cursos4 = [
                    {"rut" : "1-9", "nombre" : "Pedro", "apellido" : "Perez", "cod_curso" : "AE600", "descripcion" : "Algoritmos y estructuras de datos"},
                    {"rut" : "2-7", "nombre" : "Juan", "apellido" : "Jara", "cod_curso" : "BD253", "descripcion" : "Bases de datos"},
                    {"rut" : "2-7", "nombre" : "Juan", "apellido" : "Jara", "cod_curso" : "AE600", "descripcion" : "Algoritmos y estructuras de datos"},
                    {"rut" : "3-5", "nombre" : "Diego", "apellido" : "Diaz", "cod_curso" : "BD253", "descripcion" : "Bases de datos"},
                    {"rut" : "4-4", "nombre" : "Maria", "apellido" : "Martinez", "cod_curso" : "BD253", "descripcion" : "Bases de datos"},
    ]
    


    for (let i = 0; i < cursos1.length; i++) {
        console.log(cursos1[i])
    }
    for (let i = 0; i < cursos2.length; i++) {
        console.log(cursos2[i])
    }
    for (let i = 0; i < cursos3.length; i++) {
        console.log(cursos3[i])
    }
    for (let i = 0; i < cursos4.length; i++) {
        console.log(cursos4[i])
    }
}












