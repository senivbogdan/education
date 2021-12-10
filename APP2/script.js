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
    const inpute = document.createElement("input")
    const last = todoList[todoList.length - 1]
        if (last.todo === "555") {
            inpute.value = "---"
        }else {
            inpute.value = count % 2 === 0 ? last.todo.toUpperCase() : last.todo.toLowerCase()
        }
      createTo.append(inpute)
}
