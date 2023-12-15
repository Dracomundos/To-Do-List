// Get the input and ul element
const newTodoInput = document.getElementById('newTodo');
const todosList = document.getElementById('todos');

// Function to create a delete button
function createDeleteButton() {
    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'X'; // You can use any icon or text for the delete button
    deleteButton.classList.add('delete-btn');

    // Event listener to remove the todo item on click
    deleteButton.addEventListener('click', function () {
        this.parentElement.remove();
    });

    return deleteButton;
}

// Function to add a new todo
function addTodo() {
    // Get the value from the input
    const todoText = newTodoInput.value;

    if (todoText.trim() !== '') {
        // Create a new li element
        const newTodoItem = document.createElement('li');

        // Set the text of the li element to the input value
        newTodoItem.innerText = todoText;

        // Create and append the delete button to the new li element
        const deleteButton = createDeleteButton();
        newTodoItem.appendChild(deleteButton);

        // Append the new li element to the ul
        todosList.appendChild(newTodoItem);

        // Clear the input field after adding todo
        newTodoInput.value = '';
    } else {
        alert('Please enter a valid to-do item!');
    }
}



