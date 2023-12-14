let select1 = document.getElementById("sel1")
let select2 = document.getElementById("sel2")
let select3 = document.getElementById("sel3")
let result = document.querySelector("#text")

function aaa() {

    let valor1 = select1.value
    let valor2 = select2.value
    let valor3 = select3.value

    let combinedResult = valor1 + valor2 + valor3;
    result.textContent = combinedResult

    if (valor1 === "9" && valor2 === "1" && valor3 === "1" || valor1 === "7" && valor2 === "1" && valor3 === "4"){
        result.textContent = "Password correcta"
    }


    else{
        result.textContent = "Password incorrecta"
    }


    
}

