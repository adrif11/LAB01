import { Funcionario } from './funcionario'

export class Empresa {
    funcioinarios: Funcionario[] = []

    adicionarEmpresa(funcionario: Funcionario): void {
        this.funcioinarios.push(funcionario)
    }

    AtualizarSalario(matricula: number, salario:number): void {
        const indice = this.funcioinarios.findIndex(funcionario => funcionario.matricula === matricula)
        if (indice < 0) {
            console.log('Funcionario nao localizado ...')
        }
        else {
            this.funcioinarios[indice].salario = salario
        }
    }

    consultarFuncionario(matricula: number): Funcionario | undefined {
        const indice = this.funcioinarios.findIndex(funcionario => funcionario.matricula === matricula)
        if (indice < 0) {
            return undefined
        }
        else 
        {
            return this.funcioinarios[indice]
        }
    }
}