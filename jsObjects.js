

let bank = {
    c_name: "Tanvesh",
    account_open: "24-12-2021",
    balance: 500,
    pin: 2586,
    withdraw: function (x) {
        if (x <= this.balance) {
            return this.balance -= x;
        }
        else {
            alert("not sufficient balance to withdraw:(");
        }
    },
    deposit: function (x) {
        return this.balance += x;
    }
}


const pinNo = document.getElementById("pin");
const amount = document.getElementById("amt");
const prc = document.getElementById("prc");
const wdr = document.getElementById("withdraw");
const dep = document.getElementById("dep");
const bal = document.getElementById("bal");
const display = document.getElementById("display");



prc.addEventListener("click", () => {

    const cno = Number(pinNo.value);

    if (cno === bank.pin) {
        // alert("-->");
        prc.style.display = 'none';
        pinNo.style.display = 'none';
        amount.style.display = 'block';
        wdr.style.display = 'block';
        dep.style.display = 'block';
        bal.style.display = 'block';
    }
    else {
        alert("Wrong pin no you enter!!")
    }
})

wdr.addEventListener("click", () => {
    const wamt = Number(amount.value);

    let save = bank.balance;
    bank.withdraw(wamt);

    if (bank.balance != save) {
        display.innerHTML = `${wamt}  successfully Withdraw <br>
                            TRANSACTION COMPLETE`;
    }

});

dep.addEventListener("click", () => {
    const wamt = Number(amount.value);

    bank.deposit(wamt);

    display.innerHTML = `${wamt} was successfully deposite <br>
                        TRANSACTION COMPLETE`;

});

bal.addEventListener("click", () => {

    display.innerHTML = `bank balance: ${bank.balance} 
                       <br> TRANSACTION COMPLETE`;

});


