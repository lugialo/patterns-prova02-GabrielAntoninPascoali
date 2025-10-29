// Adapter
class LegacyPaymentSystem {
    makePayment(amount) {
      console.log(`Pagando R$${amount} com sistema legado.`);
    }
  }
  
  class ModernPaymentAPI {
    process(amountInCents) {
      console.log(`Pagamento de R$${amountInCents / 100} via API moderna.`);
    }
  }
  
  // Adapter: Adapta ModernPaymentAPI para a interface esperada pelo PaymentProcessor
  class ModernPaymentAdapter {
    constructor(modernAPI) {
      this.modernAPI = modernAPI;
    }
  
    makePayment(amount) {
      // Converte de reais para centavos
      const amountInCents = amount * 100;
      this.modernAPI.process(amountInCents);
    }
  }
  
  class PaymentProcessor {
    constructor(system) {
      this.system = system;
    }
  
    pay(amount) {
      this.system.makePayment(amount);
    }
  }
  
  // Cliente usando sistema legado
  const legacy = new LegacyPaymentSystem();
  const processor = new PaymentProcessor(legacy);
  processor.pay(100);
  
  // Cliente usando API moderna através do Adapter
  const modernAPI = new ModernPaymentAPI();
  const modernAdapter = new ModernPaymentAdapter(modernAPI);
  const modernProcessor = new PaymentProcessor(modernAdapter);
  modernProcessor.pay(100);