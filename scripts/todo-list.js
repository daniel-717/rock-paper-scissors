todoList = [{
    name: 'learn react.js',
    date: '25-10-2024'
}];

renderTodoList()

function renderTodoList()
{
    let display = '';
    todoList.forEach((todoObject, index) => {
        const {name, date} = todoObject;
        display += `
        <div>${name}</div>
        <div>${date}</div>
        <button class="delete-btn js-delete-btn">Delete</button>
        `;
    });
    document.querySelector('.js-todo-grid').innerHTML = display;

    // Inorder to add a Event Listener we need to put the html on the page first

    document.querySelectorAll('.js-delete-btn')
        .forEach((button, index) => {
            button.addEventListener('click', () => {
                todoList.splice(index, 1);
                renderTodoList();
            });
        });
}

document.querySelector('.js-add-btn')
.addEventListener('click', () => {
    AddList();
});

function AddList() 
{
    const nameInput = document.querySelector('.js-name-input');
    const dateInput = document.querySelector('.js-date-input');
    const name = nameInput.value;
    const date = dateInput.value;

    todoList.push({name, date});
    renderTodoList();
    nameInput.value = "";
    dateInput.value = "";
}