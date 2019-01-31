function addQuestion() {
    // Check local storage.
    if (typeof (Storage) !== "undefined") {
        // If exists, increment by 1.
        if (localStorage.clickcount) {
            localStorage.clickcount = Number(localStorage.clickcount) + 1;
        } else {
            localStorage.clickcount = 0;
        }

        // find current number to name question.
        let num = localStorage.getItem("clickcount");
        // Create div to hold Q&A.
        let d = document.createElement("div");
        document.body.appendChild(d);
        // Create blank textbox for question.
        let inputQuestion = document.createElement("input");
        inputQuestion.type = "text";
        inputQuestion.placeholder = "Enter a question" + num;
        inputQuestion.name = "question" + num;
        inputQuestion.id = "question" + num;
        d.appendChild(inputQuestion);

        // Create a container for each option
        for (let i = 0; i < 4; i++) {
            let qd = document.createElement("div");
            d.appendChild(qd);

            let rbutton = document.createElement("input");
            rbutton.type = "radio";
            rbutton.name = "options" + num;
            rbutton.id = "option" + num + "a" + i;
            rbutton.value = i;
            qd.appendChild(rbutton);

            let inputAnswer = document.createElement("input");
            inputAnswer.type = "text";
            inputAnswer.id = "answer" + num + "a" + i;
            inputAnswer.placeholder = "Enter an answer";
            qd.appendChild(inputAnswer);
        }
        let dl = document.createElement("div");
        d.appendChild(dl);

        let deleteLabel = document.createElement("p");
        deleteLabel.innerHTML = "Delete question number: ";
        dl.appendChild(deleteLabel);

        let dButton = document.createElement("input");
        dl.appendChild(dButton);
        dButton.type = "button";
        dButton.setAttribute("value", num);
        dButton.innerHTML = "Delete";
        dButton.onclick = deleteQuestion;


        let space1 = document.createElement("p");
        d.appendChild(space1);
    }
}

function clearStorage() {
    localStorage.clear();
    location.reload();
}

function savePage() {
    let num = localStorage.getItem("clickcount");
    for (let k = 0; k < num; k++) {
        localStorage.setItem('question' + k, document.getElementById('question' + k).value);
        for (let m = 0; m < 4; m++) {
            localStorage.setItem('option' + k + 'a' + m, document.getElementById('option' + k + 'a' + m).checked);
            localStorage.setItem('answer' + k + 'a' + m, document.getElementById('answer' + k + 'a' + m).value);

        }
    }
}

function displaySavedQuestions() {
    if (typeof (Storage) !== "undefined") {
        // find current number to name question.
        let num = localStorage.getItem("clickcount");
        for (let t = 0; t < num; t++) {
            // Create div to hold Q&A.
            let d = document.createElement("div");
            d.id = "div" + t;
            if (localStorage.getItem("div" + t) != "skip")
                document.body.appendChild(d);
            // Create blank textbox for question.
            let inputQuestion = document.createElement("input");
            inputQuestion.type = "text";
            inputQuestion.value = localStorage.getItem("question" + t);
            inputQuestion.name = "question" + t;
            inputQuestion.id = "question" + t;
            d.appendChild(inputQuestion);

            // Create a container for each option
            for (let i = 0; i < 4; i++) {
                let qd = document.createElement("div");
                d.appendChild(qd);

                let rbutton = document.createElement("input");
                rbutton.type = "radio";
                rbutton.name = "options" + t;
                rbutton.id = "option" + t + "a" + i;
                rbutton.checked = (localStorage.getItem("option" + t + "a" + i) === "true");
                qd.appendChild(rbutton);

                let inputAnswer = document.createElement("input");
                inputAnswer.type = "text";
                inputAnswer.id = "answer" + t + "a" + i;
                inputAnswer.value = localStorage.getItem("answer" + t + "a" + i);
                qd.appendChild(inputAnswer);
            }
            let dl = document.createElement("div");
            d.appendChild(dl);

            let deleteLabel = document.createElement("p");
            deleteLabel.innerHTML = "Delete question number: ";
            dl.appendChild(deleteLabel);

            let dButton = document.createElement("input");
            d.appendChild(dButton);
            dButton.type = "button";
            dButton.setAttribute("value", t);
            dButton.innerHTML = "Delete";
            dButton.onclick = deleteQuestion;

            let space1 = document.createElement("p");
            d.appendChild(space1);
        }
    }
}

function deleteQuestion(click) {
    let y = click.target.value;
    localStorage.setItem("div" + y, "skip");
    location.reload();
}
