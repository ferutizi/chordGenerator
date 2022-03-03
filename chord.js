const container = document.querySelector('.container');
const acordeMayor = document.querySelector('#mayor')
const acordeMenor = document.querySelector('#menor')

/*  tipoAcorde();

function tipoAcorde() {
    if(acordeMayor.checked == 'true') {
        mayor();
    }
    if(acordeMenor.ariaChecked == 'true') {
        menor();
    }
}  */
container.addEventListener('click', (e) => {
    if (acordeMayor.checked) {
        if(e.target.classList.contains('btna')) {
            window.open('imgAcordes/A.jpg');
        }
        if(e.target.classList.contains('btnb')) {
            window.open('imgAcordes/B.jpg');
        }
        if(e.target.classList.contains('btnc')) {
            window.open('imgAcordes/C.jpg');
        }
        if(e.target.classList.contains('btnd')) {
            window.open('imgAcordes/D.jpg');
        }
        if(e.target.classList.contains('btne')) {
            window.open('imgAcordes/E.jpg');
        }
        if(e.target.classList.contains('btnf')) {
            window.open('imgAcordes/F.jpg');
        }
        if(e.target.classList.contains('btng')) {
            window.open('imgAcordes/G.jpg');
        }
    }
    if(acordeMenor.checked) {
        if(e.target.classList.contains('btna')) {
            window.open('imgAcordes/Am.jpg');
        }
        if(e.target.classList.contains('btnb')) {
            window.open('imgAcordes/Bm.jpg');
        }
        if(e.target.classList.contains('btnc')) {
            window.open('imgAcordes/Cm.jpg');
        }
        if(e.target.classList.contains('btnd')) {
            window.open('imgAcordes/Dm.jpg');
        }
        if(e.target.classList.contains('btne')) {
            window.open('imgAcordes/Em.jpg');
        }
        if(e.target.classList.contains('btnf')) {
            window.open('imgAcordes/Fm.jpg');
        }
        if(e.target.classList.contains('btng')) {
            window.open('imgAcordes/Gm.jpg');
        }
    }
})


