const addMessage = document.querySelector(".message")
const addButton = document.querySelector(".add")
const createTo = document.querySelector(".create_new_todo")
const todoList = []

addButton.addEventListener("click", function () {
    const newTodo = {
        todo: addMessage.value
    }
    todoList.push(newTodo)
    displayMessages()
})

function displayMessages() {
    const count = todoList.length
    const newInput = document.createElement("input")
    const last = todoList[todoList.length - 1]
        if (last.todo === "555") {
            newInput.value = "---"
        }else {
            newInput.value = count % 2 === 0 ? last.todo.toUpperCase() : last.todo.toLowerCase()
        }
      createTo.append(newInput)
}
