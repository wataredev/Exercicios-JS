class ContaBancaria {
    #saldo;
  
    constructor(saldoInicial) {
      this.#saldo = saldoInicial;
    }
  
    depositar(valor) {
      this.#saldo += valor;
    }
  
    getSaldo() {
      return this.#saldo;
    }
  
    set saldo(novoSaldo) {
      if (novoSaldo < 0) {
        console.log("O saldo não pode ser negativo.");
      } else {
        this.#saldo = novoSaldo;
      }
    }
  }
  
  const minhaConta = new ContaBancaria(1000);
  minhaConta.depositar(500);
  
  // Forma errada!
  console.log(minhaConta.getSaldo()); // 1500
  
  minhaConta.saldo = 2000; // Atualiza o saldo para 2000
  console.log(minhaConta.getSaldo()); // 2000
  
  minhaConta.saldo = -500; // Não permite saldo negativo
  console.log(minhaConta.getSaldo()); // 2000 (saldo não alterado)
  