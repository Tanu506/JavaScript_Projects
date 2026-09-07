const balance = document.querySelector('#balance');
const income = document.querySelector('#income');
const expense = document.querySelector('#expense');

const transactionForm = document.getElementById('transactionForm')

const transactionInput = document.getElementById('title');
const amountInput = document.getElementById('amount');
const transactionType = document.getElementById('type');

const addTransactionButton = document.querySelector('.add-btn')

const transactionList = document.getElementById('transactionList')

let transactions = [];
let totalIncome = 0;
let totalExpense = 0;

function displayTransaction(){
    transactionList.innerHTML = "";
    transactions.forEach(transaction => {
        transactionList.innerHTML += `
        <p>${transaction.title} - ₹${transaction.amount}</p>
        `;
        if(transaction.type == "income"){
            totalIncome += transaction.amount;
            income.textContent = `₹${totalIncome}`;
        }else{
            totalExpense += transaction.amount;
            expense.textContent = `₹${totalExpense}`
        }
        balance.textContent = `₹${totalIncome-totalExpense}`
    })
}

function addTransaction(event){
    event.preventDefault();

    const transactionTitle = transactionInput.value;
    const transactionAmount = Number(amountInput.value);
    const transactionTypes = transactionType.value;

    const newTransaction = {
        // id: Date.now(),
        title: transactionTitle,
        amount: transactionAmount,
        type: transactionTypes
    }

    transactions.push(newTransaction);
    displayTransaction();
}
transactionForm.addEventListener('submit',addTransaction)
// addTransactionButton.addEventListener('click',addTransaction)

