import { Reserva } from '../model/reserva'

export class Hotel {
    reservas: Reserva[] = []

    registrarReserva(reserva: Reserva): void {
        this.reservas.push(reserva)
    }

    cancelarReserva(numeroQuarto: number): void {
        const indice = this.reservas.findIndex(reserva => reserva.numeroQuarto === numeroQuarto)
        if (indice < 0) {
            console.log('Quarto nao localizado ...')
        }
        else {
            this.reservas.splice(indice, 1)
        }
    }

    consultarStatusQuarto(numeroQuarto: number): string {
        const indice = this.reservas.findIndex(reserva => reserva.numeroQuarto === numeroQuarto)
        if (indice < 0) {
            return "Disponível"
        }
        else {
            return "Reservado"
        }
    }
}