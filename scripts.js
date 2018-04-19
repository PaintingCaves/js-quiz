let questions = [{
    title: 'test1',
    questionNumber: 1,
    questionBody: 'this is a question',
    answers: ['apple', 'orange', 'pear', 'plum'],
    correctAnswer: 'apple'
  },
  {
    title: 'test2',
    questionNumber: 2,
    questionBody: 'this is a question',
    answers: ['car', 'truck', 'bike', 'boat'],
    correctAnswer: 'boat'
  }
]





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

function buttonMaker() {
  $("#formBody").after(`<button type="button" id="submitter">Submit your answers</button>`);
}
let rawResults = [];

function resultsTaker() {
  for (i = 1; i < 3; i++) {
    let singleResult = $('input[name=test' + i + ']:checked', '#formBody').val();
    rawResults.push(singleResult);
  }
  console.log(rawResults);
}
formCreator();
formFiller();
buttonMaker();

$("#submitter").click(function() {
  resultsTaker();
});
