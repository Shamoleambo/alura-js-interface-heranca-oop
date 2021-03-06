import { Cliente } from "../Cliente.js";

export class Conta {
  constructor(saldo, cliente, agencia) {
    if (this.constructor == Conta) {
      throw new Error("Você não pode instanciar uma classe do tipo Conta.");
    }
    this._saldo = saldo;
    this._cliente = cliente;
    this._agencia = agencia;
  }

  sacar() {
    throw new Error("Este metodo é abstrato, não deve ser chamado.");
  }

  _sacar(valor, taxa) {
    const valorSacado = taxa * valor;
    if (this._saldo >= valorSacado) {
      this._saldo -= valorSacado;
      return valorSacado;
    }

    return 0;
  }

  depositar(valor) {
    if (valor <= 0) return;
    this._saldo += valor;
  }

  trasnferir(conta, valor) {
    if (valor >= this._saldo) return;
    conta.depositar(valor);
  }

  get cliente() {
    return this._cliente;
  }

  set cliente(cliente) {
    if (cliente instanceof Cliente) {
      this._cliente = cliente;
    }
  }

  get saldo() {
    return this._saldo;
  }
}
