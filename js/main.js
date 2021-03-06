'use strict';

{
  const words = [
    'apple','sky','blue','middle','set'
  ];
  let word = words[Math.floor(Math.random() * words.length)];
  let loc = 0;
  let score = 0;
  let miss = 0;
  const target = document.getElementById('target');
  const scoreLavel = document.getElementById('score');
  const missLavel = document.getElementById('miss');


  function updateTarget() {
    let placeholder = '';
    for (let i = 0; i < loc; i++) {
      placeholder += '_';
    }
    target.textContent = placeholder + word.substring(loc);
  }

  window.addEventListener('click', () => {
    updateTarget();
  });

  window.addEventListener('keyup', e => {
    if (e.key === word[loc]) {
      loc++
      if (loc === word.length) {
        word = words[Math.floor(Math.random() * words.length)];
        loc = 0;
      }
      score++
      scoreLavel.textContent = score;
      updateTarget();
    } else {
      miss++
      missLavel.textContent = miss;
    }
  });
}
