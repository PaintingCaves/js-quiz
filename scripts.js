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
  $("#top").append("<form id=\"formBody\"></form>");
}

function formFiller() {
  for (question of questions) {
    $("#formBody").append(`<p>${question.questionNumber}) ${question.questionBody}</p>`);
    $("#formBody").append(`<fieldset id="${question.questionNumber}">
      <input type="radio" name="${question.title}" value="${question.answers[0]}"> ${question.answers[0]}<br>
    <input type="radio" name="${question.title}" value="${question.answers[1]}"> ${question.answers[1]}<br>
    <input type="radio" name="${question.title}" value="${question.answers[2]}"> ${question.answers[2]}<br>
    <input type="radio" name="${question.title}" value="${question.answers[3]}"> ${question.answers[3]}<br>
    </fieldset>`);
  }
}

function buttonMaker(position, id, content) {
  $(position).after(`<button type="button" id="${id}">${content}</button>`);
}
let rawResults = [];
let memo = [];
let score = 0;

function resultsTaker() {
  for (i = 1; i < questions.length + 1; i++) {
    let singleResult = $('input[name=part' + i + ']:checked', '#formBody').val();
    rawResults.push(singleResult);
  }
  console.log(rawResults);
}
formCreator();
formFiller();
buttonMaker("#formBody", "submitter", "Submit your answers");

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

$("#submitter").click(function() {
  resultsTaker();
  memoCreator();
  buttonMaker("#submitter", "viewer", "see your results");
});

function resultsDisplay() {
  $("#top").append(`<p> You got ${score} out of ${questions.length}</p>`);
  $("#top").append(`<p>${messages[score]}</p>`);
}



$("#top").on('click', "#viewer", function() {
  $("#formBody").hide();
  marker();
  resultsDisplay();

});
