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
