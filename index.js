import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";
import { ContaPoupanca } from "./ContaPoupanca.js";
import { ContaSalario } from "./ContaSalario.js";

const cliente = new Cliente("mano", 111111111);
const contaCorrente = new ContaCorrente(cliente, 1001);
const contaPoupanca = new ContaPoupanca(0, cliente, 1001);
const contaSalario = new ContaSalario(cliente, 1001);

contaCorrente.depositar(100);
contaCorrente.sacar(50);
