// deposit btn event handlr
document.getElementById('deposit-btn').addEventListener('click', function () {

    const depositInput = document.getElementById('Deposit-amount');
    const depositAmount = depositInput.value;
    const depositBord = document.getElementById('deposit-bord');

    // validation
    if (depositInput.value > 0) {
        // previos value store ina variable
        const currentdiposit = depositBord.innerText;
        // re assign deposiit inner text
        depositBord.innerText = parseInt(depositAmount) + parseInt(currentdiposit);

        // balance bord
        const balanceBord = document.getElementById('balance-bord');
        // deposit input value + balance bord
        balanceBord.innerText = parseFloat(balanceBord.innerText) + parseFloat(depositAmount);

        // after clera deposit input
        depositInput.value = '';
    } else {
        // after clera deposit input
        depositInput.value = '';
        return;
    }
})

// withdraw btn event hndlr
document.getElementById('withdraw-btn').addEventListener('click', function () {

    const balanceBord = document.getElementById('balance-bord');
    const withdrawInput = document.getElementById('withdraw-amount');
    const withdrawMony = withdrawInput.value;

    // valdation
    if (withdrawInput.value <= 0 || withdrawInput.value > balanceBord.innerText) {
        // after clera deposit input
        withdrawInput.value = '';
        return;
    }
    // balance bord - input witdraw amount
    const MinusMony = parseFloat(balanceBord.innerText) - parseFloat(withdrawMony);
    // re assign balance bord
    balanceBord.innerText = MinusMony;
    
    // storing witdrawal amont data
    const withdrawBord = document.getElementById('withdraw-bord');
    const oldWithdrawBord = withdrawBord.innerText;
    withdrawBord.innerText = withdrawInput.value;

    // re assign withdraw Bord
    withdrawBord.innerText = parseFloat(oldWithdrawBord) + parseFloat(withdrawBord.innerText)

    // after clera deposit input
    withdrawInput.value = '';
})