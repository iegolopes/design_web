let n1 = Number(promt("Digite um número:"))
let n2 = Number(promt("Digite outro número:"))
let op;
do{
    let msg = "Escolha uma opação\n"
    mgs = msg + "1: somar\n"
    mgs = msg + "2: subtrair\n"
    mgs = msg + "3: multiplicar\n"
    mgs = msg + "4: dividir\n"
    mgs = msg + "5: sair\n"
    op=prompt(msg)
    switch(op){
        case "1": alert(`${n1} + ${n1} = ${n1 + n2}`); break;
        case "2": alert(`${n1} - ${n1} = ${n1 - n2}`); break;
        case "3": alert(`${n1} * ${n1} = ${n1 * n2}`); break;
        case "4": alert(`${n1} / ${n1} = ${n1 / n2}`); break;
        case "5": alert("Até logo"); break;
        default:alert("Opção inválida")
    }
}while(op != "5")