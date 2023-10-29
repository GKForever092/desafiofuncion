var select1 = document.getElementById("sel1")
var select2 = document.getElementById("sel2")
var select3 = document.getElementById("sel3")
var result = document.querySelector("#text")

function aaa() {

    var valor1 = select1.value
    var valor2 = select2.value
    var valor3 = select3.value

    var combinedResult = valor1 + valor2 + valor3;
    result.textContent = combinedResult

    if (valor1 === "9" && valor2 === "1" && valor3 === "1" || valor1 === "7" && valor2 === "1" && valor3 === "4"){
        result.textContent = "Password correcta"
    }


    else{
        result.textContent = "Password incorrecta"
    }


    
}

