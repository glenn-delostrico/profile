

class TaskManager {
    tasks = [];
    currentId = 0;
    constructor(tasks, currentId) {
        this.tasks = tasks; 
        this.currentId = currentId;
    }

    addTask(name, description, assignedTo, dueDate, status) {
        this.currentId++;
    }
}




