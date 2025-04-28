// --------if ternário--------
// let n1 = Number(prompt("Digite o primeiro número: "));
// let n2 = Number(prompt("Digite o segundo número: "));
// let n3 = Number(prompt("Digite o terceiro número: "));
// let media = (n1 + n2 + n3) / 3;

// let resultado = (media >= 7 )? "Aprovado" : "Reprovado";

// let idade = Number(prompt("Digite sua idade: "));
// let resultado = (idade <= 18 && idade >=13) ? "Você é um adolescente" : 
//                 (idade < 13) ? "Você é uma criança" : 
//                 (idade > 18 && idade < 60) ? "Você é um adulto" : "Você é um idoso";  
// document.write(resultado);

// -------switch case-------
// let fruta = prompt("Digite o nome de uma fruta: ");
// fruta = fruta.toLowerCase(); 
// fruta = fruta.replace('maca', 'maçã')
// switch (fruta) {
//     case "banana":
//         document.write("A banana custa R$3.00");
//         break;
//     case "maçã":
//         document.write("A maçã custa R$2.00");
//         break;
//     case "laranja":
//         document.write("A laranja custa R$2.50.");
//         break;
//     default:
//         document.write("Fruta não reconhecida.");
// }

// alert("Olá, seja bem-vindo ao nosso sistema!")
// let opcao = Number(prompt("Escolha uma das opções abaixo: \n1 - Cadastrar aluno \n2 - Calcular média \n3 - Mostrar situação."));
// let users = []
// switch(opcao){
//     case 1:
//         alert("Você escolheu cadastrar um aluno.")
//         let nome = prompt("Informe seu nome: ");
//         users = users.push(nome)
//         alert(`Seu usuário foi cadastrado!\nBem-vindo ${nome}.`)
//         break;
//     case 2:
//         alert("Você escolheu calcular a média.")
//         let n1 = Number("Digite sua primeira nota: ");
//         let n2 = Number("Digite sua segunda nota: ");
//         let n3 = Number("Digite sua terceira nota: ");
//         let n4 = Number("Digite sua quarta nota: ");
//         let media = (n1+n2+n3+n4)/4
//         alert(`Sua média é ${media}!`)
//         break;
//     case 3:
//         alert("Você escolheu mostrar a situação.")
//         let situação = (media >= 7) ? "Aprovado" : "Reprovado";
//         alert(`Sua situação é ${situação}!`) 
//         if(situação == "Aprovado"){
//             alert(`Parabéns!`)
//         }else{
//             alert(`Que pena!`)
//         }
//         break;
//     default:
//         alert("Por-favor, tente novamente!")
//         document.location.reload();
//         break;
// }

//--------while--------
// const senhaCadastrada = '123456';
// let senhaDigitada = prompt("Digite a senha: ");
// while (senhaCadastrada != senhaDigitada){
//     senhaDigitada = prompt("Senha incorreta! Tente novamente: ");
// }
// document.write("Senha correta! Acesso permitido.");

// let contador = 0;
// while (contador <= 10){
//     document.writeln(`Contador: ${contador} <br>`);
//     contador++;
// }

// const senhaCadastrada = '123456';
// let contador = 1;

// let senhaDigitada = prompt("Digite a senha: ");
// if (senhaDigitada == senhaCadastrada) {
//     alert("Senha correta! Acesso permitido.");
// }else{
//     while (senhaCadastrada != senhaDigitada && contador < 3) {
//         senhaDigitada = prompt("Senha incorreta! Tente novamente: ");
//         contador++;
//     }
//     if(contador >= 3){
//         document.write("Número máximo de tentativas atingido! Acesso negado.");
//     }
// }

// --------do while--------
// let numero = 0;
// do{
//     numero = Number(prompt("Digite um número maior que 10: "));
// }while(numero <= 10);

// --------for--------
// for(let i = 0; i <= 10; i++){
//     document.writeln(`Contador: ${i} <br>`);
// }

// let numero = Number(prompt("Digite um número: "));
// document.write(`Tabuada do ${numero}: <br>
//     -------------------<br>`)
// if(numero == Number){
//     for (let i = 1; i <= 10; i++){
//     document.write(`${numero} x ${i} = ${numero * i}<br>
//         -------------------<br>`);
//     }
// }else{
//     alert("Por-favor, digite um número válido!")
//     document.location.reload();
// }

let valorTotal = 0;
for(let contador = 1; contador <= 5; contador++){
    let valorProduto = Number(prompt("Digite o valor do produto:"));
    valorTotal += valorProduto;
    document.write(`O valor do produto ${contador} é: R$${valorProduto} <br>`);
    if(contador == 5){
        document.write(`O valor dos 5 produtos é: R$${valorTotal.toFixed(2)} <br>`);
    }
}