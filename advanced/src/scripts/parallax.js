const parallaxPromo = document.querySelector('.wrap__top .parallax');
const layersPromo = parallaxPromo.children;

const parallaxBudda = document.querySelector('.wrap__bottom .parallax');
const layersBudda = parallaxBudda.children;

const buddaMove = (wScroll,layers) => {
    let buddaPos = parallaxBudda.getBoundingClientRect().top;
    let activeParallax = wScroll - buddaPos;

    // console.log(activeParallax)
    if (activeParallax > 2000 ) moveLayers(wScroll, layers);
};


const moveLayers = (wScroll, layers) => {
    Array.from(layers).forEach(layer => {
        const dataSet = layer.dataset.speed;
        const scroll = dataSet / 40 * wScroll;
        layer.style.transform = `translate3d(0, ${-scroll}%, 0)`
    })
};

window.onscroll = function () {
    let wScroll = window.pageYOffset;
    moveLayers(wScroll, layersPromo);
    // moveLayers(wScroll, layersBudda);
    buddaMove(wScroll, layersBudda);
};
