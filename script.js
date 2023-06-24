// Fetches list data from localStorage

/* const itemList = []; */
const itemList = JSON.parse(localStorage.getItem('listKey'));

function newElement() {

  // Creates an empty li element

  var li = document.createElement("li");

  // Takes the content of the input form and saves it as inputValue

  var inputValue = document.getElementById("item").value;

  // Takes inputValue and saves it in the empty li element

  var todo = document.createTextNode(inputValue);
  li.appendChild(todo);

  // Checks first that the field is not empty... then displays this new inputValue in the UI... and clears the input form

  if (inputValue === '') {
    alert("Please write something");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("item").value = "";

  // Adds and saves each new list item to localStorage

  itemList.push(inputValue);
  localStorage.setItem('listKey', JSON.stringify(itemList));
  const listData = JSON.parse(localStorage.getItem('listKey'));
  console.log(listData);

  // Un-comment this to clear localStorage

  /* localStorage.clear(); */


}
