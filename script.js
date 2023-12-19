let infoCarousel;
let popularesCarousel;

const mql = window.matchMedia("(max-width: 360px)");

function activarCarouseles(){
    infoCarousel = new Flickity('.info', { cellAlign: "left", contain: true, prevNextButtons: false});
    popularesCarousel = new Flickity('.grid-layout', { cellAlign: "left", contain: true, prevNextButtons: false});        
}

function desactivarCarouseles(){
    if (infoCarousel) {
        infoCarousel.destroy();
    }
    if(popularesCarousel) {
        popularesCarousel.destroy();
    }
}

function screenTest(e) {
    if (e.matches) {
       activarCarouseles();
    } else {
        desactivarCarouseles();
    }
}

if(mql.matches){
    activarCarouseles();
}

mql.addEventListener("change", screenTest);