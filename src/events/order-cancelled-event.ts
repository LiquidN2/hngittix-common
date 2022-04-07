import { Subjects } from './subjects';
import { OrderStatus } from './types';

export interface OrderCancelledEvent {
  subject: Subjects.OrderCancelled;
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
