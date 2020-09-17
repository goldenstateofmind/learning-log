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

```javascript
```

## component, controlled component

```javascript
```

## component, function component

```javascript
```


## component, pure component

```javascript
```

## component, uncontrolled component

```javascript
```


## dispatch function

A function that accepts an "[action](#action)" (action object) or an [async action](#async-action); it then may or may not dispatch one or more actions to the store.

A method available on the `store` object that accepts an object (action?) which is used to update the Redux state. Usually the object action is the result of invoking an action creator.

_redux_

```javascript
store.dispatch(setThingAC(info))
```


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
