
const load = document.querySelector("#contenido1");

function carga1(){
    let i=0;
    var content="";
    console.log(fetch("estudiantes.json"));
    fetch("estudiantes.json")
        .then(res => res.json())
        .then(data => {
            let listaestudiantes = Object.values(data.estudiantes);
            //console.log(listaestudiantes.length)
            var titulo = `<h1>ESTUDIANTES</h1>`;
            var row1= `<div class = "fila">`;
            var row2= `</div>`;
            var btn= `<div class="filaboton">
            <div class="boton">
              <a href="/index.html">Volver al inicio</a>
            </div>
          </div>`
            
            for(i ; i< listaestudiantes.length; i++)
            {
                
                var div1 = `<div class = "ficha">`
                var cedula =`<p>Cedula: ${data.estudiantes[i].alumno.cedula}</p>`;
                var nombre =`<h2 class='name'>${data.estudiantes[i].alumno.nombre}</h2>`;
                var asignatura =`<p>Asignaturas: ${data.estudiantes[i].alumno.asignaturas}</p>`;
                var programa =`<p>Programa: ${data.estudiantes[i].alumno.programa}</p>`;
                var foto =`<img src= ${data.estudiantes[i].alumno.foto} alt='Foto' width='250px' class ='img-fluid rounded-circle'>`;
                var div2 = `</div>`
                content += div1 +nombre + cedula + asignatura + programa + foto + div2;
            }
            
            load.innerHTML = titulo + row1 + content+ row2 + btn;
        });

}

carga1();
