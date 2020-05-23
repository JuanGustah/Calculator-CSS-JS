function addInput(element){
    document.getElementById('result').value+=element.value;
    document.getElementById('backButton').style="transform:translateY(-30px);opacity:100%;z-index:2;"
}
function showResult(){
    var result=document.getElementById('result').value;
    result=eval(result);
    document.getElementById('result').value=result;
}
function isInputEmpty(){
    var inputCheck=document.getElementById('result').value;
    if(inputCheck!=""){
        document.getElementById('backButton').style="transform:translateY(-30px);opacity:100%;z-index:2;"
    }
}
function back(){
    var str=document.getElementById('result').value;
    str = str.substring(0,(str.length - 1));
    document.getElementById('result').value=str;
}