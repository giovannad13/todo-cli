
// Todo list (array of objects)

let todos = [
    { id: [1], text: "Learn JavaScript", completed: false, priority: "high" },    
    { id: [2], text: "Build JS Todo App", completed: false, priority: "medium" },
    { id: [3], text: "React Bad ass", completed: false, priority: "low" },
];




// Function to display all todos

const listTodos = () => {
    console.log("\n Giovanna's To Do List:\n");

    if (todos.length === 0) {
        console.log("No todos yet! Add one to get started.\n");
        return;
    }


    const completedCount = todos.filter(todo => todo.completed).length;
    const totalCount = todos.length;
    console.log(`Completed: ${completedCount}/${totalCount}\n`);
    

todos.forEach((todo, index) => {
    const status = todo.completed ? "✅" : "⬜";
    // console.log(`[ ${index + 1}.] ${status} ${todo.text}`);


    //Determine the priority emoji

    let priorityEmoji;
    if (todo.priority === "high") {
        priorityEmoji = "🔴";
    } else if (todo.priority === "medium") {
        priorityEmoji = "🟡"; 
    } else {
        priorityEmoji = "🟢";
    }
    
    console.log(`${index +1}. ${status} ${priorityEmoji} ${todo.text}`);



    // const letter = String.fromCharCode(65 + index);
    // console.log(`[${letter}]. ${status} ${todo.text}`);
});

console.log("\n");

};



// Function to add a new todo

const addTodo = (text, priority = "medium") => {
    const newTodo = {
        id: todos.length +1,
        text: text,
        completed: false,
        priority: priority
    };

    todos.push(newTodo);
    console.log(`\n✅ Added: "${text}" (Priority: ${priority})\n`);
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





// Function to show only Incomplete todos


        // Function to display only incomplete todos

    const listIncompleteTodos = () => {
        console.log("\n📋 Incomplete Todos are:\n");




      // Filter to get only incomplete todos

    const incompleteTodos = todos.filter(todo => !todo.completed);
    


      // Check if there are any incomplete todos

    if (incompleteTodos.length === 0) {
        console.log("No incomlete todos! All caught up!\n");
        return;
    }



      // Display each incomplete todo

    incompleteTodos.forEach((todo, index) => {
        console.log(`${index + 1}. ⬜ ${todo.text}`);
    });

    console.log("\n");


};





// Function to toggle a todo's completed status

const toggleTodo = (index) => {
    if (index < 0 || index >= todos.length) {
        console.log("\n❌ Invalid todo number!\n");
        return;
    }

    todos[index].completed = !todos[index].completed;


    const status = todos[index].completed ? "completed" : "incomplete";
    console.log(`\n🔄 Toggled: "${todos[index].text}" is now ${status}\n`);

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






// listTodos();
// addTodo("Master array methods");
// listTodos();
// completeTodo(0);
// listTodos();
// deleteTodo(0);
// listTodos();


// listTodos();

// console.log("--- Toggle first todo ---");
// toggleTodo(0);
// listTodos();

// console.log("--- Toggling it again ---");
// toggleTodo(0);
// listTodos();

// console.log("--- Toggling second todo ---");
// toggleTodo(2);
// toggleTodo(1);
// listTodos();



// // Test incomplete list
// console.log("=== Testing listIncompleteTodos ===");

// listTodos();  // Show all todos

// listIncompleteTodos();  // Show only incomplete

// // Complete a todo
// completeTodo(1);

// listIncompleteTodos();  // Show incomplete again (should have one less)

// // Complete another
// // completeTodo(0);

// listIncompleteTodos();  // Show incomplete (even fewer now)





console.log("=== Testing All Todo Features ===\n");

// Show initial todos with priorities
listTodos();

// Add todos with different priorities
addTodo("Fix critical bug", "high");
addTodo("Update README", "low");
addTodo("Refactor code");  // Uses default: medium

listTodos();

// Complete a todo
console.log("--- Completing first todo ---");
completeTodo(0);
listTodos();

// Toggle a todo
console.log("--- Toggling second todo ---");
toggleTodo(1);
listTodos();

// Show only incomplete
console.log("--- Showing incomplete todos ---");
listIncompleteTodos();

// Delete a todo
console.log("--- Deleting a todo ---");
deleteTodo(2);
listTodos();

console.log("=== All Features Working! ===");