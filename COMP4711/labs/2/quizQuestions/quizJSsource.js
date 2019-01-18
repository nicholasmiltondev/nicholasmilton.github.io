var number;
var askNumberOfQuestions = prompt("Enter number of questions you want to answer.");
if(askNumberOfQuestions == null || askNumberOfQuestions == ""){
    
} else {
    showButtons(number);
}

function showButtons(n){

    for(let i = 1; i <= n; i++){
        let btn = document.createElement("BUTTON");
        document.body.appendChild(btn);
        btn.innerHTML = 'test value';
    }
}