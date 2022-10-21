## React Local & Session Storage

- useEffect example 'll be added soon

## What is LocalStorage?

- LocalStorage is a browser API that allows developers to store data and later read it.

- It’s basically a database inside of your browser with a little more nuance.

- When using localStorage, you technically need to store values as strings using keys and values, but to store more complex data like objects and arrays, you need to stringify that data when storing and parse it when reading it.

- While this data won’t automatically be persisted across multiple browsers or multiple devices as it will only be stored locally, it still gives you the ability to improve UX where you might not have an opportunity to store every minute detail in a remote database.

## Instructions

- Open your console in Browser and type: localStorage
- Click storage and locate: setItem, getItem.
- We will need those 2 methods to save/retrieve items from Storage.
- console: localStorage.setItem('name', 'onur') check Application > LocalStorage
- console: localStorage.getItem('name') > check console!
- Objects: cannot directly, only with JSON.stringfy
- Objects: retrieve, only with JSON.parse
- const person = {firstName: 'Onur', lastName: 'Onur', age: 31}
- console: book to check
- to save to localstorage: localStorage.setItem('person', JSON.stringfy(person))
- to get the item: localStorage.getItem('person')
- but we have to parse the object: JSON.parse(result)
- JSON.parse(person)
- Check React APP and test it with objects.

## Useful links

- https://www.robinwieruch.de/local-storage-react/
- https://www.youtube.com/watch?v=SOnMln3W0U8
- https://www.freecodecamp.org/news/how-to-use-localstorage-with-react-hooks-to-set-and-get-items/
- https://www.youtube.com/watch?v=ZZS1irWSfxc
