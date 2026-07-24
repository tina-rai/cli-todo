const fs = require("fs");
// Read tasks from JSON file
function loadTasks() {
    const data = fs.readFileSync("tasks.json", "utf8");
    return JSON.parse(data);
}

// Save tasks to JSON file
function saveTasks(tasks) {
    fs.writeFileSync("tasks.json", JSON.stringify(tasks, null, 2));
}

function addTask(taskName) {

    if (!taskName) {
        console.log("Oopsie doopsie alert! Please provide a task.");
        return;
    }

    const tasks = loadTasks();

    const newTask = {
        id: tasks.length + 1,
        task: taskName,
        completed: false
    };

    tasks.push(newTask);

    saveTasks(tasks);

    console.log("✓ Task added!");
}

function listTasks() {

    const tasks = loadTasks();

    if (tasks.length === 0) {
        console.log("No tasks found.");
        return;
    }

    console.log("\n📋 Your Tasks\n");

    tasks.forEach(task => {

        const status = task.completed ? "✓" : " ";

        console.log(`${task.id}. [${status}] ${task.task}`);

    });

}

function deleteTask(taskId) {

    if (!taskId) {
        console.log("Oopsie doopsie alert! Please provide a task ID.");
        return;
    }

    const tasks = loadTasks();

    const id = Number(taskId);

    const updatedTasks = tasks.filter(task => task.id !== id);

    if (updatedTasks.length === tasks.length) {
        console.log("Task not found.");
        return;
    }

    saveTasks(updatedTasks);

    console.log("✓ Task deleted.");
}

function completeTask(taskId) {

    if (!taskId) {
        console.log("Oopsie doopsie alert! Please provide a task ID.");
        return;
    }

    const tasks = loadTasks();

    const id = Number(taskId);

    const task = tasks.find(task => task.id === id);

    if (!task) {
        console.log("Task not found.");
        return;
    }

    task.completed = true;

    saveTasks(tasks);

    console.log("✓ Task marked as complete.");
}

function editTask(args) {

    if (args.length < 2) {
        console.log("Oopsie doopsie alert! Please provide a task ID and new task.");
        return;
    }

    const id = Number(args[0]);

    const newTask = args.slice(1).join(" ");

    const tasks = loadTasks();

    const task = tasks.find(task => task.id === id);

    if (!task) {
        console.log("Task not found.");
        return;
    }

    task.task = newTask;

    saveTasks(tasks);

    console.log("✓ Task updated.");
}

function searchTask(keyword) {

    if (!keyword) {
        console.log("Please provide a search keyword.");
        return;
    }

    const tasks = loadTasks();

    const results = tasks.filter(task =>
        task.task.toLowerCase().includes(keyword.toLowerCase())
    );

    if (results.length === 0) {
        console.log("No matching tasks.");
        return;
    }

    console.log("\n🔍 Search Results\n");

    results.forEach(task => {

        const status = task.completed ? "✓" : " ";

        console.log(`${task.id}. [${status}] ${task.task}`);

    });

}

function pendingTasks() {

    const tasks = loadTasks();

    const pending = tasks.filter(task => !task.completed);

    if (pending.length === 0) {
        console.log("Yay! No pending tasks.");
        return;
    }

    console.log("\n⏳ Pending Tasks\n");

    pending.forEach(task => {
        console.log(`${task.id}. ${task.task}`);
    });

}

function completedTasks() {

    const tasks = loadTasks();

    const completed = tasks.filter(task => task.completed);

    if (completed.length === 0) {
        console.log("No completed tasks.");
        return;
    }

    console.log("\n✓ Completed Tasks\n");

    completed.forEach(task => {
        console.log(`${task.id}. ${task.task}`);
    });

}

function clearTasks() {

    saveTasks([]);

    console.log("🗑️ All tasks deleted.");

}

function showHelp() {

    console.log(`
Tina's CLI Todo Commands

add "task"
list
delete <id>
complete <id>
edit <id> "new task"
search <keyword>
pending
completed
help
clear
`);

}

module.exports = {
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
};