
function getValue() {
    // Get the radio buttons
    var qu1 = document.getElementsByName('question1');
    var qu2 = document.getElementsByName('question2');
    var qu3 = document.getElementsByName('question3');
    var qu4 = document.getElementsByName('question4');
    var qu5 = document.getElementsByName('question5');
    var qu6 = document.getElementsByName('question6');
    var qu7 = document.getElementsByName('question7');
    var qu8 = document.getElementsByName('question8');
    var qu9 = document.getElementsByName('question9');
    var qu10 = document.getElementsByName('question10');
    // Initialize the total
    var total = 0;
  
    total = qu1 + qu2 + qu3 + qu4 + qu5 + qu6 + qu7 + qu8 + qu9 + qu10;

    document.getElementById("an").value = (total);
}
