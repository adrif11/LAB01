import { Livro } from "./model/livro"
import { Biblioteca } from './model/biblioteca'

const biblioteca = new Biblioteca()

biblioteca.adicionarLivro(new Livro(1, "Memórias Póstumas de Brás Cubas", "Machado de Assis ", true))
biblioteca.adicionarLivro(new Livro(2, "Clarice Lispector", "A Hora da Estrela", true))
biblioteca.adicionarLivro(new Livro(3, "Raul Seixas", "O baú do Raul", true))

console.log(biblioteca.acervo)

biblioteca.registrarEmprestimo(2)

console.log()

console.log(biblioteca.acervo)

console.log()

if (biblioteca.consultarDisponibilidade(3))
    console.log("Livro disponivel")
else
    console.log("Livro Indisponivel")