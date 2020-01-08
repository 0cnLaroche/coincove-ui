

export class Payment {
  address: string;
  confirmationsRequired: number;
  confirmationsReceived: number;
  currency: string;
  id: string;
  orderId: string;
  processedTime: Date;
  satoshis: number;
  status: string;
  statusTime: Date;
  submittedTime: Date;
  transactionId: string;
  value: number;

  constructor() {
    this.confirmationsReceived = 0;
  }

}

enum PaymentStatus { CANCELLED, ERROR, PENDING, PROCESSING, RECEIVED, REFUSED, VERIFIED, WRONG_AMOUNT }
