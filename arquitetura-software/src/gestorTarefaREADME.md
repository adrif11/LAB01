# Sistema de Gerenciamento de Tarefas

Este projeto implementa um sistema básico para o gerenciamento de tarefas, permitindo que tarefas sejam registradas, atualizadas e consultadas por projeto.

## Funcionalidades

- **Adicionar Tarefa**: Registra uma nova tarefa no sistema.
- **Atualizar Status da Tarefa**: Atualiza o status de uma tarefa específica com base no ID.
- **Consultar Tarefas por Projeto**: Lista todas as tarefas associadas a um projeto específico.

## Tecnologias Utilizadas

- **TypeScript**: Utilizado para a tipagem estática e melhor controle durante o desenvolvimento.
- **JavaScript/Node.js**: Ambiente base para execução do código.

## Estrutura do Projeto

```plaintext
.
├── tarefa.ts          # Contém a classe Tarefa, representando uma tarefa no sistema
├── gestorTarefas.ts   # Define a classe GestorTarefas, gerenciando as tarefas
└── index.ts           # Arquivo principal que inicializa e testa as funcionalidades de gestão de tarefas
