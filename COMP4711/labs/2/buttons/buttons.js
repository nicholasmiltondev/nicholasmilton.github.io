

fetch("https://raw.githubusercontent.com/nicholasmiltondev/nicholasmiltondev.github.io/master/COMP4711/labs/2/buttons/buttons.json").then(function(resp){
        return resp.json();
    }).then(function(data){
        
for(let j = 0; j < 26; j++){
    let inputAlphabet = document.createElement("input");
    document.body.appendChild(inputAlphabet);

    inputAlphabet.type = "button";
    inputAlphabet.setAttribute("value", data.alphabet[j]);
    inputAlphabet.onclick = alertAlpha;
}
}); 

function alertAlpha(click){
    console.log("alertAlpha", arguments);
    alert(click.target.value);
}
