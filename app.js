const fs = require("fs");

const command = process.argv[2];
const argument = process.argv[3];
const args = process.argv.slice(3);

// Read tasks from JSON file
function loadTasks() {
    const data = fs.readFileSync("tasks.json", "utf8");
    return JSON.parse(data);
}

// Save tasks to JSON file
function saveTasks(tasks) {
    fs.writeFileSync("tasks.json", JSON.stringify(tasks, null, 2));
}

if (command === "add") {

    if (!argument) {
        console.log("oopsie doopsie alert! Please provide a task.");
        process.exit();
    }

    const tasks = loadTasks();

    const newTask = {
        id: tasks.length + 1,
        task: argument,
        completed: false
    };

    tasks.push(newTask);

    saveTasks(tasks);

    console.log(" ✓ Task added!");

}
else if (command === "list") {

    const tasks = loadTasks();

    if (tasks.length === 0) {
        console.log("No tasks found.");
    } else {

        console.log("\n📋 Your Tasks\n");

        tasks.forEach(task => {

            const status = task.completed ? "✓" : " ";

            console.log(`${task.id}. [${status}] ${task.task}`);

        });

    }

}
else if (command === "delete") {

    const tasks = loadTasks();

    const id = Number(argument);

    const updatedTasks = tasks.filter(task => task.id !== id);

    if (updatedTasks.length === tasks.length) {

        console.log("Task not found.");

    } else {

        saveTasks(updatedTasks);

        console.log("✓ Task deleted.");

    }

}
else if (command === "complete") {

    if (!argument) {
        console.log("oopsie doopsie alert! Please provide a task ID.");
        process.exit();
    }

    const tasks = loadTasks();

    const id = Number(argument);

    const task = tasks.find(task => task.id === id);

    if (!task) {

        console.log("Task not found.");

    } else {

        task.completed = true;

        saveTasks(tasks);

        console.log("✓ Task marked as complete.");

    }

}
else if (command === "edit") {

    if (args.length < 2) {
        console.log("oopsie doopsie alert! Please provide a task ID and new task.");
        process.exit();
    }

    const id = Number(args[0]);

    const newTask = args.slice(1).join(" ");

    const tasks = loadTasks();

    const task = tasks.find(task => task.id === id);

    if (!task) {

        console.log("Task not found.");

    } else {

        task.task = newTask;

        saveTasks(tasks);

        console.log("✓ Task updated.");

    }

}
else if (command === "search") {

    if (!argument) {
        console.log("❌ Please provide a search keyword.");
        process.exit();
    }

    const tasks = loadTasks();

    const results = tasks.filter(task =>
        task.task.toLowerCase().includes(argument.toLowerCase())
    );

    if (results.length === 0) {
        console.log("No matching tasks.");
    } else {

        console.log("\n🔍 Search Results\n");

        results.forEach(task => {

            const status = task.completed ? "✓" : " ";

            console.log(`${task.id}. [${status}] ${task.task}`);

        });

    }

}
else if (command === "pending") {

    const tasks = loadTasks();

    const pendingTasks = tasks.filter(task => !task.completed);

    if (pendingTasks.length === 0) {
        console.log("yayieee No pending tasks.");
        return;
    }

    console.log("\n⏳ Pending Tasks\n");

    pendingTasks.forEach(task =>
        console.log(`${task.id}. ${task.task}`)
    );

}
else if (command === "completed") {

    const tasks = loadTasks();

    const completedTasks = tasks.filter(task => task.completed);

    if (completedTasks.length === 0) {
        console.log("No completed tasks.");
        return;
    }

    console.log("\n✅ Completed Tasks\n");

    completedTasks.forEach(task =>
        console.log(`${task.id}. ${task.task}`)
    );

}
else if (command === "help") {

    console.log(`
CLI Todo Commands

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
else if (command === "clear") {

    saveTasks([]);

    console.log("🗑️ All tasks deleted.");

}
else {

    console.log("Unknown command.");

}