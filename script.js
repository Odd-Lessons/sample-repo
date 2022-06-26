//=============================================>  # VARIABLE
let die_value = 1;
const die_img = document.getElementsByClassName("die-img");
const die = document.getElementsByClassName("die");
let current_player = "player_2";
let player__1_score = document.getElementsByClassName("player__1_score");
let player__2_score = document.getElementsByClassName("player__2_score");

//=============================================>  # DIE CODE
function roll_die() {
  // Math.random generates a random number from 0 to 1
  die_value = Math.ceil(Math.random() * 6);

  if (die_value === 1) {
    die_img[0].src = "./assets/die-1.png";
  }

  if (die_value === 2) {
    die_img[0].src = "./assets/die-2.png";
  }

  if (die_value === 3) {
    die_img[0].src = "./assets/die-3.png";
  }

  if (die_value === 4) {
    die_img[0].src = "./assets/die-4.png";
  }

  if (die_value === 5) {
    die_img[0].src = "./assets/die-5.png";
  }

  if (die_value === 6) {
    die_img[0].src = "./assets/die-6.png";
  }

  alert("Player has rolled " + die_value);
  change_player();
  set_score();
}

//=============================================>  # SCORE BOARD
function change_player() {
  if (current_player === "player_1") {
    current_player = "player_2";
  } else if (current_player === "player_2") {
    current_player = "player_1";
  }
  return;
}

function set_score() {
  if (current_player === "player_1") {
    player__1_score[0].textContent =
      Number(player__1_score[0].textContent) + die_value;
  } else if (current_player === "player_2") {
    player__2_score[0].textContent =
      Number(player__2_score[0].textContent) + die_value;
  }
  return;
}
//=============================================>  # RACE TRACK CODE
let current_player = 'player one';
