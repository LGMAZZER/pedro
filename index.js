let numero =0;
document.getElementById("h1").textContent=numero;
document.getElementById("aument").onclick=function(){
    numero++;
    document.getElementById("h1").textContent=numero;
}
document.getElementById("dimin").onclick=function(){
    numero--;
    document.getElementById("h1").textContent=numero;
}
document.getElementById("reset").onclick=function(){
    numero=0;
    document.getElementById("h1").textContent=numero;
}