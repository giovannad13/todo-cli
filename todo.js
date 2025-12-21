// Todo list (array of objects)

let todos = [
    { id: 1, text: "Learn JavaScript", completed: false },    
    { id: 2, text: "Build JS Todo App", completed: false },
];



// Function to display all todos

const listTodos = () => {
    console.log("\n My To Do List:\n");

    if (todos.length === 0) {
        console.log("No todos yet! Add one to get started.\n");
        return;
    }

todos.forEach((todo, index) => {
    const status = todo.completed ? "✅" : "⬜";
    console.log(`${index + 1}. ${status} ${todo.text}`);

});

console.log("\n");
};

// Function to add a new todo

const addTodo = (text) => {
    const newTodo = {
        id: todos.length +1,
        text: text,
        completed: false
    };

    todos.push(newTodo);
    console.log(`\n✅ Added: "${text}"\n`);
};

// Function to mark a todo as completed

const completeTodo = (index) => {
    if (index < 0 || index >= todos.length) {
        console.log("\n❌ Invalid todo nuber!\n");

        return;
    }

    todos[index].completed = true;
    console.log(`\n✅ Completed: "${todos[index].text}"\n`);
};


// Function to Delete a todo

const deleteTodo = (index) => {
    if (index < 0 || index >= todos.length) {
    console.log("\n❌ Invalid todo number!\n");
    return;
}

    const deleted = todos[index].text;
    todos = todos.filter((todo, i) => i !== index);
    console.log(`\n🗑️  Deleted: "${deleted}"\n`);
    };


// Test Functions

listTodos();
addTodo("Master array methods");
listTodos();
completeTodo(0);
listTodos();
deleteTodo(1);
listTodos();