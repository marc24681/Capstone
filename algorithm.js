
function getValue() {
    // Get the radio buttons
    var qu1 = document.getElementsByName('question1').value;
    var qu2 = document.getElementsByName('question2').value;
    var qu3 = document.getElementsByName('question3').value;
    var qu4 = document.getElementsByName('question4').value;
    var qu5 = document.getElementsByName('question5').value;
    var qu6 = document.getElementsByName('question6').value;
    var qu7 = document.getElementsByName('question7').value;
    var qu8 = document.getElementsByName('question8').value;
    var qu9 = document.getElementsByName('question9').value;
    var qu10 = document.getElementsByName('question10').value;
    // Initialize the total
    var total = 0;
  
    total = qu1 + qu2 + qu3 + qu4 + qu5 + qu6 + qu7 + qu8 + qu9 + qu10;

    document.getElementById("an").value = (total);
}
