let todos = [
    {
      id: 1,
      name: "Go Shopping",
    },
    {
      id: 2,
      name: "Eat Breakfast",
    },
    {
      id: 3,
      name: "Bake Bread",
    },
    {
      id: 4,
      name: "Cook beans",
    },
  ];
  
  let myTodos = document.querySelector(".todos");
  let ul = document.createElement("ul");
  for (let i = 0; i < todos.length; i++) {
    let li = document.createElement("li");
    li.innerHTML = `
      ${todos[i].name}  
      ${todos[i].id} 
      <i class="fa fa-pencil-square" aria-hidden="true"></i> 
      <i onclick={delItem(${todos[i].id})}  class="fa fa-trash" aria-hidden="false"></i>`;
    console.log(todos[i].id);
    ul.appendChild(li);
    myTodos.appendChild(ul);
  }
  
  function AddToList(arr) {
      let char = document.querySelector("Input").value;
      let entry = arr[arr.length - 1];
      let newItemId = entry.id;
      let newItem = {
          id: newItemId + 1,
          name: char,
      };
      arr.push(newItem);
      let li = document.createElement("li");
      li.innerHTML = `
      ${newItem.name}
      ${newItem.id}
      <i class="fa fa-pencil-square" aria-hidden="true"></i> 
      <i onclick={delItem(${newItem.id})} class="fa fa-trash" aria-hidden="true"></i>`;
      ul.appendChild(li);
  }
  
  let addBtn = document.querySelector("button");
  addBtn.addEventListener("click", (event) => {
    event.preventDefault();
    AddToList(todos);
  });
  // let id = event.target.dataset.index;
  // console.log(this)
  const delItem = (id, todos) => {
    console.log(todos);
    // let index = todos.filter(todo => todo.id !== id)
    // console.log(index);
  
    // let index = todos.findIndex(todo =>todo.id == id)
    // todos.splice(index,1)
    // console.log(todos)
    // console.log(id)
    // return index;
  };
  delItem();
  
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