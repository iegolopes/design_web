var nasc = 2009;
let nome = "Iego";
const viva = true;

function calc_Idade(ano=2026){
    let idade = ano - nasc;
    let menor;
    if (idade < 18){
        menor = true
        var podebeber=false
    }else{
        menor = false
        var podebeber=true
    }
    alert(`${nome} é menor de idade? ${menor} \nidade: ${idade} \npode beber:${podebeber}`)
    return idade;
}
calc_Idade();
/*var 'vaza' a variavel dentro do escolpo da mesma função
alert(`pode beber:${podebeber}`);
*/