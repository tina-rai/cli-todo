# CLI Todo Manager

A command-line Todo application built with **Node.js** that helps you manage tasks directly from the terminal. Tasks are stored locally in a JSON file, allowing them to persist between program executions.

This project was built to practice **Node.js fundamentals, file handling, JSON manipulation, modular programming, and Git version control**.

---

## Features

* ➕ Add new tasks
* 📋 List all tasks
* ✏️ Edit existing tasks
* ❌ Delete tasks
* ✅ Mark tasks as completed
* 🔍 Search tasks by keyword
* ⏳ View pending tasks
* ✔️ View completed tasks
* 🗑️ Clear all tasks
* ❓ Built-in help menu
* 💾 Persistent task storage using JSON

---

## Tech Stack

* Node.js
* JavaScript (ES6)
* Node.js File System (`fs`) Module
* JSON
* Git & GitHub

---

## Project Structure

```text
cli-todo/
│
├── app.js          # CLI entry point
├── todo.js         # Todo functionality
├── tasks.json      # Stores tasks
├── package.json
├── README.md
└── .gitignore
```

---

## Installation

Clone the repository:

```bash
git clone https://github.com/tina-rai/cli-todo.git
```

Navigate to the project folder:

```bash
cd cli-todo
```

No additional packages are required because the project only uses built-in Node.js modules.

---

## Usage

### Add a task

```bash
node app.js add "Learn Node.js"
```

---

### List all tasks

```bash
node app.js list
```

---

### Delete a task

```bash
node app.js delete 2
```

---

### Mark a task as completed

```bash
node app.js complete 2
```

---

### Edit a task

```bash
node app.js edit 2 "Learn Git and GitHub"
```

---

### Search for tasks

```bash
node app.js search git
```

---

### View pending tasks

```bash
node app.js pending
```

---

### View completed tasks

```bash
node app.js completed
```

---

### Clear all tasks

```bash
node app.js clear
```

---

### Display all available commands

```bash
node app.js help
```

---

## Example

```text
📋 Your Tasks

1. [ ] Learn Node.js
2. [✓] Practice Git
3. [ ] Build Express API
```

---

## How It Works

Tasks are stored in a local `tasks.json` file as an array of objects.

Example:

```json
[
  {
    "id": 1,
    "task": "Learn Node.js",
    "completed": false
  },
  {
    "id": 2,
    "task": "Practice Git",
    "completed": true
  }
]
```

Whenever a command is executed, the application:

1. Reads the tasks from `tasks.json`.
2. Converts the JSON into JavaScript objects.
3. Performs the requested operation.
4. Saves the updated data back to the JSON file.

---

## Concepts Learned

This project helped me learn:

* Running JavaScript with Node.js
* Command-line arguments (`process.argv`)
* Reading and writing files using the File System module
* JSON parsing and serialization
* Arrays and objects
* Array methods (`push`, `find`, `filter`, `forEach`)
* Functions and modular programming
* Input validation
* Building a command-line application
* Git and GitHub workflow

---

## Future Improvements

* Task priorities
* Due dates
* Categories or tags
* Sort tasks
* Export tasks to CSV
* Unit tests
* Colourful terminal output using libraries such as `chalk`

---

## Author

**Tina Rai**

GitHub: https://github.com/tina-rai
