import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";
import { ContaPoupanca } from "./ContaPoupanca.js";

const cliente = new Cliente("mano", 111111111);
const contaCorrente = new ContaCorrente(cliente, 1001);
const contaPoupanca = new ContaPoupanca(0, cliente, 1001);

contaCorrente.depositar(100);

console.log(contaCorrente, contaPoupanca);
