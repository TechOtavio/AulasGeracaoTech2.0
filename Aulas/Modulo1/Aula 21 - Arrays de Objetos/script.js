// let alunos = {}
// alunos.nome = prompt("Informe seu nome:").toLowerCase().trim();

// let notas = []
// for(let i = 0; i < 4; i++){
//     let nota = Number(prompt(`Informe a nota ${i+1}: `))
//     notas.push(nota)
// }
// alunos.notas = notas

// alunos.calcularNotas = () => {
//     let media = alunos.notas.reduce((acumulador, valorAtual) => {
//         acumulador += (valorAtual/4)
//         return acumulador
//     },0)
//     console.log(media)
// }
// alunos.calcularNotas()

// let alunos = [];
// let aluno;
// for(let i = 0; i < 3; i++){
//     aluno = {
//         nome: prompt('Informe o nome: '),
//         idade: Number(prompt('Informe a idade: '))
//     }
//     alunos.push(aluno);
// }
// console.log(alunos)

// let agenda = []
// let contato = {}
// for(let i = 0; i < 3; i++){
//     contato = {
//         nome: prompt('nome:'),
//         telefone: prompt('Telefone:')
//     }
//     if(contato.telefone.length >= 8 && contato.telefone.length <= 11){
//         agenda.push(contato)
//         console.log(`Contato ${i+1} adicionado com sucesso!\nNome: ${contato.nome}, Telefone: ${contato.telefone}`)
//     }else{
//         console.log('Número inválido!')
//         i--
//     }
// }
// console.log(agenda)

