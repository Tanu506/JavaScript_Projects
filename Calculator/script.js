const input = document.getElementById('display');
const btns = document.querySelectorAll('button')

btns.forEach(function(btn){
   btn.addEventListener("click",function(){
   const val = btn.innerText;

   if(val == "C"){
     input.value = "";
   }else if(val == "DEL"){
     input.value = input.value.slice(0,-1);
   }else if(val == "="){
    //  input.value = eval(input.value);
    input.value = calculate(input.value);
   }else{
     input.value += val;
   }
  })
})


function calculate(expression) {
    if (expression.includes("+")) {
        let parts = expression.split("+");
        return Number(parts[0]) + Number(parts[1]);
    }

    if (expression.includes("-")) {
        let parts = expression.split("-");
        return Number(parts[0]) - Number(parts[1]);
    }

    if (expression.includes("*")) {
        let parts = expression.split("*");
        return Number(parts[0]) * Number(parts[1]);
    }

    if (expression.includes("/")) {
        let parts = expression.split("/");
        return Number(parts[0]) / Number(parts[1]);
    }

    if (expression.includes("%")) {
        let parts = expression.split("%");
        return Number(parts[0]) % Number(parts[1]);
    }

    return expression;
}