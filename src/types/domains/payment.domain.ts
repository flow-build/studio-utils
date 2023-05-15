export interface Prime {
  value: number;
}

export interface Payment {
  tag?: string;
  paymentMethodId: string;
  paymentTypeDescription: string;
  paymentTypeName: string;
  value: number;
  prime: {
    value: number;
  };
  isPromotionApplied: boolean;
}
