[dispatch](#dispatch)
[action](#action)
[action creator](#action-creator)
[component](#component)
[component, class component](#component, class component)
[component, controlled vs uncontrolled](#component, controlled vs uncontrolled)
[component, function component (presentation component?)](#component, function component (presentation component?))
[component, pure component](#component, pure component)
[dispatch function](#dispatch-function)
[hook](#hook)
[`useEffect`](#`useEffect`)
[`useRef`](#`useRef`)
[`useState`](#`useState`)
[`props`](#`props`)
[Prop Drilling](#Prop Drilling)
[Provider](#Provider)
[react](#react)
[reducer](#reducer)
[redux](#redux)
[state](#state)
[store](#store)
[thunk](#thunk)



## dispatch

```javascript
```

## action
_redux_

An **"action"** is a plain object that represents an intention to change the state. Actions are the only way to get data into the store. Stored data (from UI events, network callbacks, WebSockets, etc) needs to eventually be dispatched as actions.

Actions must have a `type` field. (The types can be defined as constants and imported from another module.

```javascript
const SET_THING_TYPE = "SET_THING" 
```

We'll want to define a different payload (the data we want stored in the store) to the action object every time. So instead of defining an action object like
```javascript
// DON'T do this
const setThingActionObj = {type: SET_THING_TYPE, payload: {todoText: 'Learn React', todoComplete: false}}
```
we'll define an ["action creator"](#action-creator) like 
```javascript
const setThingAC = (info) => ({type: SET_THING_TYPE, payload: info})
```


## action creator
_redux_

A function that returns an action

```javascript
const setThingAC = (info) => ({type: SET_THING_TYPE, payload: info})
```

## component

```javascript
```


## component, class component

(When) do you need a class component (vs function component)?

```javascript
import React, { Component } from 'react'
// import ...

class App extends Component {
  render() {
    return (
      <div className="App">
        <ComponentA />
        <ComponentB />
      </div>
    )
  }
}
export default App
```

## component, controlled vs uncontrolled

A [Controlled Component](https://reactjs.org/docs/forms.html#controlled-components) is one that takes its current value through props and notifies changes through callbacks like onChange. A parent component "controls" it by handling the callback and managing its own state and passing the new values as props to the controlled component. You could also call this a "dumb component".

An [Uncontrolled Component](https://reactjs.org/docs/uncontrolled-components.html) is one that stores its own state internally, and you query the DOM using a ref to find its current value when you need it. This is a bit more like traditional HTML.


```jsx
// Controlled:
<input type="text" value={value} onChange={handleChange} />

const controlledComponent = () => {
  const [foo, setFoo] = useState('foo')

  const handleChange = (e) => setFoo(e.target.value)

  return (<input type="text" value={foo} onChange={handleChange} />)
}

// Uncontrolled:
<input type="text" defaultValue="foo" ref={inputRef} />
// Use `inputRef.current.value` to read the current value of <input>
```

In most (or all) cases [you should use controlled components](https://goshakkk.name/controlled-vs-uncontrolled-inputs-react/#conclusion).

## component, function component (presentation component?)

A component written as a function instead of a class. Prior to React 16.8 these just accepted arguments as properties and rendered simple HTML - they did not have their own state. When using "[hooks](#hook)" 

```javascript
import React from 'react'
// import ...

function App() {
  return (
    <div className="App">
      <ComponentA />
      <ComponentB />
    </div>
  )
}
export default App
```
or

```javascript
import React from 'react'
// import ...

const App = () => {
  return (
    <div className="App">
      <ComponentA />
      <ComponentB />
    </div>
  )
}
export default App
```

## component, pure component

```javascript
```


## dispatch function
_redux_

A function that accepts an "[action](#action)" (action object) or an [async action](#async-action); it then may or may not dispatch one or more actions to the store.

A method available on the `store` object that accepts an object (action?) which is used to update the Redux state. Usually the object action is the result of invoking an action creator.


```javascript
store.dispatch(setThingAC(info))
```
## hook
_React 16.8+_

Hooks are functions that let you "hook into" React state and lifecycle features from function components. Hooks don't work inside classes — they let you use React without classes. Some build in; can create your own.


### `useEffect`

### `useRef`

### `useState`




```javascript
import React, { useState, useEffect } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

```

## `props`

In a class component use `this.props`.

In a function component use `props` (and remember that the function definition has to explicitly include the `props` argument)

Every component has an "automatic" prop named `children` that holds its child components.

## Prop Drilling
[Prop Drilling](https://medium.com/javascript-in-plain-english/how-to-avoid-prop-drilling-in-react-using-component-composition-c42adfcdde1b#:~:text=Prop%20Drilling%20is%20the%20process,help%20in%20passing%20it%20around.) is the process by which you pass data from one part of the React Component tree to another by going through other parts that do not need the data but only help in passing it around.



## Provider
_redux_
The `<Provider />` makes the Redux `store` available to any nested components that have been wrapped in the `connect()` function

## react



```javascript
```

## reducer
_redux_


```javascript
```

## redux
_redux_


```javascript
```

## state

1. Use `useState`
2. Global State with `Context`
3. Redux

```javascript
```

## store
_redux_


```javascript
```

## thunk
_redux_


```javascript
```



https://redux.js.org/glossary

---

# Example App

To-Do List

1. Add ToDo
2. Check off ToDo

To add a todo: needs a text input and potentially a button (to confirm adding).
When user clicks the button, the value of the text input gets sent to the store.


```javascript
// src/index.js
import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'

ReactDOM.render(
  <Provider>
    <App />
  </Provider>,
  document.getElementById('root')
)
```

```javascript
// src/components/App.js
import React, { Component } from 'react'
import ComponentA from './ComponentA'
import ComponentB from './ComponentB'

class App extends Component {
  render() {
    return (
      <div className="App">
        <ComponentA />
        <ComponentB />
      </div>
    )
  }
}
export default App
```

```javascript
// src/components/ToDoList.js
import React, { Component } from 'react'
import ToDo from './ToDo'

class ToDoList extends Component {
  render() {
    return (
      <div className="ToDoList">
        {toDoList.map(todo => (
          <ToDo key={todo.id} />
        ))}
      </div>
    )
  }
}
export default ToDoList
```


```javascript
// src/components/ToDo.js
import React, { Component } from 'react'
import EditButton from 'EditButton'
import DeleteButton from 'DeleteButton'

class ToDo extends Component {
  render() {
    return (
      <div className="ToDo">
        <input 
          type="checkbox"
          checked={this.state.value}
         />
        {props.todoText}
        <EditButton />
        <DeleteButton />
      </div>
    )
  }
}
export default ToDo
```

```javascript
let todos = {
  "todo_1": {
    "id": "todo_1",
    "todoText": "Make ToDo List",
    "todoComplete": false
  },
  "todo_2": {
    "id": "todo_2",
    "todoText": "Relax",
    "todoComplete": false
  },
}

const ADD_TODO = 'ADD_TODO'
const addTodoAC = (info) => ({ type: ADD_TODO, payload: info })

export default class SubmitToDo extends Component {
  onClick() {
    const info = { todoText: 'Learn React', todoComplete: false }
    store.dispatch(addTodoAC(info))
  }

  render() {
    return <button onClick={onClick}>⊕</button>
  }
}

export default class AddToDo extends Component {
  render() {
    return (
      <div>
        <input type="text" />
      </div>
    )
  }
}

export default class ToDo extends Component {
  render() {
    return (
      <div>
        <input type="text" />
      </div>
    )
  }
}

```
