//=============================================>  # VARIABLE
let die_value = 1;
const die_img = document.getElementsByClassName('die-img');
const die = document.getElementsByClassName('die');
console.log(die);
let current_player = 'player_2';
const player__1_score = document.getElementsByClassName('player__1_score');
const player__2_score = document.getElementsByClassName('player__2_score');
const player__one_track = document.getElementsByClassName("player__one-track")
const player__two_track = document.getElementsByClassName("player__two-track")
const player__one = document.getElementsByClassName("player__one")
const player__two = document.getElementsByClassName("player__two")
let player__one_positon = 0
let player__two_positon = 0
let winner 
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
  change_player();
  set_score();

  move_car()
  name_winner()
}

//=============================================>  # SCORE BOARD
function change_player() {
  if (current_player === 'player_1') {
    current_player = 'player_2';
  } else if (current_player === 'player_2') {
    current_player = 'player_1';
  }
  return;
}

function set_score() {
  if (current_player === 'player_1') {
    player__1_score[0].textContent =
      Number(player__1_score[0].textContent) + die_value;
  } else if (current_player === 'player_2') {
    player__2_score[0].textContent =
      Number(player__2_score[0].textContent) + die_value;
  }
  return;
}
//=============================================>  # RACE TRACK CODE
function move_car() {
  if (current_player === 'player_1') {
    player__one_positon += die_value
    player__one[0].style.transform = `translateX(${player__one_positon * 30}px)`
  }
  else if(current_player === 'player_2') {
    player__two_positon += die_value
    player__two[0].style.transform = `translateX(${player__two_positon * 30}px)`
  }
}
function name_winner() {
  if (player__one_positon >= 40) {
  alert ("winer is player one🎉🎉🎉🎈🎈🎈🥳🥳🥳")
  player__one_positon = 0
  player__two_positon = 0
  }
  else if (player__two_positon >= 40) {
    alert ("winer is player two🎉🎉🎉🎈🎈🎈🥳🥳🥳")
    player__one_positon = 0
    player__two_positon = 0
    }
}
 
