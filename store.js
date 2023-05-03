function submit() {
    var form = document.getElementById("questions");
    var answer1 = parseInt(form.elements["q1"].value);
    localStorage.setItem("q1", answer1);
    var answer2 = parseInt(form.elements["q2"].value);
    localStorage.setItem("q2", answer2);
    var answer3 = parseInt(form.elements["q3"].value);
    localStorage.setItem("q3", answer3);
    var answer4 = parseInt(form.elements["q4"].value);
    localStorage.setItem("q4", answer4);
    var answer5 = parseInt(form.elements["q5"].value);
    localStorage.setItem("q5", answer5);
    var answer6 = parseInt(form.elements["q6"].value);
    localStorage.setItem("q6", answer6);
    var answer7 = parseInt(form.elements["q7"].value);
    localStorage.setItem("q7", answer7);
    var answer8 = parseInt(form.elements["q8"].value);
    localStorage.setItem("q8", answer8);
    var answer9 = parseInt(form.elements["q9"].value);
    localStorage.setItem("q9", answer9);
    var answer10 = parseInt(form.elements["q10"].value);
    localStorage.setItem("q10", answer10);

    window.location.href = "answer.html";
  }
  