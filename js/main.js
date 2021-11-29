let drops = document.querySelectorAll('.dropdown');

drops.forEach(function(drop) {
    drop.addEventListener('click', function(ev) {
        ev.stopPropagation();
        drops.forEach(drop => { if (drop != this) { drop.classList.remove('active') }; });
        this.classList.toggle('active');
    });
});

document.addEventListener('click', function() {
    drops.forEach(drop => drop.classList.toggle('active', false));
});


document.addEventListener("click", function(e) {
	const tgt = e.target;
	if (tgt.classList.contains('btn')) {
		document.querySelector(tgt.dataset.modal).classList.add('active')
        document.body.style.overflow = 'hidden';
	} else if (tgt.classList.contains('overlay') || tgt.classList.contains('close')) {
        document.body.style.overflow = 'visible';
		tgt.closest('.modal-container').classList.remove('active')
	}
});


//Получаем элемент фона с деревом
const bgTree = document.getElementById("background-tree");
 
//При движении мышью вызываем функцию, которая меняет положение фона
document.addEventListener("mousemove", function (e) { MoveBackground(e); });
 
function MoveBackground(e)
{
   //Рассчитываем, насколько далеко от начала оси находится курсор: 0 - 0, 0.5 - середина экрана, 1 - ширина экрана (например, 1920)
   //Затем умножаем получившееся число на 30 - настолько будет сдвигаться фон
   //Например, если курсор находится посередине страницы (0.5), то при умножении получится 15
   //Далее отнимаем половину от 30, чтобы фон мог двигаться как влево, так и вправо
   let offsetX = (e.clientX / window.innerWidth * 30) - 15;
   let offsetY = (e.clientY / window.innerHeight * 10) - 5;
 
   //Меняем положение фона
   bgTree.setAttribute("style", "background-position: " + offsetX + "px " + offsetY + "px;");
}


window.onload = function () {
    document.body.classList.add('loaded_hiding');
    window.setTimeout(function () {
        document.body.classList.add('loaded');
        document.body.classList.remove('loaded_hiding');
    }, 500);
}



const images = document.querySelectorAll('.slider .slider-line .page');
const sliderLine = document.querySelector('.slider .slider-line');
let count = 0;
let width;

function init() {
    console.log('resize');
    width = document.querySelector('.slider').offsetWidth;
    sliderLine.style.width = width * images.length + 'px';
    images.forEach(item => {
        item.style.width = width + 'px';
        item.style.height = 'auto';
    });
    rollSlider();
}

init();
window.addEventListener('resize', init);

document.querySelector('.slider-next').addEventListener('click', function () {
    count++;
    if (count >= images.length) {
        count = 0;
    }
    rollSlider();
});

document.querySelector('.slider-prev').addEventListener('click', function () {
    count--;
    if (count < 0) {
        count = images.length - 1;
    }
    rollSlider();
});

function rollSlider() {
    sliderLine.style.transform = 'translate(-' + count * width + 'px)';

}



const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href').substr(1)
    
    document.getElementById(blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    })
    })
}
