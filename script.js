//=============================================>  # VARIABLE
let die_value;
const die = document.getElementsByClassName('die');

console.log(die);

//=============================================>  # DIE CODE
function roll_die() {
  // Math.random generates a random number from 0 to 1
  die_value = Math.floor(Math.random() * 6);
}

die.onClick();
//=============================================>  # SCORE BOARD

//=============================================>  # RACE TRACK CODE
