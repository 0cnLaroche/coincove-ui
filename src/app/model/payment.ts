

export class Payment {
  address: string;
  confirmationsRequired: number;
  currency: string;
  id: string;
  orderId: string;
  processedTime: Date;
  satoshis: number;
  status: PaymentStatus;
  statusTime: Date;
  submittedTime: Date;
  transactionId: string;
  value: number;

}

enum PaymentStatus { CANCELLED, ERROR, PENDING, PROCESSING, RECEIVED, REFUSED, VERIFIED, WRONG_AMOUNT }
