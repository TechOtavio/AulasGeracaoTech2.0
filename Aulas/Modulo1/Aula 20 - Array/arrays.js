// let nomes = ["Lucas", "João", "Maria", "Ana", "Pedro"];
// if (nomes.indexOf('Lucas') == -1){
//     console.log('Lucas não está na lista!');
// }

// let letras = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
// let letras2 = letras.slice(0, 3);
// for (i = 0; i < letras2.length; i++){
//     letras.push(letras2[i]);
//     console.log(letras);
// } 

let nomes = ['joão', 'ana', 'paulo', 'ana', 'maria', 'ana']
let nomeUser = prompt("Informe um nome: ")
if(nomes.includes(nomeUser)){
    nomes.splice(nomes.indexOf(nomeUser), 1, 'Visitante')
}
console.log(nomes);

let nome = prompt("Informe um nome: ").toLowerCase();
let cont = 0;
for (let i = 0; i < nomes.length; i++){
    if(nomes[i] == nome){
        cont++;
    }
}
console.log(`O nome ${nome} aparece ${cont} vezes na lista!`);