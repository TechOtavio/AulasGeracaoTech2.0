//Map -> cria um novo array com o resultado de aplicar uma função a cada elemento do array
// 
// // const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let dobro = numeros.map((x) => {
//     x *= 2;
//     return x;
// })
// console.log(dobro);

// const nomes  = ['Lucas', 'João', 'Maria', 'Ana', 'Pedro'];
// let nome = nomes.map((x) => {
//     x += ' Nicolas Neto'
//     x = x.toUpperCase();
//     return x;
// })
// console.log(nome);


//Filter -> cria um novo array com todos os elementos que passaram em um teste da função

// const nomes = ['Ana', 'Amanda', 'Arthur', 'Alice', 'Alex', 'Aline', 'André', 'Antônio', 'Alana', 'Augusto'];
// let nome = nomes.filter((x) => {
//     if(x[0] == 'A'){
//         return x;

//     }
// })


// forEach -> executa uma função para cada elemento do array, mas não retorna nada

// let nomes = ['Lucas', 'João', 'Maria', 'Ana', 'Pedro'];
// nomes.forEach((valor, indice) => {
//     console.log(`O nome ${valor} está na posição ${indice}`);
// })

// let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let soma = 0;
// numeros.forEach((valor) => {
//     soma += valor;
// })
// console.log(soma);


// Reduce -> reduz o array a um único valor, aplicando uma função a cada elemento do array

// let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let soma = numeros.reduce((valorAcumulador, valorAtual) => {
//     return valorAcumulador + valorAtual;
// }, 0)


// Obejto -> estrututra de dados que armazena dados em pares de chave e valor.
// atribuindo = característica e valor
// métodos -> função dentro de um objeto
// let pessoa = {
//     nome: prompt("Informe seu nome: "),
//     idade: 20,
//     cpf: 12345678900,
//     cidade: 'Fortaleza - CE',
//     dizerOlá: () => {
//         console.log('Olá, meu nome é ' + pessoa.nome + ' e tenho ' + pessoa.idade + ' anos.');
//     }
// }
// console.log(pessoa.dizerOlá());


// let produto = {
//     nome: prompt('Informe o nome do produto: '),
//     descrição: prompt('Informe a descrição do produto: '),
//     preco: prompt('Informe o preço do produto: '),
// }
// console.log(`Nome produto: ${produto.nome}\nDescriçãao: ${produto.descrição}\nPreço: R$${produto.preco}`);

// let livro ={
//     titulo: 'Senhor dos Anéis',
//     autor: 'J.R.R. Tolkien',
//     ano: 1954,
//     numeroPaginas: 1216,
// }
// console.log(`Título: ${livro.titulo}\nAutor: ${livro.autor}\nAno: ${livro.ano}\nNúmero de páginas: ${livro.numeroPaginas}`);
// livro.editora = 'HarperCollins';
// livro.numeroPaginas = 1215;
// delete livro.ano;
// console.log(`Título: ${livro.titulo}\nAutor: ${livro.autor}\nNúmero de páginas: ${livro.numeroPaginas}\nEditora: ${livro.editora}`)

const titulares = ['otavio', 'gabriel', 'dionizio'];
const saldos = [1000, 2000, 3000];

let contaBancaria = {
    titular: () =>{
        let nome = prompt("Informe seu nome: ").toLowerCase();
        if(titulares.includes(nome)){
            console.log(`Titular encontrado!`);
            console.log(`Olá ${nome}, seja bem-vindo!`);
            return titulares.indexOf(nome);
        }else{
            console.log('Titular não encontrado!');
        }
    },
    saldo: () => {
        let resultado = saldos[titular]
        console.log(`Seu saldo atual é de R$${resultado}`);
        return resultado;
    },
    sacar: () => {
        let saque = Number(prompt("Informe seu saque: "));
        if(saque > 0 && saque <= saldo){
            saldo -= saque
            console.log(`Saque de R$${saque} realizado com sucesso! Saldo atual: R$${saldo}`);
            return saldo;
        }else{
            console.log('Saque inválido!');
            document.onload();
        }
    },
    depositar: () => {
        let deposito = Number(prompt("Informe seu depósito: "));
        if(deposito > 0){
            saldo += deposito
            console.log(`Depósito de R$${deposito} realizado com sucesso! Saldo atual: R$${saldo}`);
            return saldo;
        }else{
            console.log('Depósito inválido!');
            document.onload();
        }
    },
    verSaldo: () => {
        console.log(`Seu saldo atual é de R$${saldo}`);
        return saldo;
    }
}


contaBancaria.titular();