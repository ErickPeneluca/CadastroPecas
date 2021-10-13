let readlineSync = require('readline-sync');
let listaDePeca = ['motor', 'radiador', 'dissipador', 'escapamento'];


if (listaDePeca.length < 10)
{
    console.log("A peça pode ser cadastrada, por favor insira o nome :")

    let nomeDaPeca = readlineSync.question("")
    let pesoPeca = readlineSync.question("Insira o peso em gramas: ");


        if(nomeDaPeca.length > 3 && pesoPeca >= 100)
        {
            console.log("A peça foi cadastrada com sucesso!")
            listaDePeca.push(nomeDaPeca)
            console.log(listaDePeca)
        }
        else
        {
            console.log("O nome possui poucos caracteres ou o peso é inferior a 100 gramas")
        }
}
else
{
    console.log("Capacidade de cadastramento esgotada.")
}