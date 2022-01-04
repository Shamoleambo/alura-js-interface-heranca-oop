export class SistemaDeAutenticacao {
  static login(autenticavel, senha) {
    if (SistemaDeAutenticacao.temAutenticar(autenticavel)) {
      return autenticavel.autenticar(senha);
    }
    return false;
  }

  static temAutenticar(autenticavel) {
    return (
      "autenticar" in autenticavel &&
      autenticavel.autenticar instanceof Function
    );
  }
}
