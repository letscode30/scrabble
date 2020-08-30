// variable declarations

var alpha = 'abcdefghijklmnopqrstuvwxyz'.split('');
var score = '42781642164925376137215389'.split('').map(num => Number(num));
var vowels = 'aeiou'.split('');
var marks = '41132'.split('').map(num => Number(num));
var temp = [];
var temp1 = [];
var final = [];
var finalscore = [];
var buttons = document.querySelectorAll('.btn-basic');
var tiles = document.querySelectorAll('.set');
var ele = document.querySelectorAll('.set1');
var cells = document.querySelectorAll('.tab');
var t = 0;
var total = 0;
var count = 0;
var gt = 0;

// calling events on buttons

buttons[0].addEventListener('click', start);
buttons[1].addEventListener('click', enter);
buttons[2].addEventListener('click', reset);
buttons[3].addEventListener('click', call);

// pushing words & scores to final arrays

for (let i = 0; i < tiles.length; i++) {
  document.querySelector('#box-' + i).addEventListener('click', function () {
    final.push(temp[i]);
    temp[i] = '';

    finalscore.push(temp1[i]);
    temp1[i] = '';
  });
}

for (let i = 0; i < ele.length; i++) {
  document.querySelector('#v-' + i).addEventListener('click', function () {
    final.push(vowels[i]);
    finalscore.push(marks[i]);
  });
}

// start button function

function start() {
  while (temp.length != 7 && temp1.length != 7) {
    var a = getRndInteger(0, 25);

    temp.push(alpha[a]);
    temp1.push(score[a]);
  }

  for (let i = 0; i < temp.length; i++) {
    document.querySelector('#box-' + i).innerHTML =
      '<li>' + temp[i] + '</li>' + '<li>' + temp1[i] + '</li>';
  }

  for (let i = 0; i < vowels.length; i++) {
    document.querySelector('#v-' + i).innerHTML =
      '<li>' + vowels[i] + '</li>' + '<li>' + marks[i] + '</li>';
  }
}

//  vowel call button function

function call() {
  for (let i = 0; i < ele.length; i++) {
    ele[i].style.display = 'block';
  }
}

// random integar function

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// reset button function

function reset() {
  for (j = 0; j < temp.length; j++) {
    if (temp[j] === '') {
      var a = getRndInteger(0, 25);
      temp[j] = alpha[a];
      temp1[j] = score[a];
      document.querySelector('#box-' + j).innerHTML =
        '<li>' + temp[j] + '</li>' + '<li>' + temp1[j] + '</li>';
    }
  }
  //  flushing out arrays

  var z = final.length;
  final.splice(-z);

  var y = finalscore.length;
  finalscore.splice(-y);

  total = 0;
}

// enter button function

function enter() {
  for (s = 0; s < finalscore.length; s++) {
    total += finalscore[s];
  }

  cells[t].innerHTML =
    '<li>' + final.join('') + '</li>' + '<li>' + total + '</li>';
  t++;
  count++;
  gt += total;

  // win the board

  if (count === 48) {
    alert('CONGRATULATIONS! YOU WIN THE BOARD');
    alert('you made ' + count + 'words.' + 'your total score is ' + gt);
  }
}

// call for endgame

setTimeout(function () {
  alert('Time Over');
  alert('you made ' + count + ' words.' + 'your total score is ' + gt);
}, 900000);

//scrap

// document.querySelector('#btn1').addEventListener('click', start);
// document.querySelector('#btn4').addEventListener('click', call);
//console.log(temp);
//console.log(buttons);
//console.log(vowels);
//console.log(temp);
//console.log(tiles);
// for (i = 0; i < tiles.length; i++) {
//   tiles[i].addEventListener('click', function () {
//     final.push(temp[i]);
//     console.log(final);
//     console.log('noone');
//   });
// }
//function select() {
//   switch (tiles) {
//     case tiles:
//       final.push(temp[0]);
//       console.log(final[0]);
//       break;

//     default:
//       // console.log(final);
//       break;
//   }

//   //console.log(temp);
// }
// for (i = 0; i < ele.length; i++) {
//   ele[i].addEventListener('click', select);
// }

// console.log(word[2]);
//boxes[0].innerHTML = '<li>' + word + '</li>';
//boxes[0].innerHTML = ',';
// for (k = 0; k < final.length; k++) {
//   document.querySelector('#t-' + k).innerHTML = final.join('');
// }
