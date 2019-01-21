var askNumberOfQuestions = prompt("Enter number of questions you want to answer.", "Enter a number");
if(askNumberOfQuestions == null || askNumberOfQuestions == ""){
    
} else {
    fetch().then(function(resp){
        return resp.json();
    }).then(function(data){
        for(let i = 1; i <= askNumberOfQuestions; i++){
            let btn = document.createElement("BUTTON");
            document.body.appendChild(btn);
            btn.innerHTML = i;
            //btn.innerHTML = data[i].buttons;
        }
    });    
}
