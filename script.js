var display = document.getElementById('display');
var prev = document.getElementById('prevCalc');
var curr = document.getElementById('currCalc');
let buttons = Array.from(document.getElementsByClassName("button"));
let clearBtn = document.getElementById('CL');
let deleteBtn = document.getElementById('DL');
var evalComplete = false;

buttons.map(element => {
    element.addEventListener('click', function(){
        if(element.innerText == "="){
            try{
                let result = eval(curr.innerText);
                curr.innerText = result;
                evalComplete = true;
            }
            catch{
                curr.innerText = "ERROR";
            }

        }
        else{
            curr.innerText += element.innerText;
            
        }
        
    })
});


clearBtn.addEventListener('click', function(){
    curr.innerText = "";
    console.log("cleared");
})
deleteBtn.addEventListener('click', function(){
    curr.innerText = curr.innerText.slice(0,-1)
})