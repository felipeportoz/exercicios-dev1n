// --- Sistema de compras ---
// O objetivo deste código é simular um sistema de compras simples, onde o usuário pode aplicar um desconto em um produto e atualizar o estoque. Identifique os erros presentes no código e corrija-os para que o sistema funcione corretamente.

const produto = {
  nome: "Teclado Gamer",
  preco: 200,
  estoque: 10,
};

function precoFinal (preco){
  console.log("Preço com desconto: R$" + preco * 0.8);
}
 


produto.estoque = (produto.estoque - 1);

console.log("Produto: " + produto.nome);
console.log("Preço: R$" + produto.preco);
precoFinal(produto.preco);
console.log("Estoque atual: " + produto.estoque);
