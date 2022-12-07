function addTodo() {
// accessing the input field, cloning the content with the method value
let inputField = document.querySelector(".TodoListField").value;
console.log(inputField);

if (inputField !== "") {

// converting the cloned text from inputField into a textNode
    let todosTextNode = document.createTextNode(inputField);
    // storing the textNode in a li with the method createElement
    let listItemTextNode = document.createElement("li");
    listItemTextNode.appendChild(todosTextNode);
    // add color of li
    listItemTextNode.setAttribute("class", "list-group-item-info")
    
    // append the listitemTextnode as a child to the ul
    document.querySelector(".todoUL").appendChild(listItemTextNode);

    // access input field and clear it
    document.querySelector(".TodoListField").value = "";
}
}

