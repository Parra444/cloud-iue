const load = document.querySelector("#contenedor");

function carga1(){
    let i=0;
    var sopa="";
    fetch("https://proyectojesusparra.neocities.org/retos/palabrasopa.json")
        .then(res => res.json())
        .then(data => {
            let palabras = Object.values(data.palabras);
            
            var titulo = `<h1>SOPA DE LETRAS</h1>`;
            var row1= `<div class = "fila">`;
            var cerrardiv= `</div>`;
            var ul =`<ul class="palabras">`;
            var cerrarul=`</ul>`;
            var listapalabras = ``;
            var section = `<section class="tabla1">`;
            var cerrarsection = `</section>`;
            for(i ; i< palabras.length; i++)
            {
                var palabra1 =`<li>${palabras[i]}</li>`;
                listapalabras +=palabra1;
            }

            var sopa = `<div><span>C</span><span>E</span><span>I</span><span>S</span><span>P</span><span>A</span><span>N</span><span>O</span><span>E</span><span>A</span><span>N</span><span>C</span><span>A</span><span>O</span><span>R</span></div>
            <div><span>C</span><span>O</span><span>B</span><span>N</span><span>E</span><span>A</span><span>B</span><span>L</span><span>O</span><span>A</span><span>I</span><span>M</span><span>G</span><span>F</span><span>E</span></div>
            <div><span>O</span><span>J</span><span>A</span><span>O</span><span>D</span><span>F</span><span>E</span><span>A</span><span>I</span><span>D</span><span>A</span><span>H</span><span>A</span><span>B</span><span>S</span></div>
            <div><span>C</span><span>L</span><span>A</span><span>S</span><span>S</span><span>E</span><span>E</span><span>H</span><span>S</span><span>I</span><span>O</span><span>S</span><span>R</span><span>O</span><span>P</span></div>
            <div><span>F</span><span>A</span><span>E</span><span>V</span><span>E</span><span>A</span><span>X</span><span>E</span><span>T</span><span>V</span><span>H</span><span>E</span><span>T</span><span>D</span><span>O</span></div>
            <div><span>O</span><span>H</span><span>C</span><span>B</span><span>A</span><span>E</span><span>R</span><span>M</span><span>E</span><span>T</span><span>A</span><span>C</span><span>I</span><span>Y</span><span>N</span></div>
            <div><span>R</span><span>T</span><span>C</span><span>S</span><span>S</span><span>A</span><span>E</span><span>H</span><span>O</span><span>A</span><span>O</span><span>T</span><span>C</span><span>A</span><span>S</span></div>
            <div><span>M</span><span>M</span><span>I</span><span>N</span><span>T</span><span>E</span><span>R</span><span>N</span><span>E</span><span>T</span><span>A</span><span>I</span><span>L</span><span>H</span><span>I</span></div>
            <div><span>A</span><span>L</span><span>E</span><span>W</span><span>E</span><span>B</span><span>O</span><span>H</span><span>O</span><span>A</span><span>U</span><span>O</span><span>E</span><span>A</span><span>V</span></div>
            <div><span>S</span><span>E</span><span>R</span><span>V</span><span>E</span><span>R</span><span>G</span><span>R</span><span>I</span><span>D</span><span>L</span><span>N</span><span>A</span><span>O</span><span>E</span></div>`;
            
            let content = row1+titulo+section+sopa+ul+listapalabras+cerrarul+cerrarsection+cerrardiv;
            console.log(content);
            load.innerHTML=content;
        });

}

carga1();
