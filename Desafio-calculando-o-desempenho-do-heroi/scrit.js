var nome = ""
var vitorias = 0
var derrotas = 0
var saldoVitorias = 0

nome = prompt("Digite o seu nome")
vitorias = prompt("Digite o seu número de vitorias")
derrotas = prompt("Digite o seu número de derrotas")

saldoVitorias = vitorias - derrotas

function calculo(saldoVitorias) {
    if (saldoVitorias === 10) {
      return "Ferro";
    } else if (saldoVitorias >= 11 && saldoVitorias <= 20) {
      return "Bronze";
    } else if (saldoVitorias >= 21 && saldoVitorias <= 50) {
      return "Prata";
    } else if (saldoVitorias >= 51 && saldoVitorias <= 80) {
      return "Ouro";
    } else if (saldoVitorias >= 81 && saldoVitorias <= 90) {
      return "Diamante";
    } else if (saldoVitorias >= 91 && saldoVitorias <= 100) {
      return "Lendário";
    } else if (saldoVitorias >= 101) {
      return "Imortal";
    } else {
      return "Desconhecido";
    }
  }

  var nivel = calculo(saldoVitorias)

console.log(`O Herói ${nome} tem de saldo de ${saldoVitorias} está no nível de ${nivel}`)