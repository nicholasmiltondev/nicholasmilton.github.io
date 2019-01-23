var askNumberOfQuestions = prompt("Enter number of questions you want to answer.", "Enter a number");
if(askNumberOfQuestions == null || askNumberOfQuestions == ""){
    
} else {
    fetch("https://raw.githubusercontent.com/nicholasmiltondev/nicholasmiltondev.github.io/master/COMP4711/labs/2/quizQuestions/quiz.json").then(function(resp){
        return resp.json();
    }).then(function(data){
        for(let i = 1; i <= askNumberOfQuestions; i++){
            let btn = document.createElement("BUTTON");
            document.body.appendChild(btn);
            btn.innerHTML = data.buttons[i];
        }
        for(let j = 0; j < 26; j++){
            let inputAlphabet = document.createElement("input");
            document.body.appendChild(inputAlphabet);
            inputAlphabet.type = "button";
            inputAlphabet.setAttribute("value", data.alphabet[j]);
            inputAlphabet.onclick = alertAlpha;
        }
    }); 
    
    function alertAlpha(){
        console.log("alertAlpha", arguments);
        alert("works");
    }
}