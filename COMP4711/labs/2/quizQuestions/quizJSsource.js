let btn1 = document.createElement("BUTTON");
document.body.appendChild(btn1);
btn1.innerHTML = 'Show other buttons';

btn1.onclick = function(){showButtons()};

function showButtons(){
var zeroToFive = 5;

    for(let i = 1; i <= zeroToFive; i++){
        let btn = document.createElement("BUTTON");
        document.body.appendChild(btn);
        btn.innerHTML = 'test value';
    }
}