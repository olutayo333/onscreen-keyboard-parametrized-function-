function enter()
{

}
 function transformm()
 {  
    let trans = document.getElementById('screen').innerText;
    document.getElementById('screen').innerHTML = trans.toUpperCase()
 }
function clickTapSay(text)
{ document.getElementById('screen').innerHTML += text;}

function clearScreen()
{ document.getElementById('screen').innerHTML = "";}

function backSpace()
{
    let text = document.getElementById('screen').innerHTML;
    let newText = text.slice(0,-1);
   document.getElementById('screen').innerHTML = newText;
   //screen.innerHTML = newText
}
