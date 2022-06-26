//=============================================>  # VARIABLE
let die_value = 1;
const die_img = document.getElementsByClassName('die-img');
const die = document.getElementsByClassName('die');

//=============================================>  # DIE CODE
function roll_die() {
  // Math.random generates a random number from 0 to 1
  die_value = Math.ceil(Math.random() * 6);

  if (die_value === 1) {
    die_img[0].src = './assets/die-1.png';
  }

  if (die_value === 2) {
    die_img[0].src = './assets/die-2.png';
  }

  if (die_value === 3) {
    die_img[0].src = './assets/die-3.png';
  }

  if (die_value === 4) {
    die_img[0].src = './assets/die-4.png';
  }

  if (die_value === 5) {
    die_img[0].src = './assets/die-5.png';
  }

  if (die_value === 6) {
    die_img[0].src = './assets/die-6.png';
  }

  alert('Player has rolled ' + die_value);
}

//=============================================>  # SCORE BOARD

//=============================================>  # RACE TRACK CODE
