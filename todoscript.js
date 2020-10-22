
//Select Elements, eventlisteners and functions: input new data, add a new task, add add the data, delete the list.  

//1. create a variable that will store get.elementbyId for the input element.
//check if input is working with a console.log
const input = document.getElementById('input');
//input.addEventListener('click', function(e){
//retrieve  and store the value from the input box
//let inputBoxValue = e.target.value;
//console.log(inputBoxValue);
//});

// add a const 
//2. get element by id for button that will add items to list , we can break it up to make it easier 
const submitBtn = document.getElementById('add-button');
submitBtn.addEventListener('click', addTodo);
  
function addTodo (event) {
    event.preventDefault();   
    console.log('clicked');

    
//get element by id for ul list
//let listItem = document.getElementById('list-items').input.value;
//create a new li element // document.createElement('li);
//display that list item to the page
// add class to li 
// ******* add text node with input value appendChild / PROBLEM ****** 
// appendChild to ul parent 
    let listItem = document.getElementById('list-items');
    console.log(listItem);

    let ul = document.querySelector('ul');
    let li = document.createElement('li');
    li.appendChild(document.createTextNode(listItem));
    ul.appendChild(li);
    li.textContent = input.value;
    

}
    

//3. I need the input data to be cleared when I click on the button ClearAll 
const ClearAll = document.getElementById('clear-all');
ClearAll.addEventListener('click', clearTodo); 

function clearTodo (event) {
    console.log('clear all clicked');
    input.value ="";

}


 




  










