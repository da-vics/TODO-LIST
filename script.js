/*Global Variables*/
var para_class = "no-task";
var para_text = "No Task To Display";
var div_class  = "container";
var lists_class = "todo-list";
var list = "todo";
var list_div = "buttons";
var list_btn_up = "up";
var list_btn_down = "down";
var list_btn_remove = "remove";

var task_num =0;

/*Utility Functions*/

function createELement(type,className){

  var element = document.createElement(type);

  if(className)
  {
    element.classList.add(className);
  }
  return element;
}

function createParagraph()
{
  var p =  createELement("p",para_class);
  p.innerText = para_text;
  return p;
}

function createDiv()
{
  var div =  createELement("div",div_class);
  return div;
}

function createUl()
{
  var ul =  createELement("ul",lists_class);
  return ul;
}

function createLi(text)
{
  var li =  createELement("li",list);
  var p = document.createElement("p");
  p.innerText = text;
  li.append(p);
  return li;

}

function createLi_Div()
{
  var div =  createELement("div",list_div);

  var btn_up =  createELement("button",list_btn_up);
  btn_up.innerText = "UP";
  btn_up.setAttribute("data-purpose","up");

  var btn_down =  createELement("button",list_btn_down);
  btn_down.innerText = "Down";
  btn_down.setAttribute("data-purpose","down");

  var btn_remove =  createELement("button",list_btn_remove);
  btn_remove.innerText = "Remove";
  btn_remove.setAttribute("data-purpose","remove");

  div.append(btn_up);
  div.append(btn_down);
  div.append(btn_remove);
  return div;
}

var add_task = document.getElementById("btn");
var main = document.getElementById("main");
var task_input = document.getElementById("task_input");
var header_cont = document.querySelector("header .container");


add_task.addEventListener("click",function()
{

if(task_input.value.length>0)
{

var check_list = document.querySelector(".todo-list");
  if(!check_list)
  {
    ++task_num;
    var task_count = createELement("p","task_count");
    task_count.innerText = "Task: " + task_num;
    var header_cont_div = createELement("div","count_cont");
    header_cont_div.append(task_count);
    header_cont.append(header_cont_div);    

  var p = document.querySelector("p.no-task");
  main.removeChild(p);

  var ul = createUl();
  var li = createLi(task_input.value);
  var div = createLi_Div();
  li.append(div);
  ul.append(li);
  main.append(ul);
  }

  else{

    ++task_num;
    var task_count = document.querySelector("header .container .count_cont .task_count");
    task_count.innerText = "Task: " + task_num;
    
    var ul = document.querySelector(".todo-list");
    var li = createLi(task_input.value);
    var div = createLi_Div();
    li.append(div);
    ul.append(li);
  }

  task_input.value ="";
}///

});


task_input.addEventListener("keyup",function(e)
{

if(task_input.value.length>0)
{
if(e.keyCode === 13)
{

var check_list = document.querySelector(".todo-list");
  if(!check_list)
  {
    ++task_num;
    var task_count = createELement("p","task_count");
    task_count.innerText = "Task: " + task_num;
    var header_cont_div = createELement("div","count_cont");
    header_cont_div.append(task_count);
    header_cont.append(header_cont_div); 

  var p = document.querySelector("p.no-task");
  main.removeChild(p);

  var ul = createUl();
  var li = createLi(task_input.value);
  var div = createLi_Div();
  li.append(div);  
  ul.append(li);
  main.append(ul);
  }

  else
  {
    ++task_num;
    var task_count = document.querySelector("header .container .count_cont .task_count");
    task_count.innerText = "Task: " + task_num;

    var ul = document.querySelector(".todo-list");
    var li = createLi(task_input.value);
    var div = createLi_Div();
    li.append(div);
    ul.append(li);
  }

 task_input.value ="";
}///keycode
 
} /// length
});
9
main.addEventListener("click",function(e){

  if(e.target.nodeName == "BUTTON")
  {
    var button = e.target;
    var typeButoon = button.getAttribute("data-purpose");  /// ||  if(button.className == "remove")
    var li = button.parentElement.parentElement;
    var ul = li.parentElement;

    switch(typeButoon)
    {

      case "up":
        var previous_element = li.previousElementSibling;
        if(previous_element!==null)
        {
          console.log(previous_element);
            ul.removeChild(li);
            ul.insertBefore(li,previous_element);
        }
      break;

      case "down":
        var next_element = li.nextElementSibling;
        if(next_element!==null){
          ul.removeChild(next_element);
          ul.insertBefore(next_element,li);
        }
        break;

        case "remove":
          ul.removeChild(li);
          --task_num;
          var task_count = document.querySelector("header .container .count_cont .task_count");
          task_count.innerText = "Task: " + task_num;
          if(ul.children.length==0)
          {
              var p = document.createElement("p");
              p.innerText = "No Task To Display";
              p.classList.add("no-task");
              main.removeChild(ul);
              main.append(p);

              var task_count = document.querySelector("header .container .count_cont");
              header_cont.removeChild(task_count);
          }
          break;

    }

  } /// if button



})