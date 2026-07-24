//app.js reads the command, arguments and calls the correct function

const {
    addTask,
    listTasks,
    deleteTask,
    completeTask,
    editTask,
    searchTask,
    pendingTasks,
    completedTasks,
    clearTasks,
    showHelp
} = require("./todo");

const command = process.argv[2];
const argument = process.argv[3];
const args = process.argv.slice(3);

// Route commands
switch (command) {
    case "add":
        addTask(argument);
        break;

    case "list":
        listTasks();
        break;

    case "delete":
        deleteTask(argument);
        break;

    case "complete":
        completeTask(argument);
        break;

    case "edit":
        editTask(args);
        break;

    case "search":
        searchTask(argument);
        break;

    case "pending":
        pendingTasks();
        break;

    case "completed":
        completedTasks();
        break;

    case "clear":
        clearTasks();
        break;

    case "help":
        showHelp();
        break;

    default:
        console.log("Unknown command.");
}