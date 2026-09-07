const balance = document.querySelector("#balance");
const income = document.querySelector("#income");
const expense = document.querySelector("#expense");

const transactionForm = document.getElementById("transactionForm");

const transactionInput = document.getElementById("title");
const amountInput = document.getElementById("amount");
const transactionType = document.getElementById("type");

const addTransactionButton = document.querySelector(".add-btn");

const transactionList = document.getElementById("transactionList");

let transactions = [];

function displayTransaction() {
  transactionList.innerHTML = "";

  let totalIncome = 0;
  let totalExpense = 0;

  transactions.forEach((transaction) => {
    const sign = transaction.type === "income" ? "+" : "-";

    const transactionClass =
      transaction.type === "income"
        ? "income-transaction"
        : "expense-transaction";

    transactionList.innerHTML += `
         <div class="transaction ${transactionClass}">
                    <div class="transaction-info">
                        <h3>${transaction.title}</h3>
                        <p>${transaction.type}</p>
                    </div>
                    <div class="transaction-right">
                        <span class="amount">${sign} ₹${transaction.amount}</span>
                        <button class="delete-btn" data-id="${transaction.id}">Delete</button>
                    </div>
                </div>
        `;

    if (transaction.type == "income") {
      totalIncome += transaction.amount;
      income.textContent = `₹${totalIncome}`;
    } else {
      totalExpense += transaction.amount;
      expense.textContent = `₹${totalExpense}`;
    }
    balance.textContent = `₹${totalIncome - totalExpense}`;
  });
}

function addTransaction(event) {
  event.preventDefault();

  const transactionTitle = transactionInput.value;
  const transactionAmount = Number(amountInput.value);
  const transactionTypes = transactionType.value;

  const newTransaction = {
    id: Date.now(),
    title: transactionTitle,
    amount: transactionAmount,
    type: transactionTypes,
  };

  transactions.push(newTransaction);
  displayTransaction();
  transactionForm.reset();
}
transactionForm.addEventListener("submit", addTransaction);

transactionList.addEventListener("click", function (event) {

  if (event.target.classList.contains("delete-btn")) {
    const id = Number(event.target.dataset.id);

    transactions = transactions.filter((transaction) => {
      return transaction.id != id;
    });

    displayTransaction();
  }
});

// function saveTransactions() {
//     localStorage.setItem("transactions", JSON.stringify(transactions));
// }