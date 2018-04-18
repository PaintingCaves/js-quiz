let questions = [{
  title: 'test1',
  questionNumber: 1,
  questionBody: 'this is a question',
  answerOne: 'apple',
  answerTwo: 'orange',
  answerThree: 'pear',
  answerFour: 'plum',
  correctAnswer: 'apple'
},
{
  title: 'test2',
  questionNumber: 2,
  questionBody: 'this is a question',
  answerOne: 'car',
  answerTwo: 'truck',
  answerThree: 'bike',
  answerFour: 'boat',
  correctAnswer: 'boat'
}]





function formCreator(){
  $("#top").append("<form id=\"formBody\"></form>");
}

function formFiller(){
  for (question of questions){
    $("#formBody").append(`<p>${question.questionNumber}) ${question.questionBody}</p>`);
    $("#formBody").append(`<fieldset id="${question.questionNumber}">
      <input type="radio" name="${question.title}" value="${question.answerOne}"> ${question.answerOne}<br>
    <input type="radio" name="${question.title}" value="${question.answerTwo}"> ${question.answerTwo}<br>
    <input type="radio" name="${question.title}" value="${question.answerThree}"> ${question.answerThree}<br>
    <input type="radio" name="${question.title}" value="${question.answerFour}"> ${question.answerFour}<br>
    </fieldset>`);
  }
}

function buttonMaker(){
  $("#formBody").after(`<button type="button" id="submitter">Submit your answers</button>`);
}
let rawResults=[];

function resultsTaker(){
  for (i=1; i<3;i++){
    let singleResult = $('input[name=test'+i+']:checked', '#formBody').val();
    rawResults.push(singleResult);
  }
  console.log(rawResults);
}
formCreator();
formFiller();
buttonMaker();


$("#submitter").click(function(){
  resultsTaker();
});
