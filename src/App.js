import React, { Component } from 'react';

/// Modifica el componente para que se puedan agregar tareas, tachar y destacharlas y error de validacion en el input

class App extends Component {
  constructor() {
    super()
    this.state = {
      tasks: [
        { id: 1, name: "Sacar la ropa", done: false },
        { id: 2, name: "Hacer la cama", done: true },
        { id: 3, name: "Leer un rato", done: false }
      ],
      newTask: '',
      error: '',
      done: false
    }
    this.addTask = this.addTask.bind(this)
    this.updateTask = this.updateTask.bind(this)
    this.getInitialState = this.getInitialState.bind(this)
    this.toggleClass= this.toggleClass.bind(this)
  }
  toggleClass() {
        const currentState = this.state.done;
        this.setState({ done: !currentState });
    };
  getInitialState(){
    return {
      error:''
    }
  }
  addTask(event) {
    (this.state.newTask === "") ?
      this.setState({
        error: 'error'
      })  :
      this.setState({
        error: 'input'
      })
    event.preventDefault()
    const oldTasks = this.state.tasks
    const newTask = {
      id: Date.now(),
      name: this.state.newTask,
      done: false
    }
   this.setState({
      tasks: [...oldTasks, newTask],
      newTask: ''
    })
  }
  updateTask(event) {
    this.setState({
      newTask: event.target.value
    })
  }
  render() {
    return (
      <div className="wrapper">
        <div className="list">
          <h3>Por hacer:</h3>
          <ul className="todo">
            {this.state.tasks.map((task) => <li key={task.id} done={task.done} onClick={this.toggleClass} className={this.state.done ? 'done': null} >{task.name}</li>)}
          </ul>
          <form onSubmit={this.addTask}>
            <input className={this.state.error} type="text" id="new-task" placeholder="Ingresa una tarea y oprime Enter" value={this.state.newTask} onChange={this.updateTask}/>
          </form>
        </div>
      </div>
    )
  }
}

export default App;
