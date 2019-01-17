var zeroToFive = 5;

function loopButtons(zeroToFive){
    for(let i = 1; i <= zeroToFive; i++){
        let btn = document.createElement("BUTTON");
        document.body.appendChild(btn);
        btn.innerHTML = 'test value';
    }
}