/*
var => function scope (funciona dentro e fora de blocos) - alguns erros não são declarados
let => block scope (funciona apenas fora de blocos) - possui mensagens de erro mais amigáveis [recomendável]
const => constant (não se pode mudar o valor definido - usado parra URL)
*/

function funcaoQualquer() {
    var name = "Joanna Clementino";

    name = "Dafne Beatrice"
    console.log(name);
    
}
funcaoQualquer();

/*function funcaoQualquer2() {
    let a = 1997;

    {
        let b = 199;
    }

    console.log(a);
    console.log(b);
}
funcaoQualquer2();*/

/*function funcaoQualquer3() {
    const name = "Vermelho";

    console.log(name);
    name = "Amarelo"
    console.log(name);
    
}
funcaoQualquer3();*/

function funcaoQualquer4() {
    console.log(name);
//    console.log(name2);
//   console.log(name3);
    
//    let name = "Notebook";
//    var name = "Carro";
    const name = "Bob"
    
}
funcaoQualquer4();