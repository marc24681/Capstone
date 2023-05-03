
function getValue() {
    // Get the radio buttons
   
    var q1 = parseInt(localStorage.getItem("q1"));
    var q2 = parseInt(localStorage.getItem("q2"));
    var q3 = parseInt(localStorage.getItem("q3"));
    var q4 = parseInt(localStorage.getItem("q4"));
    var q5 = parseInt(localStorage.getItem("q5"));
    var q6 = parseInt(localStorage.getItem("q6"));
    var q7 = parseInt(localStorage.getItem("q7"));
    var q8 = parseInt(localStorage.getItem("q8"));
    var q9 = parseInt(localStorage.getItem("q9"));
    var q10 = parseInt(localStorage.getItem("q10"));
    var totalScore = q1 + q2 + q3 + q4 + q5 + q6 + q7 + q8 + q9 +q10;
    document.getElementById('score').innerHTML = totalScore;
      
    
}
