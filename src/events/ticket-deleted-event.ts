import { Subjects } from './subjects';

export interface TicketDeletedEvent {
  subject: Subjects.TicketDelete;
  data: {
    id: string;
    title: string;
    price: number;
    userId: string;
    version: number;
    orderId: string | null;
  };
}
