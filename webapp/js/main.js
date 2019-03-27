 function gameStart (id) {
        const main = document.getElementById('slide-4');
        const div = document.getElementById('game');
        const clone = div.cloneNode(true);
    
        while (main.firstChild) main.firstChild.remove();
    
        main.appendChild(clone);
    }
