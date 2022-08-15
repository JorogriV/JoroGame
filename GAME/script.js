var denis = document.getElementById("denis");
var huy = document.getElementById("huy");
var t = document.getElementById("t");
function jump(){
    if(denis.classList !="animate"){
    denis.classList.add("animate");}
    setTimeout(function(){
        denis.classList.remove("animate")
    },700)
}
var checkDead = setInterval (function(){
    var denisTop = parseInt(window.getComputedStyle(denis)
    .getPropertyValue("top"));
    var huyLeft = parseInt(window.getComputedStyle(huy)
    .getPropertyValue("left"));
    var tleft = parseInt(window.getComputedStyle(t)
    .getPropertyValue("left"));
    if (huyLeft<130 && huyLeft>0 && denisTop>=350 || tleft<130 && tleft>0 && denisTop>=350){
        alert("ТЫ ГЕЙ!!!");
    }
},10);
