import { Tarefa } from './tarefa'

export class GestorTarefas {
    tarefas: Tarefa[] = []

    adicionarTarefa(tarefa: Tarefa): void {
        this.tarefas.push(tarefa)
    }

    atualizarStatus(id: number, status: string): void {
        const indice = this.tarefas.findIndex(tarefa => tarefa.id === id)
        if (indice < 0) {
            console.log('tarefa nao localizada ...')
        }
        else {
            this.tarefas[indice].status = status
        }
    }

    consultarTarefasPorProjeto(projeto: string): Tarefa[] {
        const tarefasProj: Tarefa[] = [];
        for (const tarefa of this.tarefas) {
            if (tarefa.projeto === projeto) {
                tarefasProj.push(tarefa);
            }
        }
        return tarefasProj;
    }
}