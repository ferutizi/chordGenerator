const container = document.querySelector('.container');
const acordeMayor = document.querySelector('#mayor')
const acordeMenor = document.querySelector('#menor')
const span = document.querySelector('#span')

let img = document.createElement("img");
img.src = "imgAcordes/";
span.appendChild(img);

container.addEventListener('click', (e) => {
    if (acordeMayor.checked) {
        if(e.target.classList.contains('btna')) {
            img.src = "imgAcordes/A.jpg";
        }
        if(e.target.classList.contains('btnb')) {
            img.src = "imgAcordes/B.jpg";
        }
        if(e.target.classList.contains('btnc')) {
            img.src = "imgAcordes/C.jpg";
        }
        if(e.target.classList.contains('btnd')) {
            img.src = "imgAcordes/D.jpg";
        }
        if(e.target.classList.contains('btne')) {
            img.src = "imgAcordes/E.jpg";
        }
        if(e.target.classList.contains('btnf')) {
            img.src = "imgAcordes/F.jpg";
        }
        if(e.target.classList.contains('btng')) {
            img.src = "imgAcordes/G.jpg"; 
        }
    }
    if(acordeMenor.checked) {
        if(e.target.classList.contains('btna')) {
            img.src = "imgAcordes/Am.jpg";
        }
        if(e.target.classList.contains('btnb')) {
            img.src = "imgAcordes/Bm.jpg";
        }
        if(e.target.classList.contains('btnc')) {
            img.src = "imgAcordes/Cm.jpg";
        }
        if(e.target.classList.contains('btnd')) {
            img.src = "imgAcordes/Dm.jpg";
        }
        if(e.target.classList.contains('btne')) {
            img.src = "imgAcordes/Em.jpg";
        }
        if(e.target.classList.contains('btnf')) {
            img.src = "imgAcordes/Fm.jpg";
        }
        if(e.target.classList.contains('btng')) {
            img.src = "imgAcordes/Gm.jpg";
        }
    }
})


/*
container.addEventListener('click', (e) => {
    if (acordeMayor.checked) {
        console.log('a')
        //cargarImagenMayor();
    } else { if(acordeMenor.checked) {
            cargarImagenMenor();
        } else {
            //!alert('Seleccionar Mayor o Menor')
        }
    }
})
*/
