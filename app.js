// console.log("O arquivo foi carregado!!")

let lampadaAcesa = false
let nome = prompt("Qual é o seu nome?")

// true, false
lampadaAcesa = confirm("A lâmpada está acesa?")
// let idade = Number(prompt("Qual é a sua idade?"))


if (lampadaAcesa) {
    alert(nome + ", por favor, apague a lâmpada")
} else {
    alert(nome + ", por favor, não acenda a lâmpada")
}