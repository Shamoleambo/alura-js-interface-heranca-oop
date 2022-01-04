import { Conta } from "./Conta.js";

export class ContaSalario extends Conta {
  constructor(cliente, agencia) {
    super(0, cliente, agencia);
  }

  sacar(valor) {
    const taxa = 1.01;
    const valorSacado = taxa * valor;
    if (this._saldo >= valorSacado) {
      this._saldo -= valorSacado;
      return valorSacado;
    }
  }
}
