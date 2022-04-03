import { Subjects } from './subjects';

export interface TicketUpdatedEvent {
  event: Subjects.TicketUpdated;
  data: {
    id: string;
    title: string;
    price: number;
    userId: string;
  };
}
