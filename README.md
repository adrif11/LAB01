# Sistema de Gerenciamento de Reservas de Hotel

Este projeto implementa um sistema básico para o gerenciamento de reservas de hotel, permitindo que reservas sejam registradas, canceladas e consultadas.

## Funcionalidades

- **Registrar Reserva**: Registra uma nova reserva no hotel.
- **Cancelar Reserva**: Cancela uma reserva específica com base no número do quarto.
- **Consultar Status do Quarto**: Verifica se um quarto está disponível ou reservado.

## Tecnologias Utilizadas

- **TypeScript**: Utilizado para a tipagem estática e melhor controle durante o desenvolvimento.
- **JavaScript/Node.js**: Ambiente base para execução do código.

## Estrutura do Projeto

```plaintext
.
├── reserva.ts          # Contém a classe Reserva, representando uma reserva de quarto no hotel
├── hotel.ts            # Define a classe Hotel, gerenciando as reservas
└── main.ts             # Arquivo principal que inicializa e testa as funcionalidades de reservas
