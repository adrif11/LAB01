import { Livro } from './livro'

export class Biblioteca {
    acervo: Livro[] = []

    adicionarLivro(livro: Livro): void {
        this.acervo.push(livro)
    }

    registrarEmprestimo(codigo: number): void {
        const indice = this.acervo.findIndex(livro => livro.codigo === codigo)
        if (indice < 0) {
            console.log('Livro nao localizado ...')
        }
        else {
            this.acervo[indice].disponivel = false
        }
    }

    consultarDisponibilidade(codigo: number): boolean {
        const indice = this.acervo.findIndex(livro => livro.codigo === codigo)
        if (this.acervo[indice].disponivel) {
            return true
        }
        else {
            return false
        }
    }
}