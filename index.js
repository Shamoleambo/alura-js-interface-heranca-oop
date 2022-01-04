import { Gerente } from "./Funcionarios/Gerente.js";
import { Diretor } from "./Funcionarios/Diretor.js";
import { SistemaDeAutenticacao } from "./SistemaDeAutenticacao.js";

const diretor = new Diretor("Mano", 10000, 111111111);
const gerente = new Gerente("Truta", 5000, 222222222);

diretor.cadastrarSenha("12345");
gerente.cadastrarSenha("12345");

const diretorLogado = SistemaDeAutenticacao.login(diretor, "12345");
const gerenteLogado = SistemaDeAutenticacao.login(gerente, "12345");

console.log(`Diretor está logado: ${diretorLogado}`);
console.log(`Gerente está logado: ${gerenteLogado}`);
