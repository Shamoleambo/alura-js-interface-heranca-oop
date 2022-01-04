export class Funcionario {
  constructor(nome, salario, cpf) {
    if (this.constructor == Funcionario) {
      throw new Error("Esta é uma classe abstrata. Não deve ser instanciada.");
    }

    this._nome = nome;
    this._salario = salario;
    this._cpf = cpf;
    this._bonificacao = 1;
    this._senha;
  }

  cadastrarSenha(senha) {
    this._senha = senha;
  }

  get senha() {
    return this._senha;
  }
}
