const container = document.querySelector('.container');
//const span

container.addEventListener('click', (e) => {
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
})


