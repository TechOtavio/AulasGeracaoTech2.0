let saldo = 0;
let opcao;
do{
    opcao = Number(prompt("Escolha uma opção:\n1 - Depositar\n2 - Sacar\n3 - Ver saldo\n4 - Sair"));
    switch(opcao){
        case 1:
            let Desposito = Number(prompt("Qual valor deseja depositar?"));
            if(Desposito > 0){
                saldo += Desposito;
                alert("Depósito realizado com sucesso!");
            }else{
                alert("Valor inválido para depósito!");
            }
            break;
        case 2:
            let saque = Number(prompt("Qual valor deseja sacar?"));
            if(saque > 0 && saque <= saldo){
                saldo -= saque;
                alert("Saque realizado com sucesso!");
            }else if(saque > saldo){
                alert("Saldo insuficiente para saque!");
            }
            else{
                alert("Valor inválido para saque!");
            }
            break;
        case 3:
            alert("Seu saldo é: R$" + saldo.toFixed(2));
            break;    
    }
} while(opcao != 4);