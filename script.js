
function createElement(type,className){
  var element = document.createElement(type);
  if(className){
    element.classList.add(className);
  }
  return element;
}


function createParagraph(text, className){

  var p = createElement("p",className);
  p.innerText = text;

  return p;
}

///createParagraph("No TODOS to display", "no-todos");

function createUl(className){
  var ul = createElement("ul",className);
  return  ul;
}

function createDiv(className){
  var div  = createElement("div",className);
return div;
}

function createbutton(text, className, dataPurpose){
  var btn  = createElement("button",className);
  btn.innerText = text;
  btn.setAttribute("data-purpose", dataPurpose);
return btn;
}

function createTODO(text)
{
  var li = createElement("li", "todo");
  var p = createParagraph(text);
  li.append(p);
  var buttoncontainer = createDiv("buttons");
  var upbtn = createbutton("Up", "up","up");
  var downbtn = createbutton("DOWN", "down","down");
  var removebtn = createbutton("Remove", "remove","remove");

  buttoncontainer.append(upbtn);
  buttoncontainer.append(downbtn);
  buttoncontainer.append(removebtn);

  li.append(buttoncontainer);

  return li;
}


var todoinput = document.getElementById("todo-input");

var add_btn = document.getElementById("add-todo");

var maincontainer = document.getElementById("todo-main");


add_btn.addEventListener("click",function(){

  if(todoinput.value.length>0)
    {
      todo.style.opacity = 0;
      setTimeout(function(){
        todo.style.opacity=1;
      },100);

  var todo = createTODO(todoinput.value);

  if(!maincontainer.querySelector(".todo"))
  {
    var noTodosp = document.querySelector("p.no-todos");
    maincontainer.removeChild(noTodosp);
    
  var ul = createUl("todo-list");
  ul.append(todo);
  maincontainer.append(ul);
  }
 
  else{
    var ul = document.querySelector(".todo-list");
    ul.append(todo);
  }

  todoinput.value = "";
    } ///

})

todoinput.addEventListener("keyup", function(e){

    if(todoinput.value.length>0)
    {
       if(e.keyCode === 13){
  var todo = createTODO(todoinput.value);

  todo.style.opacity = 0;
    setTimeout(function(){
      todo.style.opacity=1;
    },100);

  if(!maincontainer.querySelector(".todo"))
  {
  

    var noTodosp = document.querySelector("p.no-todos");
    maincontainer.removeChild(noTodosp);
  var ul = createUl("todo-list");
  ul.append(todo);
  maincontainer.append(ul);
  }
 
  else{
    var ul = document.querySelector(".todo-list");
    ul.append(todo);
  }

  todoinput.value = "";
  } ///
    } ///
 
});


maincontainer.addEventListener("click", function(e){

  if(e.target.nodeName == "BUTTON"){
   var button = e.target;
   var typeButoon = button.getAttribute("data-purpose");

   var li = button.parentElement.parentElement;
   var ul = li.parentElement;

   switch(typeButoon){

    case "remove":
      ul.removeChild(li);
     if(ul.children.length ===0){
        var p = createParagraph("No TODOs to display", "no-todos");
        var ul = document.querySelector(".todo-list");
        maincontainer.removeChild(ul);
        maincontainer.append(p);
      }
      break;

      case "up":
        var previousElement = li.previousElementSibling;
        if(previousElement!==null){
          ul.removeChild(li);
          ul.insertBefore(li,previousElement);
        }
      break;

      case "down":
        var nextElement  = li.nextElementSibling;
        if(nextElement!==null){
          ul.removeChild(li);
          ul.insertBefore(li,nextElement.nextElementSibling);
        }

   } ///
  }
  
})


