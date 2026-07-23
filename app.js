const fs = require("fs");

const command = process.argv[2];
const argument = process.argv[3];

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

    const tasks = loadTasks();

    const newTask = {
        id: tasks.length + 1,
        task: argument,
        completed: false
    };

    tasks.push(newTask);

    saveTasks(tasks);

    console.log("✅ Task added!");

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

        console.log("✅ Task deleted.");

    }

}
else {

    console.log("Unknown command.");

}