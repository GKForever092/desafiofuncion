let select = document.querySelector("#sselect")
let sticmax = document.querySelector("#maxs")

function total(){
    let input1 = parseFloat(document.getElementById("s1").value)
    let input2 = parseFloat(document.getElementById("s2").value)
    let input3 = parseFloat(document.getElementById("s3").value)
    
    selectTotal = parseInt(sticmax.innerText)
    sticmax.innerText = (input1 + input2 + input3)

    if (sticmax.innerText <= 10){
        sticmax.textContent = "Llevas " + sticmax.innerText + " stickers"
    }

    else{
        sticmax.textContent = "Llevas demasiados stickers"
    }
}
