let contaBancaria = {
    saldo: 0
};

function deposito(quantia) {
    contaBancaria.saldo += quantia;
    console.log(`Depósito de R$${quantia} realizado. Saldo atual: R$${contaBancaria.saldo}`);
}

function saque(quantia) {
    if (quantia <= contaBancaria.saldo) {
        contaBancaria.saldo -= quantia;
        console.log(`Saque de R$${quantia} realizado. Saldo atual: R$${contaBancaria.saldo}`);
    } else {
        console.log("Saldo insuficiente para realizar o saque.");
    }
}

// Testando as operações
deposito(5000);
saque(300);
saque(700);
deposito(200);

console.log("saldo");
