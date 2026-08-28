let nasc=prompt("Digite seu ano de nascimento");
nasc=parseInt(nasc)

let viva=confirm("Se você está viva, clique em ok")

if(viva){
    alert(`Você tem ${2026-nasc}`)
}else{
    alert("Você morreu")
}