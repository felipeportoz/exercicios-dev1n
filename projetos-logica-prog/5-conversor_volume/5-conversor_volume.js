// --- Conversor de Medidas de Fábrica ---

const litroPorMl = 0.001;

function converterMlParaLitro(quantidadeMl) {
  const resultado = quantidadeMl * litroPorMl;
  return resultado;
}

function converterLitroParaMl(quantidadeLitros) {
  const resultado = quantidadeLitros * 1000;
  return resultado;
}

const producaoDia = {
  lote1: 6000, // ml
  lote2: 5, // litros
};

const calculoLote1 = converterMlParaLitro(producaoDia.lote1);
const calculoLote2 = converterLitroParaMl(producaoDia.lote2);

console.log("--- Relatório de Produção ---");
console.log("Lote 1 (5000ml em Litros): " + calculoLote1 + "L");
console.log("Lote 2 (2L em Mililitros): " + calculoLote2 + "ml");



if (producaoDia.lote1 <= 1000 || producaoDia.lote2 <= 1){
  console.log("Atenção: Estoque baixo!")
} else {
  console.log("Estoque abastecido!")
}
