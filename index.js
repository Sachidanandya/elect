
function submitt(){
    const num1 =document.getElementById("num1").value
const num2 =document.getElementById("num2").value
const num3 =document.getElementById("num3").value
const num4=parseInt(num1)-parseInt(num2);
 document.getElementById("result").innerHTML= num4*num3;
    
}
