// Create universal Id to make the item's id unique no matter what is deleted or added
let universalId = 1

let todos = [
    {
      id: universalId++,
      name: "Go Shopping",
    },
    {
      id: universalId++,
      name: "Eat Breakfast",
    },
    {
      id: universalId++,
      name: "Bake Bread",
    },
    {
      id: universalId++,
      name: "Cook beans",
    },
  ];
  
  let myTodos = document.querySelector(".todos");
  let ul = document.createElement("ul");
  for (let i = 0; i < todos.length; i++) {
    let li = document.createElement("li");
    let name = todos[i].name
    let id = todos[i].id  
    li.innerHTML = `
      ${name}  
      ${id} 
      <i class="fa fa-pencil-square" aria-hidden="true"></i> 
      <i id=todo-${id} onclick={delItem(${id})}  class="fa fa-trash" aria-hidden="false"></i>`;
    ul.appendChild(li);
    myTodos.appendChild(ul);
  }
  
  function AddToList(arr) {
      let char = document.querySelector("Input").value;

      // The method of id creation would not work well with delete because what happens when we delete item 4 then add a new item. Now two items would have id of 5
      // let entry = arr[arr.length - 1];
      // let newItemId = entry.id;
      
      let newItem = {
          id: universalId++,
          name: char,
      };
      arr.push(newItem);
      let li = document.createElement("li");
      let name = newItem.name
      let id = newItem.id
      li.innerHTML = `
      ${name}
      ${id}
      <i class="fa fa-pencil-square" aria-hidden="true"></i> 
      <i id=todo-${id} onclick={delItem(${id})} class="fa fa-trash" aria-hidden="true"></i>`;
      ul.appendChild(li);
  }
  
  let addBtn = document.querySelector("button");
  addBtn.addEventListener("click", (event) => {
    event.preventDefault();
    AddToList(todos);
  });
  
  const delItem = (id) => {

    //Find the item and remove from the todos  list
   let index = todos.findIndex(todo =>todo.id == id)
   todos.splice(index,1)
  
   // Add function to remove item from page
    
  };
  
  // const newLocal = document.querySelectorAll('.fa-trash');
  // console.log(newLocal)
  // let deletebtn = newLocal;
  
  // deletebtn.forEach(btn => btn.addEventListener('click', (event) =>{
  //     event.preventDefault();
  //      id = this.dataset.id
  //     delItem(id, todos)
  // }))
  // deletebtn.addEventListener('click', (event) =>{
  //     event.preventDefault();
  //     delItem(todos.id, todos)
  //     // console.log(todos)
  
  // })