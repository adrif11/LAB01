import { Empresa } from "./model/empresa"
import { Funcionario } from './model/funcionario'

const empresa = new Empresa()

empresa.adicionarEmpresa(new Funcionario(11, "Joao Vitor Oliveira", "Estagiario ", 1200))
empresa.adicionarEmpresa(new Funcionario(22, "Eduardo Santana", "Supervisor TI", 15000))
empresa.adicionarEmpresa(new Funcionario(33, "Bruno Martins", "Analista de Rede", 5000))

console.log(empresa.funcioinarios)

empresa.AtualizarSalario(33, 7000)

console.log()

console.log(empresa.funcioinarios)

console.log()

console.log(empresa.consultarFuncionario(33))