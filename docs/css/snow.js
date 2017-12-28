
    var blizzard = document.querySelector('.blizzard');
    for (var i = 4; i < 30; i++) {
      var flake = document.createElement('P');
      flake.textContent = '.';
      flake.classList.add('flake');
      
      // Randomize falling speed
      flake.style.animationDuration = `${Math.random() * 10 + 1}s`
      
      blizzard.appendChild(flake);
    }