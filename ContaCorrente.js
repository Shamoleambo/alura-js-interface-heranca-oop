import { Cliente } from "./Cliente.js";

export class ContaCorrente {
  static numeroDeContas = 0;
  agencia;
  _cliente;
  _saldo = 0;

  constructor(agencia, cliente) {
    this.agencia = agencia;
    this._cliente = cliente;

    ContaCorrente.numeroDeContas++;
  }

  sacar(valor) {
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
