let nasc= prompt("Digite seu ano de nascimento:");
nasc = parseInt(nasc);

let fds = confirm("Se hoje for final de semana, clique ok");
let idade= 2026 - nasc;

alert(`Você é maior de idade: ${idade >= 18}`);
alert(`Hoje é finalde semana: ${fds}`);

if(idade >= 18 && fds){
    alert("Você pode beber")
}else{
    alert("Você não pode beber");
}