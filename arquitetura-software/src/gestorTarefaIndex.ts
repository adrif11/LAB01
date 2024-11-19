import { Tarefa } from "./model4/tarefa";
import { GestorTarefas } from './model4/gestorTarefas';

const gestorTarefas = new GestorTarefas();

gestorTarefas.adicionarTarefa(new Tarefa(1, "Levantar requisitos", "Concluída", "Requisitos do Software"));
gestorTarefas.adicionarTarefa(new Tarefa(2, "Criar UML", "Em andamento", "Desenho de Software"));
gestorTarefas.adicionarTarefa(new Tarefa(3, "Criar diagrama de fluxo", "Em andamento", "Desenho de Software"));
gestorTarefas.adicionarTarefa(new Tarefa(4, "Fazer README", "Pendente", "Descrição do Software"));

console.log("Todas as tarefas:", gestorTarefas.tarefas);

gestorTarefas.atualizarStatus(2, "Concluída");

console.log("\nApós atualização do status:");
console.log(gestorTarefas.tarefas);

console.log("\nTarefas do projeto 'Desenho de Software':");
console.log(gestorTarefas.consultarTarefasPorProjeto("Desenho de Software"));
