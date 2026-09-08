# 🚀 JavaScript Projects

A collection of projects built while learning and practicing JavaScript, DOM manipulation, APIs, event handling, and modern web development concepts.

---

# 📌 Projects

## 1. 📝 To-Do List

A simple and interactive To-Do List application built using HTML, CSS, and JavaScript.

### ✨ Features

- Add tasks
- Delete tasks
- Mark tasks as completed
- Add tasks using the Enter key
- Prevent empty tasks
- Dynamic task creation
- Event delegation

### 🛠️ Technologies Used

- HTML5
- CSS3
- JavaScript (ES6)

### 📚 What I Learned

- DOM Manipulation
- Event Listeners
- Event Delegation
- Dynamic Element Creation
- Keyboard Events
- `classList`
- Input Validation


---

# 2. 🧮 Calculator

A simple calculator application built using HTML, CSS, and JavaScript.

### ✨ Features

- Addition
- Subtraction
- Multiplication
- Division
- Percentage
- Decimal calculations
- Clear button
- Delete button
- Responsive design

### 🛠️ Technologies Used

- HTML5
- CSS3
- JavaScript (ES6)

### 📚 What I Learned

- DOM Manipulation
- Event Handling
- Functions
- Conditional Logic
- String Manipulation
- Mathematical Operations


---

# 3. 🌤️ Weather App

A weather application that fetches real-time weather information using the Open-Meteo API.

### ✨ Features

- Search weather by city
- Display temperature
- Display humidity
- Display wind speed
- Display precipitation
- Weather condition icons
- Weather code handling
- Error handling for API requests

### 🛠️ Technologies Used

- HTML5
- CSS3
- JavaScript (ES6)
- Fetch API
- Open-Meteo API

### 📚 What I Learned

- Fetch API
- Working with REST APIs
- JSON data
- `.then()` and `.catch()`
- API data handling
- DOM Manipulation
- Conditional Statements
- Dynamic UI Updates

### 🔗 API Used

[Open-Meteo Weather API](https://open-meteo.com/en/docs)

[Open-Meteo Geocoding API](https://open-meteo.com/en/docs/geocoding-api)


---

# 4.🧠 JavaScript Quiz App

A simple interactive Quiz App built using HTML, CSS and JavaScript.

## ✨ Features

- 10 JavaScript questions
- Dynamic question and option generation
- Select one answer at a time
- Correct and wrong answer indication
- Score calculation
- 10-second timer for each question
- Automatic next question when time runs out
- Progress bar
- Result screen
- Restart quiz
- Prevents moving forward without selecting an answer

## 🛠️ Technologies Used

- HTML5
- CSS3
- JavaScript (ES6)

## 📚 What I Learned

- DOM Manipulation
- Arrays and Objects
- Event Delegation
- Dynamic Element Creation
- `setTimeout()`
- `setInterval()`
- `clearInterval()`
- `classList`
- Event Handling
- State Management
- Conditional Logic

---

# 5. 💰 Expense Tracker

A simple and interactive Expense Tracker application built using HTML, CSS, and JavaScript. It allows users to add income and expenses, track their balance, and manage transactions using browser local storage.

## ✨ Features

* Add income transactions
* Add expense transactions
* Display current balance
* Display total income
* Display total expenses
* Dynamically create transaction cards
* Delete transactions
* Different styling for income and expense transactions
* Form reset after adding a transaction
* Data persistence using `localStorage`
* Automatically load saved transactions when the page starts
* Prevent invalid input using HTML form validation

## 🛠️ Technologies Used

* HTML5
* CSS3
* JavaScript (ES6)
* Local Storage

## 📚 What I Learned

* DOM Manipulation
* Event Handling
* Form Handling
* Arrays and Objects
* `forEach()`
* `filter()`
* Template Literals
* Dynamic HTML Generation
* Event Delegation
* `dataset`
* `Date.now()`
* `localStorage`
* `JSON.stringify()`
* `JSON.parse()`
* State Management
* Conditional Logic
* Number Conversion
* CRUD Operations
* Data Persistence

## 🔄 How It Works

1. User enters a transaction title, amount, and type.
2. JavaScript creates a transaction object.
3. The transaction is added to the `transactions` array.
4. The transaction list is dynamically updated.
5. Income, expense, and balance are calculated from the transactions.
6. Transactions are saved to `localStorage`.
7. When the page is reloaded, saved transactions are retrieved and displayed.
8. Users can delete a transaction using its unique ID.

## 🧠 Key JavaScript Concepts

### Transaction Object

Each transaction is stored as an object containing:

* `id`
* `title`
* `amount`
* `type`

### Local Storage

Transactions are converted into JSON before being stored:

```js
localStorage.setItem("transactions", JSON.stringify(transactions));
```

When the application loads, the stored data is converted back into JavaScript objects:

```js
transactions = JSON.parse(savedTransactions);
```

### Delete Transaction

The `filter()` method is used to remove a transaction based on its unique ID.

```js
transactions = transactions.filter((transaction) => {
    return transaction.id != id;
});
```

### Dynamic UI

Transaction cards are generated dynamically using JavaScript template literals instead of writing each transaction manually in HTML.

---

## 🎯 Project Goal

The main goal of this project was to understand how JavaScript can be used to build a **data-driven application** where user input is stored, displayed, updated, and deleted dynamically.

This project helped me understand the basic concepts of **CRUD operations, state management, DOM manipulation, and client-side data persistence**.
