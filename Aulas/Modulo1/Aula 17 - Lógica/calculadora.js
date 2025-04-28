let n1;
let n2;
let operação;
do{
    n1 = Number(prompt("Digite o primeiro número:"));
    n2 = Number(prompt("Digite o segundo número:"));
    operação = prompt("Escolha uma operação: \n (+) - Somar\n (-) - Subtrair\n (*) - Multiplicar\n (/) - Dividir\n (S) - Sair").toLowerCase();
    switch(operação){
        case "+":
            alert("Resultado: " + (n1 + n2));
            break;
        case "-":
            alert("Resultado: " + (n1 - n2));
            break;
        case "*":
            alert("Resultado: " + (n1 * n2));
            break;
        case "/":
            if(n2 != 0){
                alert("Resultado: " + (n1 / n2));
            }else{
                alert("Divisão por zero não é permitida!");
            }
            break;
        case "s":
            alert("Saindo...");
            break;
        default:
            alert("Operação inválida!");
    }
}while(operação != "s")