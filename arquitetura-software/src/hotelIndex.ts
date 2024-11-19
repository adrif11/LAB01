import { Reserva } from "./model3/reserva"
import { Hotel } from './model3/hotel'

const hotel = new Hotel()
const dataReserva1 = new Date(2024, 10, 15); 
const dataSaida1 = new Date(2024, 10, 16);

hotel.registrarReserva(new Reserva(11, "Joao Vitor Oliveira", new Date(2024,11,10), new Date(2024,11,20)))
hotel.registrarReserva(new Reserva(22, "Eduardo Santana",new Date(2024,10,30),new Date(2024,11,15)))
hotel.registrarReserva(new Reserva(33, "Bruno Martins",new Date(2024,11,16),new Date(2024,11,20)))

console.log(hotel.reservas)

hotel.cancelarReserva(33)

console.log()

console.log(hotel.reservas)

console.log()

console.log(hotel.consultarStatusQuarto(33))