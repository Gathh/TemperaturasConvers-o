function converte(){
    var temperaturaInicial = Number(document.getElementById("campo").value)
    var resultado = 0
    if(document.getElementById("CF").checked){
        resultado = (temperaturaInicial * 9/5) +32
    }
    else if(document.getElementById("FC").checked){
        resultado = (temperaturaInicial -32) * 5/9
    }
    else if(document.getElementById("CK").checked){
        resultado = (temperaturaInicial + 273,15) 
    }
    else if(document.getElementById("KC").checked){
        resultado = (temperaturaInicial - 273,15)
    }
    else if(document.getElementById("KF").checked){
        resultado = (temperaturaInicial -273.15) *9/5 + 32 
    }
    else if(document.getElementById("FK").checked){
        resultado = (temperaturaInicial -32) * 5/9 +273.15
    }
    else{
        resultado = "Você precisa selecionar uma opção!"    
        alert(resultado)
    }

    document.getElementById("R").innerHTML = resultado
}