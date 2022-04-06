export enum OrderStatus {
  // When the order has been created but ticket has not been reserved
  Created = 'created',

  // The reserved ticket is successfully paid
  Complete = 'complete',

  // When ticket fails to be reserved
  // or when the user cancels the ticket
  // or the order expires
  Canceled = 'canceled',

  // Ticket is successfully reserved
  AwaitingPayment = 'awaiting:payment',
}
