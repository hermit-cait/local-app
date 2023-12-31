document.getElementById("submit").addEventListener("click", newElement); 

// Fetches list data from localStorage

if (localStorage.getItem('listKey') == null) {
  itemList = [];
} else {
  itemList = JSON.parse(localStorage.getItem('listKey'));
}

// Publishes saved data to the UI

function restoreData() {
  for (let i = 0; i < itemList.length; i++) {    
    li = document.createElement("li");
    let storedData = document.createTextNode(itemList[i]);
    li.appendChild(storedData);
    document.getElementById("myUL").appendChild(li);
  }
}

restoreData();

function newElement() {

  // Creates an empty li element

  li = document.createElement("li");

  // Takes the content of the input form and saves it as inputValue

  inputValue = document.getElementById("item").value;

  // Adds and saves each new list item to localStorage

  itemList.push(inputValue);
  localStorage.setItem('listKey', JSON.stringify(itemList));
  listData = JSON.parse(localStorage.getItem('listKey'));

  // Takes inputValue and saves it in the empty li element

  todo = document.createTextNode(listData.slice(-1));
  li.appendChild(todo);

  // Checks first that the field is not empty... then displays this new inputValue in the UI... and clears the input form

  if (inputValue === '') {
    alert("Please write something");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("item").value = "";

}

// Clears localStorage

document.getElementById("clear").addEventListener("click", clearStorage); 
document.getElementById("clear").addEventListener("keydown", clearStorage);
app = document.getElementById("app")

function clearStorage() {
  localStorage.clear();
  document.getElementById("myUL").remove();
  myUL = document.createElement("ul");
  myUL.setAttribute('id', 'myUL');
  app.appendChild(myUL);
  itemList = [];
  listData = [];
}
