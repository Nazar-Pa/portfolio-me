type PaymentMethod = 'credit_card' | 'paypal' | 'crypto';

interface PaymentProcessor {
  processPayment: () => void;
}

class CreditCardProcessor implements PaymentProcessor {
  public processPayment(amount: number) {
    console.log(`Process credit card`)
  }
}

class PaypalProcessor implements PaymentProcessor {
  public processPayment(amount: number) {
    console.log(`Process paypal`)
  }
}

class CryptoProcessor implements PaymentProcessor {
  public processPayment(amount: number) {
    console.log(`Process crypto`)
  }
}

const processRegistry: Record<PaymentMethod, PaymentProcessor> = {
  'credit_card': new CreditCardProcessor(),
  'paypal': new PaypalProcessor(),
  'crypto': new CryptoProcessor(),
}

function checkout(amount: number, method: PaymentMethod) {
  const processor = processRegistry[method];

  processor.processPayment(amount);
}
