var buttons = document.getElementsByTagName("button");
var display = document.getElementById("text-area");
var display_always = document.getElementById("text-area_always");
var operand1 = 0;
var operand2 = 0;
var operator = null;
var reset = 0;

for(var i = 0; i<buttons.length; i++){
    buttons[i].addEventListener('click', function(){
        var value = this.getAttribute('data');
        if(value=='+'){
            if(operator!=null){
                operator = value;
            }
            else{
                operator = '+';
                operand1 = parseFloat(display.textContent);
                display.innerText = "+";
                display_always.innerText += "+";
                reset=1;
            }
            
        }
        else if(value=='-'){
            if(operator!=null){
                operator = value;
            }
            else{
                operator = '-';
                operand1 = parseFloat(display.textContent);
                display.innerText = "-";
                display_always.innerText += "-";
                reset=1;
            }
            
        }
        else if(value=='X'){
            if(operator!=null){
                operator = value;
            }
            else{
                operator = '*';
                operand1 = parseFloat(display.textContent);
                display.innerText = "x";
                display_always.innerText += "x";
                reset=1;
            }
            
        }
        else if(value=='/'){
            if(operator!=null){
                operator = value;
            }
            else{
                operator = '/';
                operand1 = parseFloat(display.textContent);
                display.innerText = "/";
                display_always.innerText += "/";
                reset=1;
            }
            
        }
        else if(value=='%'){
            if(operator!=null){
                operator = value;
            }
            else{
                operator = '%';
                operand1 = parseFloat(display.textContent);
                display.innerText = "%";
                display_always.innerText += "%";
                reset=1;
            }
            
        }
        else if(value == '='){
            operand2 = parseFloat(display.textContent);
            var temp = eval(operand1+operator+operand2);
            display.innerText = temp;
            display_always.innerText = temp;
            operator = null;
            operand1 = temp;
            operand2 = 0;
        }
        else if(value=='C'){
            display.innerText = "";
            display_always.innerText = "";
            operator = null;
            operand1 = 0;
            operand2 = 0;
        }
        else if(value=='CE'){
            var sub_str = display_always.innerText.substring(0,display_always.innerText.length-display.innerText.length);
            display.innerText = "";
            display_always.innerText = sub_str;
            operand2 = 0;
        }
        else if(value=='E'){
            display.innerText =  display.innerText.substring(0,display.innerText.length-1);
            display_always.innerText = display_always.innerText.substring(0,display_always.innerText.length-1);
        }
        else{
            if(reset==1){
                display.innerText = value;
                display_always.innerText += value;
                reset=0;
            }else{
                display.innerText += value;
                display_always.innerText += value;
            }
        }
    });
}