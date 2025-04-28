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

    function verificar_paridade(numero){
    if(numero % 2 == 0){
        return "par";
    }else{
        return "ímpar";
    }
}
verificar_paridade(10);

function faixa_etaria(idade){
    if(idade >= 0 && idade <= 12){
        return "criança";
    }else if(idade >= 13 && idade <= 17){
        return "adolescente";
    }else if(idade >= 18 && idade <= 59){
        return "adulto";
    }else if(idade >= 60){
        return "idoso";
    }else{
        return "idade inválida";
    }
} 

let idade = 10;
faixa_etaria(idade);