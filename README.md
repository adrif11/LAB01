# Biblioteca - Sistema de Gerenciamento de Livros

Este projeto simula um sistema de gerenciamento de uma biblioteca com funcionalidades básicas, como adição de livros, registro de empréstimos e consulta de disponibilidade.

## Estrutura de Classes

### Livro

A classe `Livro` representa um livro na biblioteca, com os seguintes atributos:

- `codigo` (number): Identificador único do livro.
- `titulo` (string): Título do livro.
- `autor` (string): Autor do livro.
- `disponivel` (boolean): Estado de disponibilidade do livro (true para disponível e false para emprestado).

### Biblioteca

A classe `Biblioteca` representa uma biblioteca, com as seguintes informações:

- `acervo`(Array): Array que armazena os Livros que foram adiconados na biblioteca.
- `adicionarLivro`(método): Esse método é usado para adicionar os novos livros na biblioteca (acervo).
- `registrarEmprestimo`(método): Esse método é usado para registrar o emprestimo de um livro.
- `consultarDisponibilidade`(método):Esse método é usado para consultar a disponibilidade de um livro.
