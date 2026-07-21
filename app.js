const command = process.argv[2];
const argument = process.argv[3];

if (command === "add") {
    console.log(`Adding task: ${argument}`);
} else if (command === "list") {
    console.log("Listing all tasks...");
} else if (command === "delete") {
    console.log(`Deleting task ${argument}`);
} else {
    console.log("Unknown command.");
}