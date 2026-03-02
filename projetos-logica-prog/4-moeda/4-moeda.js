// --- Conversor de Moedas ---
//  O objetivo deste código é simular um conversor de moedas simples, onde o usuário pode converter um valor em dólares para reais usando uma taxa de câmbio fixa. Identifique os erros presentes no código e corrija-os para que o conversor funcione corretamente.

const taxaDolar = 5.50;

function converterParaReal(valor) {
  let resultado = valor * taxaDolar;
  return resultado;
}

const transacao = {
  usuario: "Carlos",
  valor: 100.00,
  concluida: true,
};


if (transacao.concluida == true) {
  console.log("Valor a ser convertido: U$" + transacao.valor)
  console.log("O valor convertido para " + transacao.usuario + " é: R$" + converterParaReal(transacao.valor));
}
else {
  console.log("A transação não foi realizada!");
}
