# Empresa e Funcionários - Sistema de Gerenciamento

Este projeto implementa um sistema simples de gerenciamento de funcionários dentro de uma empresa. Ele permite adicionar funcionários, atualizar o salário de um funcionário específico e consultar informações de um funcionário usando sua matrícula.

## Funcionalidades

- **Adicionar Funcionário**: Adiciona um novo funcionário ao sistema.
- **Atualizar Salário**: Atualiza o salário de um funcionário existente com base em sua matrícula.
- **Consultar Funcionário**: Consulta as informações de um funcionário específico pelo número de matrícula.

## Tecnologias Utilizadas

- **TypeScript**: Para tipagem estática e melhorias no desenvolvimento.
- **JavaScript/Node.js**: Base da aplicação, com TypeScript compilando para JavaScript.

## Estrutura do Projeto

```plaintext
.
├── empresa.ts          # Contém a classe Empresa para gerenciar os funcionários
├── funcionario.ts      # Define a classe Funcionario com informações sobre o funcionário
└── main.ts             # Arquivo principal que inicializa e testa as funcionalidades
