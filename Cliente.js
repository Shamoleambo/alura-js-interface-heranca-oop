export class Cliente {
  constructor(nome, cpf, senha) {
    this._nome = nome;
    this._cpf = cpf;
    this._senha = senha;
  }

  autenticar() {
    return false;
  }

  get cpf() {
    return this._cpf;
  }

  get senha() {
    return this._senha;
  }
}
