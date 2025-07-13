// https://github.com/shahaby/cs81-module6b-assistant

// Define a constructor function PersonalAssistant(name)
function PersonalAssistant(name) {
    this.name = name;
    this.tasks = [];
    this.mood = "neutral";
}


// Define at least three methods:
PersonalAssistant.prototype.addTask = function(task) {
    this.tasks.push(task);
    console.log(`New task added: ${task}`);
};

PersonalAssistant.prototype.completeTask = function() {
    if (this.tasks.length > 0) {
        const completedTask = this.tasks.shift();
        console.log(`Completing task: ${completedTask}`);
        this.updateMood("accomplished");
        console.log(`Now you have ${this.tasks.length} tasks left.`);
    } else {
        console.log("No tasks left to complete.");
    }
};

PersonalAssistant.prototype.reportMood = function() {
    console.log(`Mood: ${this.mood}`);
};

PersonalAssistant.prototype.updateMood = function(newMood) {
    this.mood = newMood;
};





// Use console.log() to simulate a day in your life where you:
const myAssistant = new PersonalAssistant("Jarvis");

console.log(`Hi! I'm ${myAssistant.name}, your assistant.`);
console.log(`You have ${myAssistant.tasks.length} tasks left.`);

// Add tasks
myAssistant.addTask("Finish JS assignment");
myAssistant.addTask("Prepare for the meeting");
myAssistant.addTask("Go grocery shopping");

// Mood before completing tasks
myAssistant.reportMood();

// Complete a task
myAssistant.completeTask();

// Mood after task completion
myAssistant.reportMood();