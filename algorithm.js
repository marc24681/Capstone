
function getValue() {
    // Get the radio buttons
   
    const q1 = parseInt(document.querySelector('input[name="question1"]:checked').value);
    const q2 = parseInt(document.querySelector('input[name="question2"]:checked').value);
    const q3 = parseInt(document.querySelector('input[name="question3"]:checked').value);
    const q4 = parseInt(document.querySelector('input[name="question4"]:checked').value);
    const q5 = parseInt(document.querySelector('input[name="question5"]:checked').value);
    const q6 = parseInt(document.querySelector('input[name="question6"]:checked').value);
    const q7 = parseInt(document.querySelector('input[name="question7"]:checked').value);
    const q8 = parseInt(document.querySelector('input[name="question8"]:checked').value);
    const q9 = parseInt(document.querySelector('input[name="question9"]:checked').value);
    const q10 = parseInt(document.querySelector('input[name="question10"]:checked').value);
    const totalScore = q1 + q2 + q3 + q4 + q5 + q6 + q7 + q8 + q9 +q10;
    document.getElementById('score').innerHTML = totalScore;
      
    window.location.href = "answer.html?total=" + total;
}
