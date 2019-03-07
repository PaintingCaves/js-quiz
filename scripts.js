// let questions = [{
//     title: 'test1',
//     questionNumber: 1,
//     questionBody: 'this is a question',
//     answers: ['apple', 'orange', 'pear', 'plum'],
//     correctAnswer: 'apple'
//   },
//   {
//     title: 'test2',
//     questionNumber: 2,
//     questionBody: 'this is a question',
//     answers: ['car', 'truck', 'bike', 'boat'],
//     correctAnswer: 'boat'
//   }
// ]
// let messages = [
//   "How!?",
//   "Nearly there",
//   "Nice!"
// ]



function formCreator() {
  document.getElementById('top').appendChild(document.createElement('form')).id = 'formBody';
}

formCreator()

function formFiller() {
  for (question of questions) {

    document.getElementById('formBody').appendChild(document.createElement('fieldset')).id = question.questionNumber;
    document.getElementById(question.questionNumber).innerHTML =
      `<p>${question.questionNumber}) ${question.questionBody}</p>
      <label><input type="radio"  name="${question.title}" value="${question.answers[0]}"> ${question.answers[0]}</label><br>
    <label><input type="radio"  name="${question.title}" value="${question.answers[1]}"> ${question.answers[1]}</label><br>
    <label><input type="radio"  name="${question.title}" value="${question.answers[2]}"> ${question.answers[2]}</label><br>
    <label><input type="radio"  name="${question.title}" value="${question.answers[3]}"> ${question.answers[3]}</label><br>
    `;
  }
}

formFiller()

function buttonMaker(position, id, content) {
  document.getElementById(position).appendChild(document.createElement('div')).innerHTML = `<button type="button" id="${id}">${content}</button>`;
}

buttonMaker("formBody", "submitter", "Submit your answers");

let rawResults = [];
let memo = [];
let score = 0;

function resultsTaker() {
  for (i = 1; i < questions.length + 1; i++) {
    let singleResult = document.querySelector('input[name=part' + i + ']:checked').value;
    rawResults.push(singleResult);
  }
  console.log(rawResults);
}


function memoCreator() {
  for (question of questions) {
    let singleMemo = (question.correctAnswer);
    memo.push(singleMemo);
  }
  console.log(memo);
}

function marker() {
  for (i = 0; i < questions.length; i++) {
    if (rawResults[i] == memo[i]) {
      score++;
    }
  }
  console.log(score);
}

document.getElementById("submitter").addEventListener('click', function () {
  try {
    resultsTaker()
    memoCreator();
    document.getElementById("formBody").style.display = "none";
    marker();
    resultsDisplay();
  } catch (err) {
    alert('Fill in every question please!')
    rawResults = []

  };


});

function resultsDisplay() {
  document.getElementById('top').appendChild(document.createElement('p')).innerHTML = `<p> You got ${score} out of ${questions.length}</p>`;
  if (score < 0) {
    document.getElementById('top').appendChild(document.createElement('p')).innerHTML = `<p>${messages[0]}</p>`;
  } else if (score > -1 && score < 5) {
    document.getElementById('top').appendChild(document.createElement('p')).innerHTML = `<p>${messages[1]}</p>`;
  } else if (score > 5 && score < 11) {
    document.getElementById('top').appendChild(document.createElement('p')).innerHTML = `<p>${messages[2]}</p>`;
  } else if (score > 11 && score < 16) {
    document.getElementById('top').appendChild(document.createElement('p')).innerHTML = `<p>${messages[3]}</p>`;
  } else if (score > 16 && score < 20) {
    document.getElementById('top').appendChild(document.createElement('p')).innerHTML = `<p>${messages[4]}</p>`;
  } else if (score == 20) {
    document.getElementById('top').appendChild(document.createElement('p')).innerHTML = `<p>${messages[5]}</p>`;
    sovietIntensifies();
  }
}

function sovietIntensifies() {
  document.getElementById('top').appendChild(document.createElement('div')).innerHTML = `<iframe width="420" height="315"
  src = "https://www.youtube.com/embed/U06jlgpMtQs?rel=0&autoplay=1"
  allow = 'autoplay' >
  </iframe>`;
}