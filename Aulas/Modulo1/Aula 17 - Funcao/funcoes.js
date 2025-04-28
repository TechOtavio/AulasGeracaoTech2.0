function depositar_valor(deposito, saldo){
    if(deposito > 0 ){
        saldo += deposito;
        alert("Deposito realizado com sucesso! Saldo atual: R$" + saldo.toFixed(2));
    }else{
        alert("Valor inválido para depósito!");
    }
}

function sacar_valor(saque, saldo){
    if(saque > 0 && saque <= saldo){
        saldo -= saque;
        alert("Saque realizado com sucesso! Saldo atual: R$" + saldo.toFixed(2));
    }else{
        alert("Valor inválido para saque!");
    }
}

function mostrar_saldo(saldo){
    alert("Seu saldo atual é: R$" + saldo.toFixed(2));
}