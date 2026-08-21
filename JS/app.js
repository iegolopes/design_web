var nasc = 2009;
let nome = "Iego";
const viva = true;

function calc_Idade(ano=2026){
    let idade = ano - nasc;
    alert(`Dentro de função - Idade ${idade}`)
    return idade;
}
calc_Idade();
alert(`Fora da função: Idade ${calc_Idade(idade)}`);
alert(`Fora da função: chamando calc_Idade ${calc_Idade()}`);