# local-app
An app to practise using localStorage

This is a simple app built to learn about localStorage. Specifically: how to setItem(), how to getItem(), how to clear() and how to manipulate data in the DOM simultaneously with data in localStorage. 

First I built a bare bones todo app with Javascript that doesn't even have a delete function. The app consisted of an input form, a submit button and a button to clear the todo list (and clear the localStorage).

From there I proceeded to create an array to store data in the localStorage with setItem(). Then I accessed this data with getItem() but at first this data was only available to view in the console. 

The process to synchronise the localStorage with the DOM had several requirements. The appendChild() method was used to print the last element in the localStorage array, but it was also necessary to include a conditional in the load function to ensure data persists on page refresh.
