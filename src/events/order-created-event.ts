import { Subjects } from './subjects';
import { OrderStatus } from './types';

export interface OrderCreatedEvent {
  subject: Subjects.OrderCreated;
  data: {
    id: string;
    userId: string;
    expiresAt: string;
    status: OrderStatus;
    ticket: {
      id: string;
      price: number;
    };
  };
}
