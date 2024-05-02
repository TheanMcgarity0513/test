window.onload = function() {
    app = document.getElementById("main");
    app.innerHTML = `<div id="calc">
    <div id="rowPROB"><h2 id="txt"></h2></div>
    <div id="row1">
        <button onclick="eq()">=</button>
        <button onclick="add()">+</button>
        <button onclick="sb()">-</button>
    </div>
    <div id="row2">
        <button onclick="num(1)">1</button>
        <button onclick="num(2)">2</button>
        <button onclick="num(3)">3</button>
    </div>
    <div id="row3">
        <button onclick="num(4)">4</button>
        <button onclick="num(5)">5</button>
        <button onclick="num(6)">6</button>
    </div>
    <div id="row4">
        <button onclick="num(7)">7</button>
        <button onclick="num(8)">8</button>
        <button onclick="num(9)">9</button>
    </div>
    <div id="row5">
        <button onclick="num(0)">0</button>
        <button onclick="dec()">.</button>
        <button onclick="none()">X</button>
    </div>
    <div id=rowANS><textarea hidden readonly></textarea></div>
</div>`;
}
let app;
let num1;
let num2;
let sol;
let op = "none";
let isDec = false;

function sb(){
    op = "sub"
    if (num1 == null)
        num1 = 0;
    calcDisplay();
}function add(){
    op = "add"
    
    if (num1 == null)
        num1 = 0;
    calcDisplay();
}function eq(){
    if (op=="add"){
        sol = String(num1+num2)
    }
    else if (op =="sub"){
        sol = String(num1-num2)
    }
    calcDisplay();
}
function none(){
    op = "none"
    calcDisplay();

}
function dec(){
    if (op == "none"){
        if (String(num1).includes("."))
            return;
        isDec = !isDec
    }
    else{
        if (String(num2).includes("."))
            return;
        isDec = !isDec
    }
    calcDisplay();
}
function calcDisplay(){
    var opS
    switch (op){
        case "none":
            opS="?"
            break;
        case "add":
            opS="+"
            break;
        case "sub":
            opS="-"
            break;
    }
    var number1;
    if (num1 == null){
        number1 = "___"
    }
    else number1 = num1

    var number2;
    if (num2 == null){
        number2 = "___"
    }
    else number2 = num2

    var solution;
    if (sol == null){
        solution = "___"
    }
    else solution = sol
    var dec;
    if (!isDec){
        dec = ""
    }
    else dec = "."
    
    var prob = `${number1} ${opS} ${number2} = ${solution}`
    document.getElementById("txt").innerText = prob;
    return prob;
}

function num(val){
    var num = String(val);
    if (op == "none"){
        
        if (num1 != null){
            if (isDec){
                num1 = Number((String(num1) + "." + num));
                isDec = false;
            }
            else{
                num1 = Number((String(num1) + num));
            }
        }
            
        else num1 = Number(num);
    }
    else{
        if (num2 != null){
            if (isDec){
                num2 = Number((String(num2) + "." + num));
                isDec = false;
            }
            else{
                num2 = Number((String(num2) + num));
            }
        }
        else num2 = Number(num);
    }
    calcDisplay();
}
