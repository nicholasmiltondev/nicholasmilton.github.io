function displaySavedQuestions() {
    if (typeof (Storage) !== "undefined") {
        // find current number to name question.
        let num = localStorage.getItem("clickcount");
        if (num == null)
            return;
        for (let t = 0; t <= num; t++) {
            // Create div to hold Q&A.
            let d = document.createElement("div");
            d.id = "div" + t;
            if (localStorage.getItem("div" + t) != "skip")
                document.body.appendChild(d);
            // Create blank textbox for question.
            let inputQuestion = document.createElement("p");
            inputQuestion.innerHTML = localStorage.getItem("question" + t);
            inputQuestion.id = "question" + t;
            d.appendChild(inputQuestion);

            // Create a container for each option
            for (let i = 0; i < 4; i++) {
                let qd = document.createElement("div");
                qd.id = "div" + t + "a" + i;
                d.appendChild(qd);

                let rbutton = document.createElement("input");
                rbutton.type = "radio";
                rbutton.name = "options" + t;
                rbutton.id = "option" + t + "a" + i;
                rbutton.value = i;
                qd.appendChild(rbutton);

                let inputAnswer = document.createElement("p");
                inputAnswer.id = "answer" + t + "a" + i;
                inputAnswer.innerHTML = localStorage.getItem("answer" + t + "a" + i);
                qd.appendChild(inputAnswer);
            }
        }
    }
}

function markQuiz() {
    let score = 0;
    let num = localStorage.getItem("clickcount");
    if (num == null)
        return;
    for (let t = 0; t <= num; t++) {
        for (let i = 0; i < 4; i++) {
            if (document.getElementById('option' + t + 'a' + i).checked)
                document.getElementById('div' + t + 'a' + i).style.backgroundColor = "red";
            if (localStorage.getItem("option" + t + "a" + i) === "true") {
                document.getElementById('div' + t + 'a' + i).style.backgroundColor = "green";
                if (document.getElementById('option' + t + 'a' + i).checked)
                    score++;
            }
        }
    }
    document.getElementById("finalScore").innerHTML = "You got " + score + " out of " + (parseInt(num) + 1) + "!";
}
