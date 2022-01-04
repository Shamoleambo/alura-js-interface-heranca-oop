import { Conta } from "./Conta.js";

export class ContaPoupanca extends Conta {
  constructor(saldo, cliente, agencia) {
    super(saldo, cliente, agencia);
  }
  sacar(valor) {
    taxa = 1.25 * valor;
    if (this._saldo >= valor) {
      this._saldo -= valor;
      return valor;
    }
  }
}
