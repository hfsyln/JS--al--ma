//?Selectors
const addBtn = document.getElementById("todo-button");
const todoInput = document.getElementById("todo-input");
const todoUl = document.getElementById("todo-ul");


let todos = []; boş arraye 
addBtn.addEventListener("click", () => {
    if (todoInput.value.trim() === "") {
      alert("PLease enter new todo");
    } else { //olunca obje oluştur ve girileni obje yap (ne zaman yeni obje oluştu ona ıd ata textini texte ata diğerlerini yap)
      const newTodo = {
        id: new Date().getTime(),
        completed: false,
        text: todoInput.value,
      };

         createListElement(newTodo); //newtodo bilgisini fonksiyona göndermek için
        todoInput.value = ""; //sıfırlıyoruz bir ul eklenince ikinciye geçince input bölümü 0 la
        };


});

const createListElement = (newTodo) => {
    
    //!elementleri oluştur ve bağla 
    
    const li = document.createElement("li")
    li.id = newTodo.id // li.setAttribute("id", newTodo.id) aynı sonuç oluşan ıd yi li ye aktardık(kullanıcaz silme vs için)
    console.log(li);


    const okIcon = document.createElement("i");
    okIcon.setAttribute("class", "fas fa-check" );
    li.appendChild(okIcon);
    console.log(li);

    const p = document.createElement("p");
    p.textContent = todoInput.value//const pTextNode = document.createTextNode(newTodo.text);
    //p.appendChild(pTextNode); //object içindeki text ten alıyoruz
    li.appendChild(p);

    const deleteIcon = document.createElement("i");
    deleteIcon.setAttribute("class", "fas fa-trash");
    li.appendChild(deleteIcon);

    todoUl.appendChild(li);

    //newTodo.completed ? li.classList.add("checked") : "" //tıklama durumu için ama zaten yukarıda tıklama tanımlı ve completed değişti
    newTodo.completed && li.classList.add("checked") //aynı işi yapar
};

//parente verilen event childları yakalar target ile nerden geldiğini anlarız(hangi buton)
todoUl.addEventListener("click", (e)=>{
  //e.target hangi buton olduğu verir
  if(e.target.classList.contains("fa-trash")) {
    e.target.parentElement.remove();
  }else if(e.target.classList.contains("fa-check")){
    e.target.parentElement.classList.toggle("checked")
  }

  });

todoInput.addEventListener("keydown", (e) =>{
  if(e.code === "Enter"){
    addBtn.click();
  }

});

window.onload = function (){
  todoInput.focus();
}

