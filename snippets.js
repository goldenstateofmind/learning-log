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
