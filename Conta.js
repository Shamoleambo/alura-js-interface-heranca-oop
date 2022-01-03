import { Cliente } from "./Cliente.js";

export class Conta {
  constructor(saldo, cliente, agencia) {
    this._saldo = saldo;
    this._cliente = cliente;
    this._agencia = agencia;
  }

  sacar(valor) {
    taxa = 1.1 * valor;
    if (this._saldo >= valor) {
      this._saldo -= valor;
      return valor;
    }
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
