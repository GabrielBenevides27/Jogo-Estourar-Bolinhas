function addBolinha(){
    let bolinha = document.createElement("div");
    bolinha.setAttribute("class","bolinha");
    

    var p1 = Math.floor(Math.random() * 500);
    var p2 = Math.floor(Math.random() * 400);

    bolinha.setAttribute("style","left:"+p1+"px;top:"+p2+"px");
    bolinha.setAttribute("onclick","estourarBolinha(this)");

    document.body.appendChild(bolinha);
}

function estourarBolinha(elemento){
    document.body.removeChild(elemento);

}

function iniciar(){
    setInterval(addBolinha,1000);
}