var askNumberOfQuestions = prompt("Enter number of questions you want to answer.", "Enter a number");
if(askNumberOfQuestions == null || askNumberOfQuestions == ""){
    
} else {
    fetch().then(function(resp){
        return resp.json();
    }).then(function(data){
        showButtons(askNumberOfQuestions, data);
    });
    
}

function showButtons(n, data){

    for(let i = 1; i <= n; i++){
        let btnName = data[i].buttons;
        let btn = document.createElement(btnName);
        document.body.appendChild(btn);
        btn.innerHTML = 'test value';
    }
}