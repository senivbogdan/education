let addMessage = document.querySelector(".message")
let addButton = document.querySelector(".add")
let createTo = document.querySelector(".create_new_todo")
let todoList = []

addButton.addEventListener("click", function () {
    let newTodo = {
        todo: addMessage.value
    }
    todoList.push(newTodo)
    displayMessages()
})

function displayMessages() {
    let disMessage;
    let count = 0
    let inpute = document.createElement("input")
    const last = todoList[todoList.length - 1]
    todoList.forEach((item, i) => {
        count++
        inpute.value = last.todo
        if (last.todo === "555") {
            inpute.value = "---"
            disMessage += createTo.append(inpute)
        }else if (count % 2 === 0) {
            inpute.value = inpute.value.toUpperCase()
            disMessage += createTo.append(inpute)
        } else {
            inpute.value = inpute.value.toLowerCase()
            disMessage += createTo.append(inpute)
        }
    })
}
